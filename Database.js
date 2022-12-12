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
  setDoc} from "firebase/firestore"; 

  export const deletefromDB = async ()=>{
    try{
      const docRef = doc(db, "user", id);
      await deleteDoc(docRef);
      alert("Deleted!!")
      readfromDB()
    }catch(error){
      console.log(error.message)
    }
  }

  export const updateDB = async (props,qid,answer)=>{//nickname, question id, answer
    try{
      const docRef = doc(db, "User",props); //props is nickname.
      await updateDoc(docRef, 
        `${qid}`,answer //qid: answer 형태로 DB에 Update
      );
      alert("Updated!!")
    }catch(error){
      console.log(error.message)
    }
  }

  export const queryDB = async ()=>{
    try{
      const q = query(collection(db, "question"), where("question1","=="));
      const singleDoc = await getDocs(q);
      comsole.log(singleDoc)
    }catch(error){
      console.log(error.message)
    }
  }

  export const readfromDB = async ()=>{ //DB Data 읽기
    try{
      const data = await getDoc(collection(db,"question","question1"))
      var result = data.docs.map(doc => ({ ...doc.data()}));
      console.log(result)
    }catch(error){
      console.log(error.message)
    }
  }

  export const addTeacher = async (props)=>{
    try{
      await setDoc(doc(db,"teacher",props), {
        Name: props,

      });
      alert("Added!!")
    }catch(error){
      console.log(error.message)
    }
  }

  export const addAnswer = async (props,answer)=>{
    try{
      await setDoc(doc(db,"User",props), {
        m_question: answer
      });
      alert("Added!!")
    }catch(error){
      console.log(error.message)
    }
  }
  




