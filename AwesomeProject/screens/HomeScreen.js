import React, { useEffect, useState } from "react";
import {View, StyleSheet, Button, Text, TextInput, Pressable} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';



function HomeScreen (props){
    let STORAGE_KEY = '@user_input';
    const [Input, setInput] = useState('');

    const saveData = async (age) => {
        try{
            await AsyncStorage.setItem(STORAGE_KEY, age);
            alert('Data Successfully saved');
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
            }
        }
        catch (e) {
            alert('Failed to fetch the input');
        }
    };

    useEffect(() => {
        readData();
    }, []
    );

    const clearStorage = async () => {
        try{
            await AsyncStorage.clear();
            alert('Storage successfully cleared')
        }
        catch (e) {
            alert('Failed to clear the storage')
        }
    };

    const onChangeText = value => setInput(value);

    const onSubmitEditing = () => {
        if (!Input){
            return;  
        } ;

        saveData(Input);
        setInput('');
    };



    return (
        <View style={styles.container}>
            <Button
                title="About Page"
                onPress={() =>
                    props.navigation.navigate('About', {name : 'About Page'})
                }
            />

            <View style={styles.storagebox}>
                <Text style={styles.text1}>Enter your Input</Text>
                <TextInput
                    style={styles.textinput}
                    value={Input}
                    placeholder="Enter here"
                    onChangeText={onChangeText}
                    onSubmitEditing={onSubmitEditing}
                />
                <Text style={styles.text1}>Your Input is : {Input}</Text>
                <Pressable onPress={clearStorage} style={styles.btn} >
                    <Text style={styles.btntext}>Clear Storage</Text>
                </Pressable>


            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container : {
        flex: 1
    },

    storagebox: {
        flex: 1,
        alignItems: 'center'
    },

    text1: {
        fontSize: 20,
    },

    textinput: {
        backgroundColor : '#fff',
        height: 44,
        borderWidth: 2,
        borderColor: '#333',
        width: '100%',
        padding: 10,
        marginTop: 12,
    },

    btn: {
    margin: 10,
    padding: 10,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    },

    btntext: {
        fontSize: 14,
        color: 'white'
    }

})


