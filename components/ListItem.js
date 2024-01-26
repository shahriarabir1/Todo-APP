import React from "react";
import { View, Button, Text,  TouchableWithoutFeedback } from "react-native";

export const Listitem = (props) => {
  const deleteSubmit = (index) => {
    const updatedList = props.listitem.filter((_, i) => i !== index);
    props.setListitem(updatedList); // Use the setListitem prop from the parent component
  };

  return (
    <TouchableWithoutFeedback onPress={props.onItemPress}>
       <View
      style={{
        flexDirection: "row",
        width: "50%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
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
    </TouchableWithoutFeedback>
   
  );
};
