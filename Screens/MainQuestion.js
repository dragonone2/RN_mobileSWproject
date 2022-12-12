import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import * as DBfunction from '../Database'
import SelectStrategy from './SelectStrategy';
import  {db}  from '../firebaseConfig';
import { collection, getDoc, doc } from 'firebase/firestore';

const MainQuestion = ({route,navigation}) =>{
  const [answer,setAnswer] = useState('')
  const [flag,setFlag] = useState(true);
  const [question,setQuestion] = useState()

  const {qNum} = route.params; //문제 Number
  const {Name} = route.params; //student Name

  const readQuestion = async ()=>{ //DB에서 Mainquestion을 읽어오기
    try{
     const docRef = doc(db,"question",`question${qNum}`);
     const docSnap = await getDoc(docRef);
     const result = docSnap.get(`main_Q${qNum}`);

     setQuestion(result)
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
        <Text style={{fontWeight:"bold"}}>What do you think the problem is asking you to do?</Text>
        <TextInput 
        style={styles.input}
        value={answer}
        multiline={true}
        onChangeText={setAnswer}/>
      </View>
      <Button 
      title='→' 
      color='#6666ff' 
      onPress={async ()=>{
        if(answer==""){
          alert("Please Input Text")
        }else{
        await DBfunction.updateScore(Name) //MainQuestion은 모든게 정답이기 때문에 Score를 추가한다.
        navigation.navigate("SelectStrategy",{qNum:qNum, Name:Name, question:question}) //qNum은 QuestionNumber, question은 MainQuestion
        }
      }}/>
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
      marginBottom:15,
      width:400,
      height:100
    },
    inputView:{ //Button들이 모여있는 View
      height:'30%',
      backgroundColor:'#fff',
      paddingVertical:25, //상,하
      paddingHorizontal:20, //좌,우
      borderWidth:2, 
      borderStyle:'solid', 
      borderColor:'#5614B0',
      borderRadius:20
    },
    btn:{ //Button
      marginTop:30,
      fontWeight:"bold",
      fontSize:32,
      textAlign:'center',
      width: 50,
      height: 50,
      borderRadius: 35,
      backgroundColor:'#6666ff'
    },
    input:{ //답을 입력받는 TextInput
      flexShrink:1, //Input 줄바꿈
      width:350,
      height:150,
      borderWidth:2, 
      borderColor:'black'
    },
    
  });

export default MainQuestion;