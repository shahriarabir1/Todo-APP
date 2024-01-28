import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import Main from "./Main";
import Store from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/Login";
import Home from './components/Home';

export default function App() {
  const Stack=createStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={Store}>
        <Stack.Navigator>
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
  
      </Provider>
    </NavigationContainer>

   
  )
}

