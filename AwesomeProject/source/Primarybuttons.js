import React from "react";
import {StyleSheet, View, Pressable,Text} from "react-native";

function Primarybuttons ({children}){
    return(
        <View style={styles.outercontainer}>
            <Pressable  style={ ({pressed}) =>
                        pressed
                        ? [styles.innercontainer, styles.pressed]
                        :  styles.innercontainer}
                        android_ripple={{color: '#640233'}}>
                <Text style={styles.textstyle}>
                {children}
                </Text>
            </Pressable>
        </View>

    )
}

export default Primarybuttons;

const styles = StyleSheet.create({
    outercontainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
        flex: 1,
        marginVertical: 20,
        justifyContent: 'flex-end',
    },

    innercontainer: {
        backgroundColor: '#094575',
        paddingVertical:8 ,
        paddingHorizontal:16 ,
        elevation: 2,
    },

    textstyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },

    pressed: {
        opacity: 0.25
    }
})