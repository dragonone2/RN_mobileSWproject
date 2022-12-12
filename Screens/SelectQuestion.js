import React, { useState } from 'react'
import { StyleSheet, View, Button, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper'

const SelectQuestion =({route,navigation})=>{
   const {Name} = route.params;
   const [solved1,setSolved1] = useState(false);
   const [solved2,setSolved2] = useState(false);
   const [solved3,setSolved3] = useState(false);
   const [solved4,setSolved4] = useState(false);
   const [solved5,setSolved5] = useState(false);
   const [solved6,setSolved6] = useState(false);
   const [solved7,setSolved7] = useState(false);
   const [solved8,setSolved8] = useState(false);


    return(
        <View style={styles.container}>
            <View style={styles.listbox}>

             <View style={styles.title}>
                <TouchableOpacity
                disabled={solved1}
                onPress={()=>{
                    navigation.navigate("MainQuestion",{qNum:1,Name:Name})
                    setSolved1(true);
                    }}>
                    {solved1?(<Image 
                    source={require('../assets/Question1-1.png')}
                    style={styles.image} >
                    </Image>):( <Image 
                    source={require('../assets/Question1.png')}
                    style={styles.image} >
                    </Image>)}
                
                   
                </TouchableOpacity>
            </View>

            <View style={styles.title}>
            <TouchableOpacity 
                    disabled={solved1}
                    onPress={()=>{
                    navigation.navigate("MainQuestion",{qNum:2,Name:Name})
                    setSolved2(true);
                    }}>
                    {solved2?(<Image 
                    source={require('../assets/Question1-2.png')}
                    style={styles.image} >
                    </Image>):( <Image 
                    source={require('../assets/Question2.png')}
                    style={styles.image} >
                    </Image>)}
                </TouchableOpacity>
            </View>

            <View style={styles.title}>
            <TouchableOpacity 
                    disabled={solved3}
                    onPress={()=>{
                    navigation.navigate("MainQuestion",{qNum:3,Name:Name})
                    setSolved3(true);
                    }}>
                    {solved3?(<Image 
                    source={require('../assets/Question1-3.png')}
                    style={styles.image} >
                    </Image>):( <Image 
                    source={require('../assets/Question3.png')}
                    style={styles.image} >
                    </Image>)}
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
            <TouchableOpacity 
                    disabled={solved4}
                    onPress={()=>{
                    navigation.navigate("MainQuestion",{qNum:4,Name:Name})
                    setSolved4(true);
                    }}>
                    {solved4?(<Image 
                    source={require('../assets/Question1-4.png')}
                    style={styles.image} >
                    </Image>):( <Image 
                    source={require('../assets/Question4.png')}
                    style={styles.image} >
                    </Image>)}
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
            <TouchableOpacity 
                    disabled={solved5}
                    onPress={()=>{
                    navigation.navigate("MainQuestion",{qNum:5,Name:Name})
                    setSolved5(true);
                    }}>
                    {solved5?(<Image 
                    source={require('../assets/Question1-5.png')}
                    style={styles.image} >
                    </Image>):( <Image 
                    source={require('../assets/Question5.png')}
                    style={styles.image} >
                    </Image>)}
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
            <TouchableOpacity 
                    disabled={solved6}
                    onPress={()=>{
                    navigation.navigate("MainQuestion",{qNum:6,Name:Name})
                    setSolved6(true);
                    }}>
                    {solved6?(<Image 
                    source={require('../assets/Question1-6.png')}
                    style={styles.image} >
                    </Image>):( <Image 
                    source={require('../assets/Question6.png')}
                    style={styles.image} >
                    </Image>)}
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
            <TouchableOpacity 
                    disabled={solved7}
                    onPress={()=>{
                    navigation.navigate("MainQuestion",{qNum:7,Name:Name})
                    setSolved7(true);
                    }}>
                    {solved7?(<Image 
                    source={require('../assets/Question1-7.png')}
                    style={styles.image} >
                    </Image>):( <Image 
                    source={require('../assets/Question7.png')}
                    style={styles.image} >
                    </Image>)}
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
            <TouchableOpacity 
                    disabled={solved8}
                    onPress={()=>{
                    navigation.navigate("MainQuestion",{qNum:8,Name:Name})
                    setSolved8(true);
                    }}>
                    {solved8?(<Image 
                    source={require('../assets/Question1-8.png')}
                    style={styles.image} >
                    </Image>):( <Image 
                    source={require('../assets/Question8.png')}
                    style={styles.image} >
                    </Image>)}
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#9999ff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
    },
    listbox:{ //Question이 들어있는 Box
        backgroundColor:'#fff',
        borderRadius: 15,
        borderWidth:2,
        borderColor:'#5614B0',
        borderStyle:'solid',
        marginBottom:15,
        width:120,
        alignItems: 'center',
        flexDirection:'column',
      },
    title: {
        marginTop:15,
        marginBottom:15,

    },
    image:{
            justifyContent:'center',
            alignItems:'center',
            width:70,
            height:70,
    }
})

export default SelectQuestion;