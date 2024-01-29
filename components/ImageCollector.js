import React, { useState, useEffect } from 'react';
import { Button, Image, View, TouchableOpacity,Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

 function ImageCollector(props) {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      props.setImage(result.assets[0].uri);
    }
  };
  const removeImage = () => {
    props.setImage(null); // Set the image state to an empty string to remove the image
  };

  return (
    <View>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {props.image && (
        <View>
          <Image source={{ uri: props.image }} style={{ width: 200, height: 200 }} />
          {/* Add a close button */}
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              backgroundColor: 'red',
              borderRadius: 15,
              padding: 5,
            }}
            onPress={removeImage}
          >
            <Text style={{ color: 'white' }}>X</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
export default ImageCollector;