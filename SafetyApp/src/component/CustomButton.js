import React from "react";
import {View, StyleSheet, Text, Pressable} from "react-native";


function CustomButton (props) {
    return (
            <Pressable
                onPress={()=> {
                    props.onPress()}}
                android_ripple={{color: '#D81BCA'}}
                style={ ({pressed}) =>
                        pressed
                        ? {...styles.btncontainer, ...styles.pressed, ...props.style}
                        :  [styles.btncontainer, props.style]}
                
                >
                <Text style={styles.btntext}>{props.children}</Text>
            </Pressable>
        
    )
}

export default CustomButton;

const styles = StyleSheet.create({



    btncontainer: {
        paddingVertical:8 ,
        paddingHorizontal:16 ,
        borderRadius: 28,
        margin: 5,
        overflow: "hidden",
        backgroundColor: '#F4A729',
        width: '60%',
        alignSelf: 'center'
    },

    btntext: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },

    pressed: {
        opacity: 0.25,
        overflow: "hidden",
    }

})