import React from "react";
import { Modal,View,Text, Button } from "react-native";


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
                <Button title="Back" onPress={handleBack}/>
            </View>
        </Modal>
    )
}