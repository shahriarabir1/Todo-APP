import React from 'react'
import { View ,Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from "react-native-vector-icons/FontAwesome5"
import Main from '../Main';
import ListPlace from './ListPlace';

const Home = () => {
    const Tab=createBottomTabNavigator();
  return (
       <Tab.Navigator>
            <Tab.Screen name='Add Task' component={Main} options={{tabBarIcon:({color,size})=>(
                <Icon name='sign-in-alt' color={color} size={size}/>
            )}}/>
            <Tab.Screen name='Lists' component={ListPlace} options={{tabBarIcon:({color,size})=>(
                <Icon name='subscript' color={color} size={size}/>
            )}}/>
       </Tab.Navigator>
  )
}

export default Home