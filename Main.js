import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import { Listitem } from './components/ListItem';
import { ModalList } from './components/ModalList';
import { useDispatch,useSelector } from 'react-redux';
import { ADD } from './redux/reducer';
export default function Main(props) {
  const listitem=useSelector(state=>state.listitem)
  const dispatch=useDispatch();
  const [inputvalue,setInputvalue]=useState('')
  const [datevalue,setDate]=useState('')
  const handleInput=(text)=>{
   setInputvalue(text)
  }
  const handleDate=(text)=>{
    setDate(text);
  }
  const handleSubmit=()=>{
    if(inputvalue!==""){
      dispatch(ADD({inputvalue,datevalue}));
    }
    
  }
const [selected,setSelected]=useState(null);
const onItemPress=()=>{
  const select=listitem.find((key)=>{
    if(key===key){
      return(listitem)
    }
  });
  setSelected(select)

}
let modal=null;
if(selected!==null){
  modal=<ModalList item={selected} setSelected={setSelected}/>
}
  return (
    <View style={styles.container}>
      <Text>Add Your Tasks</Text>
      {modal}
      <View style={styles.inputView}>
        <TextInput placeholder='Add Task Here' style={{
          borderColor:"black",
          borderBottomWidth:1 ,
          padding:10,
          width:"70%"
          }} onChangeText={text=>handleInput(text)}
          value={inputvalue}
          />
          <TextInput placeholder='dd/mm/yy' style={{
          borderColor:"black",
          borderBottomWidth:1 ,
          padding:10,
          width:"70%"
          
          }} onChangeText={text=>handleDate(text)}
          value={datevalue}
          />
         
          <Button title="Add Task" onPress={handleSubmit}/>
      </View>
        <ScrollView>
          {listitem.map((item,index)=>{
            return(
              // <View style={{flexDirection:"row" , width:"50%" ,justifyContent:"space-between", alignItems:'center',padding:10}}>
              //   <Text key={index}>{item}</Text>
              //   <Button title='X' color='red' onPress={()=>deleteSubmit(index)} /> 
              // </View>
              <Listitem key={index} item={item} index={index} listitem={listitem}  onItemPress={onItemPress}/>
             
            )
          })}
         </ScrollView>
         {/* <FlatList data={listitem} renderItem={(info)=>{
          return(<Listitem item={info.item}  listitem={listitem} setListitem={setListitem} onItemPress={()=>onItemPress(item)}/>)
         }}/> */}
         
        
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
    flexDirection:"column",
    justifyContent:'space-between',
    alignItems:"center",
    padding:20,
    gap:10
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  dateText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
