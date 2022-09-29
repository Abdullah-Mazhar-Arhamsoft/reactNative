import React, { useEffect, useState } from "react";
import { StyleSheet, View, ImageBackground, Text, KeyboardAvoidingView, Alert } from "react-native";
import CustomButton from "../../component/CustomButton";
import ImageView from "../../component/ImageView";
import InputTextView from "../../component/InputTextView";
import TextSide from "../../component/TextSide";
import TextView from "../../component/TextView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DB from "../../DBObject/DB";
import {useDispatch, useSelector} from 'react-redux';
import {updateUserEmail} from '../../features/counter/counterSlice'


function UserProfile() {

    const [InputUserEmail, setInputUserEmail] = useState('');
    let [UserEmail, SetUserEmail] = useState('');
    let [userName, setUserName] = useState('');
    let [userContact, setUserContact] = useState('');
    let [userPassword, setUserPassword] = useState('');
    const dispatch = useDispatch();


    useEffect(() => {
        readData();
        console.log("called");
        searchUser();
    },[]);

    const readData = async () => {
        try {
            const value = await AsyncStorage.getItem('@user_input');

            if (value !== null) {
                setInputUserEmail(value);
            }
        }
        catch (e) {
            alert('Failed to fetch the input');
        }
    };

    let updateAllStates = (email, name, contact, password) => {
        SetUserEmail(email);
        setUserName(name);
        setUserContact(contact);
        setUserPassword(password);
        // console.log("User Name 1: ", name);
    };

    let searchUser = async () => {
        const value = await AsyncStorage.getItem('@user_input');
        console.log("User Name : ", userName);

        DB.db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM table_user where user_email = ?',
                [value],
                (_tx, results) => {
                    var len = results.rows.length;
                    console.log('len ===>>>> ', len);
                    if (len > 0) {
                        const res = results.rows.item(0);
                        console.log(res.user_id);
                        updateAllStates(
                            res.user_email,
                            res.user_name,
                            res.user_contact,
                            res.user_password,
                        );
                    } else {
                        alert('No user found');
                        updateAllStates('', '', '');
                    }
                }
            );
        });
    };

    let updateUser = () => {
        console.log(UserEmail, userName, userContact, userPassword);

        if (userName == '') {
            alert('Please fill User Name');
            return;
        }
        if (userContact == '') {
            alert('Please fill Phone no.');
            return;
        }
        if (UserEmail == '') {
            alert('Please fill Contact Email');
            return;
        }
        if (userPassword == '') {
            alert('Please fill Password');
            return;
        }

        dispatch(updateUserEmail(UserEmail));

        console.log("calling query");
        DB.db.transaction((tx) => {
             tx.executeSql(
                'UPDATE table_user set user_name=?, user_contact=? , user_password=? where user_id=11',
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Success',
                            'User updated successfully',
                            [
                                {
                                    text: 'Ok',

                                },
                            ],
                            { cancelable: false }
                        );
                    } else alert('Updation Failed');
                },
                (tx, error) => {
                    console.log("err");
                    console.log(error);
                }
            );
        });
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../Images/back-image.png')} style={styles.backimg}>
                <KeyboardAvoidingView style={styles.container} behavior='padding'>

                    <View style={styles.main}>
                        <TextView>User Profile</TextView>

                        <View style={styles.textbox}>

                            <TextSide>Name :</TextSide>
                            <InputTextView
                                place={"Name ..."}
                                //  onChangeText={setUserName}
                                //   value={userName}
                                value={userName}
                                onChangeText={setUserName}
                            ></InputTextView>

                        </View>

                        <View style={styles.textbox}>
                            <TextSide>Email :</TextSide>
                            <InputTextView
                                place={"Email ..."}
                                onChangeText={SetUserEmail}
                                value={UserEmail}
                            ></InputTextView>
                        </View>

                        <View style={styles.textbox}>
                            <TextSide>Phone no. :</TextSide>
                            <InputTextView
                                place={"Phone No. ..."}
                                onChangeText={setUserContact}
                                value={String(userContact)}
                                maxLength={10}
                                keyboardType="numeric"
                            ></InputTextView>
                        </View>

                        <View style={styles.textbox}>
                            <TextSide>Password :</TextSide>
                            <InputTextView
                                place={"Password ..."}
                                onChangeText={setUserPassword}
                                value={userPassword}
                                secureTextEntry={true}
                            ></InputTextView>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <CustomButton
                                onPress={() => updateUser()}
                            >
                                Update
                            </CustomButton>
                        </View>

                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    )
}

export default UserProfile;

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
        marginTop: 20
    },

    textbox: {

    }
})
