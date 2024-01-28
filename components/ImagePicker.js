import React, { useState } from 'react'
import { View ,Text, Button, Image} from 'react-native'
import * as ImagePicker from "expo-image-picker"
const ImagePickers = (props) => {
    const handleImage=async()=>{
        try{
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                quality: 1,
                aspect:[4,3]
              });
              if (result.canceled===false) {
                props.setImage(result.assets[0].uri)
                console.log(result.assets[0].uri)
              } else {
                alert('You did not select any image.');
              }
        }catch(e){
            console.log(e)
        }
    }
    let show=null;
    if(props.image!==""){
        show = <Image source={{uri:props.image}} style={{width:'100%',height:200}}/>
    }
  return (
    <View>
        {show}
        
        <Button title='Pick an image' onPress={handleImage}/>
        
    </View>
  )
}

export default ImagePickers;