import React from 'react-native';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.grid}>
        <Text style={styles.h1}>Quiz</Text>
    <ScrollView>
    
      <View style={styles.vs}>
        <Text style ={styles.question}>Todd orders pictures from a photographer. 
            Each picture costs $7.50.
             A one-time shipping fee of $3.25 is added to the cost of the order.
            The total cost of Todd’s order before tax is $85.75. 
            How many pictures did Todd order?</Text>
        
      </View>
      <Text style={styles.vs2}>
        <TouchableOpacity 
            style={styles.answer}
            onPress={()=>alert('정답입니다')}>정답1</TouchableOpacity>
        <TouchableOpacity 
            style={styles.answer}
            onPress={()=>alert('오답입니다')}>정답2</TouchableOpacity>        
        <TouchableOpacity 
            style={styles.answer}
            onPress={()=>alert('오답입니다')}>정답3</TouchableOpacity>
        <TouchableOpacity 
            style={styles.answer}
            onPress={()=>alert('오답입니다')}>정답4</TouchableOpacity>
      </Text>
    </ScrollView>
    </View>

    
  )
}

const styles = StyleSheet.create({
    grid:{
        flex:1,
    padding:5,
    margin: 50,
    width: '600px',
    backgroundColor: "#fff",
    border: '2px solid #eed0dc',
    borderRadius:10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems:'center',
    },
    h1:{
        
        alignItems:"center",
        fontSize:40,
        
    },
    vs:{
        backgroundColor: '#fa8072',
        border: '2px solid #eed0dc',
        borderRadius:10,
        alignItems:'center',
    },
    question:{
        color:'#fff',
        margin:10,
        fontSize: 20,
        
    },
    vs2:{
        padding:'30px',
        border: '2px solid #eed0dc',
        borderRadius: 10,
    },
    answer:{
        backgroundColor:'#eed0dc',
        fontSize:15,
        border: '1px solid #ffe3ed',
        borderRadius: 5,
        marginBottom:20,
        marginRight:200,
    }
    
})

export default App;