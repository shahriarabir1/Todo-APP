import React from "react";
import { View, Button, Text, TouchableHighlight } from "react-native";
import { useDispatch } from "react-redux";
import { REMOVE } from "../redux/reducer";
export const Listitem = (props) => {
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
      <Button
        title="X"
        color="red"
        onPress={() => deleteSubmit(props.index)}
      />
    </View>
    </TouchableHighlight>
   
  );
};
