import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
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
  import  {db}  from '../firebaseConfig';
import * as DBfunction from '../Database'

const Question = ({route,navigation}) =>{
  const [flag, setFlag] = useState(true) //무한루프를 빠져나가기 위한 flag
  const [inputanswer,setInputanswer] = useState('') //TextInput에 답을 입력받는 answer 부분

  const [step, setStep] = useState([]) //각 strategy에 대한 step문제를 담을 배열
  const [stephandler, setStephandler] = useState(0); //readfromDB에서 받아온 stepNum을 다루는 stephandler
  
  const {qNum} = route.params; //문제 번호를 전달받는 qNum변수
  const {Name} = route.params; //student의 Name을 전달받는 변수
  const {question} = route.params; //MainQuestion의 Text를 전달받는 변수
  const {strategy} = route. params; //Select에서 전달받은 strategy 타입(A,B,C)을 전달받을 변수

  const [progress,setProgress] = useState(1); //현재의 진행정도를 알려주는 progress
  const [number,setNumber] = useState(1); //progress를 증가시키기 위한 용도
 
  const readQuestion = async ()=>{ //DB에서 question가져오기
    try{
     const docRef = doc(db,"question",`question${qNum}`);
     const docSnap = await getDoc(docRef);
     const stepNum = docSnap.get(`${strategy}.stepnum`)
     setStephandler(stepNum); //DB에서 가져온 각 strategy에 대한 step의 갯수를 다루기 위해 stephandler에 저장.
     for(let i=0;i<stepNum;i++){
      const test = docSnap.get(`${strategy}.step${i+1}`)
      setStep(step => [...step,test]) //setStep을 통해 step에 DB에서 가져온 step별 문제를 넣는다
     }
    }catch(error){
      console.log(error.message)
    }
  }

  const readAnswer = async (qNum,strategy,progress)=>{  //DB에서 step에 대한 answer가져오기
    try{
     const docRef = doc(db,"answer",`question${qNum}`);
     const docSnap = await getDoc(docRef);
     const result = docSnap.get(`${strategy}.step${progress}`);
    
     return result;
    }catch(error){
      console.log(error.message)
    }
  }

  if(flag){
    setFlag(false)
    readQuestion();
  }
 
    return(
        <View style={styles.container}>
      <StatusBar backgroundColor='black'/>
      <View style={styles.questionBox}>
        <Text style={{fontWeight:"bold"}}>{question}</Text> 
      </View>
      <View style={styles.questionBox}>
        <Text style={{fontWeight:"bold"}}>
          {`step${progress}`}
          </Text> 
      </View>
      <View style={styles.inputView}>
        <Text style={{fontWeight:"bold"}}>
          {step[progress-1]}
        </Text>
        <TextInput style={styles.input} multiline={true} value={inputanswer} onChangeText={setInputanswer}/>
        <TouchableOpacity onPress={async()=>{
          let answer = await readAnswer(qNum,strategy,progress);
          console.log(answer)
          if(inputanswer==answer){ //정답일시 correct!!로 알림을 주고 Score를 증가시킨다.
            alert("correct!!")
            DBfunction.updateScore(Name)
          }else if(inputanswer!=answer){ //오답일 시 retry로 알림을 준다.
            alert("wrong~")
          }

          if(progress<stephandler) //현재 진행상황이 step의 수보다 작으면
          {
            setProgress(number+1) //Next Step으로 이동
            setNumber(number+1) //number증가.
            console.log(progress)
            console.log("hi")
          }else if(strategy=="strategyC"){ //마지막 strategyC이면 다시 SelectQuestion으로 간다.
            switch(qNum){
              case 1:
                navigation.navigate("SelectQuestion",{complete1:true})
                break;
              case 2:
                navigation.navigate("SelectQuestion",{complete2:true})
                break;
              case 3:
                navigation.navigate("SelectQuestion",{complete3:true})
                break;
              case 4:
                navigation.navigate("SelectQuestion",{complete4:true})
                break;
              case 5:
                navigation.navigate("SelectQuestion",{complete5:true})
                break;
              case 6:
                navigation.navigate("SelectQuestion",{complete6:true})
                break;
              case 7:
                navigation.navigate("SelectQuestion",{complete7:true})
                break;
              case 8:
                navigation.navigate("SelectQuestion",{complete8:true})
                break;
            }
           
          }
          else{
            console.log("else") //해당 strategy에 대한 모든 step을 완료하면 SelectStrategy로 간다.
            navigation.navigate("SelectStrategy",{qNum:qNum, question:question})
          }
        }}>
            <Text style={styles.btn}>NEXT</Text>
        </TouchableOpacity>
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
      height:'40%',
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
      //fontWeight:"bold",
      textAlign:'center',
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius: 10,
      backgroundColor:'#6666ff'
    },
    input:{ //답을 입력받는 TextInput
      flexShrink:1, //Input 줄바꿈
      width:'100%',
      height:'100%',
      borderWidth:2, 
      borderColor:'black'
    }
  });
  
  export default Question;