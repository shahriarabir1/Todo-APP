import React from "react";
import { View, Button, Text, TouchableHighlight } from "react-native";
import { useDispatch } from "react-redux";
import { REMOVE } from "../redux/reducer";
import Icon from "react-native-vector-icons/FontAwesome5"
const Listitem = (props) => {
  const dispatch=useDispatch();
  const deleteSubmit = (index) => {
    dispatch(REMOVE(index));
     // Use the setListitem prop from the parent component
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
      <TouchableHighlight onPress={() => deleteSubmit(props.index)}>
        <Icon name='trash-alt' size={30} color="red"/>
      </TouchableHighlight>
    </View>
    </TouchableHighlight>
   
  );
};

export default Listitem;