import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'



const MainScreen = ({route,navigation})=>{
    const {nickname} = route.params;
    return(
    <View style={styles.container}>
      <StatusBar backgroundColor='black'/>
      <TouchableOpacity onPress={()=>{ 
        console.log(nickname)
        navigation.navigate("MainQuestion",{nickname:nickname},)}}>
        <View style={styles.questionBox}>
          <Text style={{fontWeight:"bold"}}>Start</Text> 
        </View>
      </TouchableOpacity>

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
    }
  });

export default MainScreen;