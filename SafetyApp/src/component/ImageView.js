import React from "react";
import {View, Image, StyleSheet, Text} from "react-native";


function ImageView (props) {

    return(

        <Image  source={props.images} style={props.styling} ></Image>

    )
}

export default ImageView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
})