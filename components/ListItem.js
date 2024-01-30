import React from "react";
import { View, Button, Text, TouchableHighlight } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE } from "../redux/reducer";
import Icon from "react-native-vector-icons/FontAwesome5"
const Listitem = (props) => {
  const dispatch=useDispatch();
  const token=useSelector(state=>state.token)
  const deleteSubmit = (index,key) => {
    dispatch(REMOVE(index));
     // Use the setListitem prop from the parent component
     fetch(`https://add-todo-5c667-default-rtdb.firebaseio.com/tasks/${key}.json?auth=${token}`,{
      method:'DELETE'
     }).catch(e=>console.log(e))
     .then(res=>{
      if(res.ok){
        alert("Item deleded")
      }
     })
  };
  return (
    <TouchableHighlight onPress={props.onItemPress} style={{marginBottom:10}}>
       <View
      style={{
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor:"gray",
        opacity:50
      }}
      onPress={props.onItemPress}
    >
      <Text key={props.index}>{props.item.inputvalue}</Text>
      <TouchableHighlight onPress={() => deleteSubmit(props.index,props.item.key)}>
        <Icon name='trash-alt' size={30} color="red"/>
      </TouchableHighlight>
    </View>
    </TouchableHighlight>
   
  );
};

export default Listitem;