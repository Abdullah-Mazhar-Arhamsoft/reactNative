/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  ScrollView,
  Button,
} from 'react-native';
import App1 from './App1';
import App5 from './App5';
import App4 from './App4';


const App = () => {

  return (
      
//       <View style={styles.container}>
//         <ImageBackground source={require('./images/back.png')} style={styles.backimg}>

// <ScrollView>
// <View>

//         <View style={styles.btnstyle}>
//         <Button title="Press me" color={"#F93E32"} ></Button>
//         </View>
 
//         <View style={styles.row}>
//           <Text style={styles.text1}>
//             Name :
//           </Text> 
//           <TextInput style={styles.input1} placeholder='Your name '
//            placeholderTextColor={"White"}>

//           </TextInput>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.text1}>
//             Name :
//           </Text> 
//           <TextInput style={styles.input1} placeholder='Your name '
//            placeholderTextColor={"White"}>

//           </TextInput>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.text1}>
//             Name :
//           </Text> 
//           <TextInput style={styles.input1} placeholder='Your name '
//            placeholderTextColor={"White"}>

//           </TextInput>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.text1}>
//             Name :
//           </Text> 
//           <TextInput style={styles.input1} placeholder='Your name '
//            placeholderTextColor={"White"}>

//           </TextInput>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.text1}>
//             Name :
//           </Text> 
//           <TextInput style={styles.input1} placeholder='Your name '
//            placeholderTextColor={"White"}>

//           </TextInput>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.text1}>
//             Name :
//           </Text> 
//           <TextInput style={styles.input1} placeholder='Your name '
//            placeholderTextColor={"White"}>

//           </TextInput>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.text1}>
//             Name :
//           </Text> 
//           <TextInput style={styles.input1} placeholder='Your name '
//            placeholderTextColor={"White"}>

//           </TextInput>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.text1}>
//             Name :
//           </Text> 
//           <TextInput style={styles.input1} placeholder='Your name '
//            placeholderTextColor={"White"}>

//           </TextInput>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.text1}>
//             Name :
//           </Text> 
//           <TextInput style={styles.input1} placeholder='Your name '
//            placeholderTextColor={"White"}>

//           </TextInput>
//         </View>

//         <View style={styles.row}>
//           <Text style={styles.text1}>
//             Name :
//           </Text> 
//           <TextInput style={styles.input1} placeholder='Your name '
//            placeholderTextColor={"White"}>

//           </TextInput>
//        </View>

//        </View>
//        </ScrollView>

//        <View style={styles.b1}>
//         <Text style={styles.textbottom}>
//           Welcome
//         </Text>
//         </View> 
//         {/* <App1 /> */}
//        </ImageBackground>

       
//       </View>

<View style={styles.container}>
    <App5></App5>
</View>

  );
};

const styles = StyleSheet.create({

  container:{
    flex: 1,
    
  },
  
  row:{
    flexDirection: 'row',
    marginTop: 30,
    padding: 10,
    borderWidth: 3,
    borderColor: 'thistle',
    
  },

  backimg:{
    flex: 1, 
  },

  text1: {
    alignContent: 'center',
    textAlign: 'center',
    padding: 10,
    fontSize: 25,
    marginEnd: 5,
    marginStart: 5,
    color: '#ffffff',
    backgroundColor:'#F95532',
    borderWidth: 1,
    borderColor: 'thistle',
    flex: 1,
    height: 50,
  },

  input1:{
    alignContent: 'center',
    textAlign: 'center',
    padding: 10,
    fontSize: 20 ,
    marginEnd: 5,
    marginStart: 5,
    backgroundColor: '#32F9E4',
    color: '#ffffff',
    borderWidth: 1,
    borderColor: 'thistle',
    flex: 1, 
    height: 50,
  },

  textbottom:{
    marginBottom: 30,
    fontSize: 25,
    color: 'white',
  },

  b1:{
    marginBottom:20,
    backgroundColor:'#32F962',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 'auto',
  },
  btnstyle:{
    
    marginStart: 40,
    marginEnd: 40,
    borderWidth: 5,
    borderColor: "thistle",
  }
});

export default App;
