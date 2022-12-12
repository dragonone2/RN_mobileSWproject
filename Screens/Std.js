import { StatusBar } from 'expo-status-bar';
import React, { useId, useState, useEffect } from 'react'
import { TouchableOpacity, StyleSheet, View, Image , Text} from 'react-native'
import  {db}  from '../firebaseConfig';
import {getDoc, doc } from 'firebase/firestore';

const Std = ({route,navigation})=>{
  const {student} = route.params;
  const [score,setScore] = useState(0);
  const [cls,setCls] = useState();

  const readStudent = async (student)=>{ //DB에서 학생데이터 가져오기
    try{
      console.log(student)
      const docRef = doc(db,"student",`${student}`);
      const docSnap = await getDoc(docRef);
      const studentScore = docSnap.get("Score");
      const studentCls = docSnap.get("Class")
      setScore(studentScore)
      setCls(studentCls)

    }catch(error){
      console.log(error.message)
    }
  }

  useEffect(()=>{
    readStudent(student); //한번만 DB를 읽기 위해 useEffect를 사용한다.
  },[])


    return(
    <View style={styles.container}>
      <TouchableOpacity
        onPress={()=>{
        navigation.navigate("MainScreen",{nickname:student})
      }}>
        <Text style={styles.btn}>←</Text>
      </TouchableOpacity>
      <View style={styles.listbox}>
        <StatusBar backgroundColor='black'/>
          <View style={styles.questionBox}>
         <Image style={styles.image} source={require('../assets/std1.png')} />
        <Text style={styles.std}>{student}</Text>
        </View>
        <Text style={styles.std}>
        {`
        Class: ${cls}
        Score: ${score}/68
        `}</Text> 
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
      marginBottom:15,
      marginTop:15,
      marginLeft:15,
      marginRight:15,
      alignItems: 'center'
    },
    listbox:{ //Question이 들어있는 Box
      backgroundColor:'#fff',
      borderRadius: 15,
      borderWidth:2,
      borderColor:'#5614B0',
      borderStyle:'solid',
      marginBottom:15,
      
      alignItems: 'center',
      flexDirection:'row',
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
      //fontWeight:"bold",
      fontSize:32,
      textAlign:'center',
      width: 50,
      height: 50,
      borderRadius: 35,
      backgroundColor:'#6666ff'
    },
    input:{ //답을 입력받는 TextInput
      flexShrink:1, //Input 줄바꿈
      width:'100%',
      height:'100%',
      borderWidth:2, 
      borderColor:'black'
    },
    image: {
      width: 110,
      height: 110,
      marginBottom: 8,
    },
    std: {
      fontSize: 18,
      fontWeight: "bold",
      marginRight:20,
    }
  });

export default Std;