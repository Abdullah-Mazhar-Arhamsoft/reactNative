import React, { useEffect,useState } from "react";
import {StyleSheet,View, Text, KeyboardAvoidingView, ImageBackground} from "react-native";
import CustomButton from "../component/CustomButton";
import ImageView from "../component/ImageView";
import InputTextView from "../component/InputTextView";
import TextSide from "../component/TextSide";
import TextView from "../component/TextView";
import {openDatabase} from "react-native-sqlite-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DB from "../DBObject/DB";

function Login ({navigation}){
    let STORAGE_KEY = '@user_input';

    useEffect(() => {
        readData();

    //     db.transaction(function (txn) {
    //         txn.executeSql(
    //             'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR(20), username VARCHAR(20), user_contact INT(10), user_address VARCHAR(255), password VARCHAR(255))',
    //             []
    //           );
    //           console.log("done");
    //       txn.executeSql(
    //         // "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
    //             'SELECT * FROM User',
    //         [],
    //         function (txn, res) {
    //           console.log('item:', res.rows.length);
    //           if (res.rows.length == 0) {
    //             txn.executeSql('User', []);
    //             txn.executeSql(
    //               'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
    //               []
    //             );
    //           }
    //         }
    //       );
    //     });
    //   }, []);
    DB.db.transaction(function (txn) {
        txn.executeSql(
            'CREATE TABLE IF NOT EXISTS table_user( user_name VARCHAR(20) , user_email VARCHAR(255) PRIMARY KEY, user_contact INT(10), user_password VARCHAR(255))',
            []
          );
        txn.executeSql(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
          [],
          function (tx, res) {
            console.log('item:', res.rows.length);
            if (res.rows.length == 0) {
              txn.executeSql('DROP TABLE IF EXISTS table_user', []);
              txn.executeSql(
                'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_email VARCHAR(255), user_contact INT(10), user_password VARCHAR(255))',
                []
              );
            }
          }
        );
      });
    }, []);

    let [inputUserName, setInputUserName] = useState('');
    let [inputUserPassword, setInputUserPassword] = useState('');
    let [userData, setUserData] = useState({});
    const [Input, setInput] = useState('');

    const saveData = async (useremail) => {
        try{
            await AsyncStorage.setItem(STORAGE_KEY, useremail);
        }
        catch (e) {
            alert('Failed to save the data');
        }
    };
    
    const readData = async () => {
        try{
            const value = await AsyncStorage.getItem(STORAGE_KEY);

            if (value !== null)
            {
                setInput(value);
                navigation.navigate('Home', {name : 'Home Page'})
            }
        }
        catch (e) {
            alert('Failed to fetch the input');
        }
    };

    // const clearStorage = async () => {
    //     try{
    //         await AsyncStorage.clear();

    //     }
    //     catch (e) {
    //         alert('Failed to clear the storage')
    //     }
    // };

 
  let searchUser = () => {
    console.log(inputUserName);
    console.log(inputUserPassword);
    setUserData({});
    DB.db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_email = ? AND user_password= ? ',
        [inputUserName, inputUserPassword],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setUserData(results.rows.item(0));
            saveData(inputUserName);
            navigation.navigate('Home', {name : 'Home Page'})
          } else {
            alert('No user found');
            return;
          }
        }
      );     
    });
    };

    const image = {
        houseImage : require('../Images/icon2.png'),
    };

    // const press = () => { 
    //     navigation.navigate('Home', {name : 'Home Page'})
    //     // navigation.navigate('About', {paramKey: username,})
    // };

    return(
        <KeyboardAvoidingView style={styles.container} behavior='height'>
            <ImageBackground source={require('../Images/back-image.png')} style={styles.backimg}>
            <View style={styles.container}>
                <View style={styles.imagecontainer}> 
                <ImageView images={image.houseImage} styling={styles.image} />
             </View>

                <View style={styles.main}>
                    <TextView>LogIn</TextView>
            
                    <View style={styles.textbox}>
                    
                        <TextSide>Email :</TextSide>
                        <InputTextView
                         place={"Enter Email ..."}
                         onChangeText={setInputUserName}
                         ></InputTextView>
                    
                    </View>
            
                    <View style={styles.textbox}>
                        <TextSide>Password :</TextSide>
                        <InputTextView
                         place={"Enter Password ..."}
                         onChangeText={setInputUserPassword}
                         secureTextEntry={true}
                         ></InputTextView>
                    </View>

                    <Text
                        onPress={() =>
                            navigation.navigate('SignUp', {name : 'About SignUp'})
                        }
                        style={styles.text1}>Forgot Password ?</Text>

                    <View style={{}}>
                        <CustomButton
                        onPress={() => searchUser()}
                        >
                        LogIn
                        </CustomButton>
                    </View>

                </View>
            </View>
            </ImageBackground>
            </KeyboardAvoidingView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },

    backimg: {
        flex: 1
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

    },

    text1: {
        alignSelf: 'flex-end',
        marginEnd: 40,
        color: 'blue',
        marginBottom: 10
    }
})

