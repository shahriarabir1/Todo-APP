import React, { useEffect, useState } from 'react'
import { View, ScrollView } from 'react-native'
import Listitem from "./ListItem"
import { ModalList } from './ModalList';
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../redux/reducer';
const ListPlace = () => {
    const token = useSelector(state => state.token)
    const dispatch = useDispatch();
    useEffect(() => {
        // Fetch data from Firebase
        fetch(`https://add-todo-5c667-default-rtdb.firebaseio.com/.json?auth=${token}`, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((data) => {
                // Assuming 'data' is an array, you might need to adjust accordingly
                const task = Object.keys(data).map((key) => ({
                    ...data[key],

                }));
                const tasks = task.flatMap((item) => {
                    const keys = Object.keys(item);
                    return keys.map((key) => ({
                      ...item[key],
                      key: key, // You can adjust this to concatenate keys in a way that makes sense for your data
                    }));
                  });
                tasks.map((item, index) => {
                    dispatch(ADD(item));
                })

            })
            .catch((e) => console.log(e));
    }, []);


    const listitem = useSelector(state => state.listitem)

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