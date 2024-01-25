import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Listitem } from './components/ListItem';

export default function App() {
  const [inputvalue,setInputvalue]=useState('')
  const [listitem,setListitem]=useState([]);
  const handleInput=(text)=>{
   setInputvalue(text)
  }
  const handleSubmit=()=>{
    if(inputvalue!==""){
      setListitem([...listitem,inputvalue])
    }
    
  }
const onItemPress=()=>{
  alert(item)

}
  return (
    <View style={styles.container}>
      <Text>Add You Tasks</Text>
      <View style={styles.inputView}>
        <TextInput placeholder='Add Task Here' style={{
          borderColor:"black",
          borderBottomWidth:1 ,
          padding:10,
          width:"70%"
          }} onChangeText={text=>handleInput(text)}
          value={inputvalue}
          />
          <Button title="Add Task" onPress={handleSubmit}/>
      </View>
      <View>
          {listitem.map((item,index)=>{
            return(
              // <View style={{flexDirection:"row" , width:"50%" ,justifyContent:"space-between", alignItems:'center',padding:10}}>
              //   <Text key={index}>{item}</Text>
              //   <Button title='X' color='red' onPress={()=>deleteSubmit(index)} /> 
              // </View>
              <Listitem item={item} index={index} listitem={listitem} setListitem={setListitem} onItemPress={onItemPress}/>
             
            )
          })}
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
    justifyContent:"flex-start",
    marginTop:50
  },
  inputView:{
    width:"100%",
    marginTop:10,
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:"center",
    padding:20
  }
});
