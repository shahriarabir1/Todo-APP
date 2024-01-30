import React, { useState,useEffect } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch,useSelector } from 'react-redux'
import { AddToken, Authenticate } from '../redux/reducer'
import { useIsFocused } from '@react-navigation/native'
const Login = (props) => {
  const isFocus=useIsFocused();
 
  const isAuth=useSelector(state=>state.isAuth)
  useEffect(() => {

   
  }, [isAuth]);
  const dispatch=useDispatch()

  const [authstate, setAuthstate] = useState({
    mode: 'login',
    inputs: {
      email: "",
      password: "",
      confirm_password: ""
    }
  })
  useEffect(()=>{
    setAuthstate(
      {
         ...authstate,
    inputs:{
      email:"",
      password:"",
      confirm_password:""
    }
      }
    )
   
  },[isFocus])
  const changeMode = () => {
    setAuthstate({
      ...authstate, mode: authstate.mode === 'login' ? 'Sign up' : 'login'
    })
  }
  const updateState = (value, name) => {
    setAuthstate({
      ...authstate,
      inputs: {
        ...authstate.inputs,
        [name]: value
      }
    })

  }
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  const authUser = async () => {
    const email = authstate.inputs.email;
    const password = authstate.inputs.password;
    const confirm = authstate.inputs.confirm_password;
  
    if (email !== '' && password !== '') {
      if (re.test(email)) {
        if (authstate.mode !== 'login') {
          if (password === confirm) {
            try {
              const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAf7xiPk9pZH5VrMlO8J0P-dBwoNBir_xs', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  email,
                  password,
                  returnSecureToken: true,
                }),
              });
  
              if (response.ok) {
                dispatch(Authenticate(true))
                const data = await response.json();
                if (isAuth) {
                  alert("Sign up completed")
                  props.navigation.navigate('Home');
                } else {
                  alert("You are not permitted");
                }
                
              } else {
                const errorData = await response.json();
                console.error('Error:', errorData.error.message);
              }
            } catch (error) {
              console.log('Fetch error:', error);
            }
          } else {
            alert('Password not correct');
          }
        } else {
          try {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAf7xiPk9pZH5VrMlO8J0P-dBwoNBir_xs', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
              }),
            });

            if (response.ok) {
              dispatch(Authenticate(true))
              const data = await response.json();
             await dispatch(AddToken(data.idToken))
              if (isAuth) {
                props.navigation.navigate('Home');
              } else {
                alert("You are not permitted");
              }
            
            } else {
              const errorData = await response.json();
              console.error('Error:', errorData.error.message);
            }
          } catch (error) {
            console.log('Fetch error:', error);
          }
        }
      } else {
        alert('Email is not valid');
      }
    } else {
      alert('There is an empty field');
    }
  };
  
  let conf = null;
  if (authstate.mode === 'Sign up') {
    conf = (<TextInput placeholder='Enter confirm password' value={authstate.inputs.confirm_password} style={Styles.inputView} onChangeText={(value) => updateState(value, 'confirm_password')} />)
  }
  return (
    <View style={Styles.loginView}>
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', width: 150, padding: 10 }} onPress={changeMode}>
        <Text style={{ fontSize: 14, color: '#fff', alignSelf: 'center' }}>{authstate.mode === 'login' ? 'Switch to Sign up' : 'Switch to Login'}</Text>
      </TouchableOpacity>
      <TextInput
        placeholder='Enter your email'
        value={authstate.inputs.email}
        style={Styles.inputView}
        onChangeText={(value) => updateState(value, 'email')}
      />

      <TextInput
        placeholder='Enter password'
        value={authstate.inputs.password}
        style={Styles.inputView}
        onChangeText={(value) => updateState(value, 'password')}
      />

      {conf}
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', width: 150, padding: 10 }} onPress={authUser}>
        <Text style={{ fontSize: 14, color: '#fff', alignSelf: 'center' }}>{authstate.mode === 'login' ? authstate.mode : 'Sign up'}</Text>
      </TouchableOpacity>

  
    </View>
  )
}

export default Login;

const Styles = StyleSheet.create(
  {
    loginView: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputView: {
      borderBottomWidth: 1,
      borderColor: 'black',
      marginBottom: 20,
      padding: 10
    }
  }
)