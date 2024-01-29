import React from "react";
import { Modal,View,Text, Button,Image } from "react-native";


export const ModalList=(props)=>{
    const handleBack=()=>{
        props.setSelected(null)
    }
    return(
        <Modal>
            <View>
                <Text>
                    {props.item.inputvalue}
                </Text>
                <Text>
                    {props.item.datevalue}
                </Text>
                <Image source={{ uri: props.item.image }} style={{ width: 200, height: 200 }} />
                <Button title="Back" onPress={handleBack}/>
            </View>
        </Modal>
    )
}