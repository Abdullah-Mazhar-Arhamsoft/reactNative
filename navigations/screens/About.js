import React from "react";
import {View, StyleSheet, Text} from "react-native";
import ImageView from "../component/ImageView";


function About ({route}) {

    const image = {
        houseImage : require('../Images/Moon.jpg'),
    };

    return(
        <View style={styles.container}>
            <Text>This is About Page</Text>
            <Text>{route.params.paramKey}</Text>
            <ImageView images={image.houseImage} styling={styles.image} />
        </View>
    )
}

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '90%',
        height: 200,
        borderRadius: 25,
        margin: 15
    }
})
