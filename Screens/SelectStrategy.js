import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import  {db}  from '../firebaseConfig';
import { 
  addDoc, 
  collection, 
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,  
  where,
  query,
  Firestore} from "firebase/firestore"; 


const SelectStrategy = ({route,navigation}) =>{
  const [flag,setFlag] = useState(true)
  const {qNum} = route.params;
  const {Name} = route.params;
  const {question} = route.params;

  const [strategyA,setStrategyA] = useState();
  const [strategyB,setStrategyB] = useState();
  const [strategyC,setStrategyC] = useState();

  const readQuestion = async ()=>{ //DB Data 읽기
    try{
     const docRef = doc(db,"question",`question${qNum}`);
     const docSnap = await getDoc(docRef);
    
    const stA = docSnap.get('strategyA.question');
    const stB = docSnap.get('strategyB.question');
    const stC = docSnap.get('strategyC.question');
     
     setStrategyA(stA);
     setStrategyB(stB);
     setStrategyC(stC);
    }catch(error){
      console.log(error.message)
    }
  }
  useEffect(()=>{
    readQuestion(); //한번만 DB를 읽기 위해 useEffect를 사용한다.
  },[])


    return(
      <View style={styles.container}>
      <View style={styles.questionBox}>
      <Text style={{fontWeight:"bold"}}>{question}</Text>
      </View>

      <View style={styles.inputView}>
          <Text style={{fontWeight:"bold"}}>Which strategy do you want to try?</Text>

          <View style={{padding:15}}>
          <Button 
            color='#6666ff' title={strategyA} onPress = {()=>navigation.navigate("Question",{qNum:qNum, Name:Name, question:question, strategy:"strategyA"})}
            />
          </View>

          <View style={{padding:15}}>
            <Button color='#6666ff' title={strategyB} onPress={()=>navigation.navigate("Question",{qNum:qNum, Name:Name, question:question, strategy:"strategyB"})}
            />
          </View>

          <View style={{padding:15}}>
             <Button color='#6666ff' title={strategyC} onPress = {()=>navigation.navigate("Question",{qNum:qNum, Name:Name, question:question, strategy:"strategyC"})}/>
          </View>
      </View>

      
    </View>
    );
}

const styles = StyleSheet.create({
    container: {//전체적인 View
      flex: 1,
      backgroundColor: '#9999ff',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center',
    },
    questionBox:{ //Question이 들어있는 Box
      paddingVertical: 10,
      paddingHorizontal:5,
      backgroundColor:'#fff',
      borderRadius: 15,
      borderWidth:2,
      borderColor:'#5614B0',
      borderStyle:'solid',
      marginBottom:15
    },
    inputView:{ //Button,Input들이 모여있는 View
      height:'35%',
      backgroundColor:'#fff',
      paddingVertical:25, //상,하
      paddingHorizontal:20, //좌,우
      borderWidth:2, 
      borderStyle:'solid', 
      borderColor:'#5614B0',
      borderRadius:20
    },
    btn:{ //Button
      textAlign:'center',
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius: 10,
      backgroundColor:'#6666ff'
    },
  });
  
  export default SelectStrategy;