import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {StyleSheet, View, Text} from "react-native";
import CustomButton from "../../component/CustomButton";
import arrayShuffle from 'array-shuffle';


function Settings () {

    const array1 = [-5,-6,-5,-1,-6,-8,-4];
    const array2 = [8,1,6,2,9,4,3];
    const array3 = [6, -1, 0, 5, 8, -9, 9,-3, 7, -3];
    const taskGiven = () => {
        // sortArray();
        // showBinary();
        // seperateNumber();
        // getSubString();
        // sortNegativeArray();
        stringWord();
    }

    const sortArray = () => {
        let largest = array1[0];
        let second = array1[0];
        for (let i = 0; i < array1.length; i++){
            if (array1[i] > largest) {
                largest = array1[i];
            }
        }

        for (let i = 0; i < array1.length; i++) {
            if (array1[i] > second && array1[i] < largest){
                second = array1[i];
            }
        }

        let temp = 0;
        for (let i = 0; i < array1.length; i++) {
            for (let j = i+1; j < array1.length; j++){
                if (array1[i] > array1[j]) {
                    temp = array1[i];
                    array1[i] = array1[j];
                    array1[j] = temp;
                }
            }
        }
        console.log('Array Sorted byself ==> ', array1);        

        array2.sort();
        console.log('Array Sorted BuiltIn ==> ', array2);

        console.log('Largest Number ==> ', largest);
        console.log('Second Largest number ==> ', second);

        console.log('Largest Number with BuiltIn ==> ', Math.max.apply(Math, array1));
    };

    const showBinary = () => {
        let num = 78;
        console.log('Number for Binary ==> ', num);
        let binary = (num % 2).toString();
        for (; num > 1; ) {
            num = parseInt(num / 2);
            binary =  (num % 2) + (binary);
        }
    console.log('Shifted to binary ==> ',binary);
    };

    const seperateNumber = () => {
        let tName = 'How are you 345 ';
        console.log('Number from String ==> ',tName.replace(/\D/g,''));
    };

    const getSubString = () => {
        let tString = 'My name is Abdullah';
        let result = tString.substring(8,10);

        console.log('Substring from String ==> ', result);
    };

    const sortNegativeArray = () => {
        let temp = 0;       
        let size = array3.length;
        let count = 1
        let lesserSize = 0;

        for (let i = 0; i < array3.length; i++) {
            for (let j = i+1; j < array3.length; j++){
                if (array3[i] > array3[j]) {
                    temp = array3[i];
                    array3[i] = array3[j];
                    array3[j] = temp;
                }
            }
            if (array3[i] < 0) {
                lesserSize = lesserSize + 1;
            }
        };
        for (let i = lesserSize-1; i>=0; i--){
            for(let j = i; j < size-count; j++){
                temp = array3[j];
                array3[j] = array3[j+1];
                array3[j+1] = temp;  
            }
            count++;
        };
        // for (let i = 0; i < size; i++){
        //     if (array3[i] < 0) {
        //         lesserSize = lesserSize + 1;
        //     }
        // }

        // for (let i = 0; i < lesserSize; i++) {
        //     temp = array3[i];
        //     array3[i] = array3[(size-1)-i];
        //     array3[(size-1)-i] = temp;
        // }
        //         lesserSizeCount = 1;
        //         do {
        //         if (array3[size-count] > 0) {
        //             temp = array3[i];
        //             array3[i] = array3[size-count];
        //             array3[size-count] = temp;   
        //             count = 1;
        //             lesserSizeCount = 0;
        //         }
        //         else{
        //             count++;
        //             lesserSizeCount++;
        //         }               
        //         } 
        //         while(lesserSizeCount > 0 && count<=i)      
        //         }      
        // };

        // for (let i = 0; i < size; i++){
        //     if (array3[i] < 0 && lesserSizeCount < lesserSize-1){
        //         temp = array3[i];
        //             array3[i] = array3[size-count];
        //             array3[size-count] = temp;   
        //             count++;
        //             lesserSizeCount++;
        //     }
        // };
        
        // greaterSize = size - lesserSize;
        // // console.log('size: ',greaterSize);
        // temp = 0;
        // for (let i = 0; i < greaterSize; i++) {
        //     for (let j = i+1; j < greaterSize; j++){
        //         if (array3[i] > array3[j]) {
        //             temp = array3[i];
        //             array3[i] = array3[j];
        //             array3[j] = temp;
        //         }
        //     }
        // };

        // temp = 0;
        // for (let i = greaterSize; i < size; i++) {

        //     for (let j = i+1; j < size; j++){
        //         if (array3[i] > array3[j]) {
        //             temp = array3[i];
        //             array3[i] = array3[j];
        //             array3[j] = temp;
        //         }
        //     }
        // };



        console.log('Array Sorted byself Today ==> ', array3);
    };

    const stringWord = () => {
        const yourString = 'abdullah';
        let myArray = [];
        let list = {};
        list.name = '';
        list.show = 0;
        console.log('list ==> ', list);
        let count = 1;
        const size = yourString.length;
        let newString = yourString.split('').sort().join('');

        for (let i = 0; i < size; i++){
            for (let j = i; j < size-1; j++){
                if (newString[i] === newString[j+1]){
                    count++;
                }
            }
            list.name = newString[i];
            list.show = count;
            myArray = [...myArray, list];
            i = i + (count-1);
            count = 1;
        }
        console.log('Array : ', myArray);
        console.log('Show ==> ', newString);

    }


    return(
        <View style={styles.container}> 
            <CustomButton
             onPress={() => taskGiven()}
            >
                Solve
            </CustomButton>
        </View>
    )
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})