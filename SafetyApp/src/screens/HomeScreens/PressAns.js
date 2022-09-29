import React, { useState } from "react";
import {View, StyleSheet, Text, Pressable} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { RadioButton } from 'react-native-paper';

var count = 0;
function PressAns(props) {

    const [isAdminCheck, setIsAdminCheck] = useState(null);
   
    // count = count + 1 ;
    // console.log('count : ', count);
    // const onChangeCheckbox = (value) => {
    //     if (value) {
    //         setIsAdminCheck(1);
    //         props.check(props.num);
    //     } else {
    //         setIsAdminCheck(null)
    //     };
    // }

    return(

        <View style={{flexDirection:'row'}}>
        
        <RadioButton value={props.children}  />
        <Text style={styles.textans}>{props.children}</Text>
      </View>
        // <View style={{flexDirection: 'row'}}>
        // <CheckBox
        // disabled={false}
        // value={isAdminCheck === 1 ? true : false}
        // onValueChange={(value) => onChangeCheckbox(value)}
        // boxType={'circle'}
        // />

        // <Text style={styles.textans}>{props.children}</Text>

        // </View>


    )
}

export default PressAns;

const styles = StyleSheet.create({
    textans: {
        width: '50%',
        marginLeft: 5,
        marginTop: 5
    }
})