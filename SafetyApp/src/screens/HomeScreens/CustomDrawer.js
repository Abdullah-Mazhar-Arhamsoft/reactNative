import React, { useEffect, useState } from "react";
import {StyleSheet, View, Image, Text,Alert} from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserProfile from "./UserProfile";
import {updateUserEmail} from '../../features/counter/counterSlice'
import {useDispatch, useSelector} from 'react-redux';


let STORAGE_KEY = '@user_input';

function CustomDrawer (props) {
    useEffect(() => {    
        readData();
    });

    const [Input, setInput] = useState('');
    const update_useremail = useSelector((state) => state.updateuser.user_email);
    // const update_username = useSelector((state) => state.updateuser.user_name);
    const dispatch = useDispatch();
    
    // console.log('User Email Update : ', update_useremail);

    const readData = async () => {
        try{
            const value = await AsyncStorage.getItem(STORAGE_KEY);

            if (value !== null)
            {
                setInput(value);
                // console.log('Input : ', value);
                //const dis = useDispatch(); 
                //dis(updateUserName(value));
                dispatch(updateUserEmail(value));
            }

        }
        catch (e) {
            console.log(e);
            alert('Failed to fetch the input');
        }
    };

    const LogOut_User = async () => {    
               
        try{
            await AsyncStorage.clear();
        }
        catch (e) {
            alert('Failed to clear the storage')
        }

    props.navigation.navigate('LogIn')
    };

    const User_Profile = () => {
        props.navigation.navigate('UserProfile')
    };    



    return(
        <View style={{flex:1}}>
            <View style={styles.profilecontainer} >
                <View style={styles.imagecontainer}>
                <Image source={require('../../Images/profile-icon.png')} style={styles.image}  />
                </View>
                <View style={styles.namecontainer}>
                    <Text style={styles.emailbox}>{update_useremail}</Text>
                    <Text
                    onPress={() =>
                        User_Profile()
                    }
                    >
                    User Profile</Text>
                </View>
            </View>



            <DrawerContentScrollView {...props} contentContainerStyle={{flex:1}}>
                    <DrawerItemList {...props}  />

                    <View style={{flex:1,marginVertical:20}}>
                    <DrawerItem
                     label="Logout"
                      onPress={() => LogOut_User()}
                      style={styles.drawerbox}
                      />
                      </View>
            </DrawerContentScrollView>
            </View>
    )
}

export default CustomDrawer;

const styles = StyleSheet.create({
    drawerbox: {
        justifyContent: 'flex-end',
        flex: 1
    },

    image: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginBottom: 10
    },

    profilecontainer: {
        margin: 1,
        marginTop: 20,
        flexDirection: 'row'
    },

    imagecontainer: {
        padding: 10
    },

    namecontainer: {
        padding: 1,
        paddingTop: 20
    },

    emailbox: {
        fontSize: 15,
        marginBottom: 7
    }
})