import React from 'react'
import { View,Text, Button } from 'react-native'

const Login = (props) => {
  return (
    <View>
        <Text>
            Login
        </Text>
        <Button title='Home' onPress={()=>props.navigation.navigate('Home')}/>
    </View>
  )
}

export default Login