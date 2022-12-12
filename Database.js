import React, { useState } from 'react';
import { View, TextInput, Button,StyleSheet,Text, DynamicColorIOS } from 'react-native';
import  {db}  from './firebaseConfig';
import { 
  addDoc, 
  collection, 
  getDocs,
  doc,
  updateDoc,
  deleteDoc,  
  where,
  query,
  Firestore,
  getDoc, 
  setDoc,UpdateData} from "firebase/firestore"; 
import { async } from '@firebase/util';

  export const updateScore = async (nickname)=>{//정답시 점수를 올려주는 메소드
    try{
      const docRef = doc(db, "student",nickname); //props is nickname.
      const docSnap = await getDoc(docRef);
      const currentScore = docSnap.get("Score");
      console.log("currentScore", currentScore)
      let updatedScore = currentScore+1;

      await updateDoc(docRef,{
        Score:updatedScore
      });
      alert("addScore")
    }catch(error){
      console.log(error.message)
    }
  }

  export const readfromDB = async ()=>{ //DB Data 읽기
    try{
     const docRef = doc(db,"question","question1");
     const docSnap = await getDoc(docRef);
     const result = docSnap.get("main_Q1");

     return result;
    }catch(error){
      console.log(error.message)
    }
  }


  export const addName = async (props)=>{ //Login Screen에서 닉네임 입력시 DB에 학생정보를 추가한다.
    try{
      await setDoc(doc(db,"student",props), {
        Name: props,
        Score:0
      });
      alert("Added!!")
    }catch(error){
      console.log(error.message)
    }
  }

 
  




