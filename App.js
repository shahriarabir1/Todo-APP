import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import Main from "./Main";
import Store from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/Login";
import Home from './components/Home';
import { Button, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
import { navRef,navigate } from './components/navigateRoot';

export default function App() {
  const Stack=createStackNavigator();
 
  return (
    <NavigationContainer ref={navRef}>
      <Provider store={Store}>
        <Stack.Navigator>
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name='Home' component={Home} options={
      {
        headerLeft:null,
        headerRight:()=>(<TouchableOpacity onPress={()=>navigate('Login')}>
          <Icon name='power-off' size={26} style={{paddingRight:10}}/>
        </TouchableOpacity>)
      }
    }/>
        </Stack.Navigator>
  
      </Provider>
    </NavigationContainer>

   
  )
}

