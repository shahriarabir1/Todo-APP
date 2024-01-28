import React,{useState} from 'react'
import { View, ScrollView } from 'react-native'
import Listitem from "./ListItem"
import { ModalList } from './ModalList';
import { useSelector } from 'react-redux';
const ListPlace = () => {
    const listitem = useSelector(state => state.listitem);
    const [selected, setSelected] = useState(null);
    const onItemPress = () => {
        const select = listitem.find((key) => {
            if (key === key) {
                return (listitem)
            }
        });
        setSelected(select)

    }
    let modal = null;
    if (selected !== null) {
        modal = <ModalList item={selected} setSelected={setSelected} />
    }
    return (
        <View>
            {modal}
            <ScrollView>
                {listitem.map((item, index) => {
                    return (
                        // <View style={{flexDirection:"row" , width:"50%" ,justifyContent:"space-between", alignItems:'center',padding:10}}>
                        //   <Text key={index}>{item}</Text>
                        //   <Button title='X' color='red' onPress={()=>deleteSubmit(index)} /> 
                        // </View>
                        <Listitem key={index} item={item} index={index} listitem={listitem} onItemPress={onItemPress} />

                    )
                })}
            </ScrollView>
        </View>
    )
}

export default ListPlace