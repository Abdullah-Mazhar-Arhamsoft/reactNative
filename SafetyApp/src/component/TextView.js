import React from "react";
import {StyleSheet, View, Text} from "react-native";


function TextView ({children}) {

    return(
        <Text style={styles.text}>{children}</Text>

    )
}

export default TextView;

const styles = StyleSheet.create({
    text: {
        fontSize : 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10
    }
})