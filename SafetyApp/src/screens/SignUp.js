import React, { useState } from "react";
import {StyleSheet, View, Text, ImageBackground, KeyboardAvoidingView,Alert} from "react-native";
import CustomButton from "../component/CustomButton";
import ImageView from "../component/ImageView";
import InputTextView from "../component/InputTextView";
import TextSide from "../component/TextSide";
import TextView from "../component/TextView";
import {openDatabase} from "react-native-sqlite-storage";
import {updateUserEmail} from '../features/counter/counterSlice'
import {useDispatch, useSelector} from 'react-redux';

var db = openDatabase(
    {
        name: 'database.db',
        location: 'default',
    },
    () => {},
    error => {console.log(error)}
    );

function SignUp ({navigation}) {

const [userName, setUserName] = useState('');
let [userContact, setUserContact] = useState('');
let [userEmail, setUserEmail] = useState('');
let [userPassword, setUserPassword] = useState('');
const dispatch = useDispatch();

let register_user = () => {
    console.log(userName, userContact, userEmail,userPassword);
 
    if (userName == '') {
      alert('Please fill name');
      return;
    }
    if (userContact == '') {
      alert('Please fill Contact Number');
      return;
    }
    if (userEmail == '') {
      alert('Please fill Email');
      return;
    }
    if (userPassword == '') {
        alert('Please fill Password');
        return;
    }

    dispatch(updateUserEmail(userEmail));
 
    db.transaction(function (tx) {
      tx.executeSql(
        // 'INSERT INTO User (username, email, user_contact, password) VALUES (?, ?, ?, ?)',
        // [userName, userEmail, userContact, userPassword],
        'INSERT INTO table_user (user_name, user_email, user_contact, user_password) VALUES (?,?,?,?)',
        [userName, userEmail, userContact, userPassword],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('LogIn'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Registration Failed');
        }
      );
    });
  };

    const image = {
        houseImage : require('../Images/icon2.png'),
    };

    // const press = () => { 
    //     navigation.goBack();
    //     //navigation.navigate('LogIn', {name : 'Login Page'})
    //     // navigation.navigate('About', {paramKey: username,})
    // };

    return(
        
        <View style={styles.container}>
            <ImageBackground source={require('../Images/back-image.png')} style={styles.backimg}>
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.imagecontainer}> 
            <ImageView images={image.houseImage} styling={styles.image} />
            </View>

            <View style={styles.main}>
                <TextView>SignUp</TextView>
            
                <View style={styles.textbox}>
                    
                    <TextSide>Name :</TextSide>
                    <InputTextView
                     place={"Enter Name ..."}
                     onChangeText={setUserName}
                      value={userName}
                     ></InputTextView>
                    
                </View>

                <View style={styles.textbox}>
                    <TextSide>Email :</TextSide>
                    <InputTextView 
                    place={"Enter Email ..."}
                    onChangeText={setUserEmail}
                    value={userEmail}
                    ></InputTextView>
                </View>

                <View style={styles.textbox}>
                    <TextSide>Phone no. :</TextSide>
                    <InputTextView
                     place={"Enter Phone No. ..."}
                     onChangeText={setUserContact}
                     value={userContact}
                      maxLength={10}
                      keyboardType="numeric"
                     ></InputTextView>
                </View>
            
                <View style={styles.textbox}>
                    <TextSide>Password :</TextSide>
                    <InputTextView 
                        place={"Enter Password ..."}
                        onChangeText={setUserPassword}
                        value={userPassword}
                        secureTextEntry={true}
                        ></InputTextView>
                </View>

                <View style={{}}>
                    <CustomButton
                    onPress={() => register_user()}
                    >
                    SignUp
                    </CustomButton>
                </View>

            </View>
            </KeyboardAvoidingView>
            </ImageBackground>
        </View>
        
    )
}

export default SignUp;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        
    },

    backimg: {
        flex: 1,
        
    },

    imagecontainer: {
        flex: 1,
        alignItems: 'center',
    },

    image: {
        height: 150,
        margin: 10,
        resizeMode: 'contain'
    },

    main: { 
        flex: 3,        
    },

    textbox: {

    }

})