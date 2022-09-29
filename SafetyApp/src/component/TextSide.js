import React from "react";
import {StyleSheet, View, Text} from "react-native";


function TextSide ({children}) {

    return(
        <Text style={styles.text}>{children}</Text>

    )
}

export default TextSide;

const styles = StyleSheet.create({
    text: {
        fontSize : 17,
        fontWeight: 'bold',
        marginBottom: 5,
        marginStart: 40
    }
})