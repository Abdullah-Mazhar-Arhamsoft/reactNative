import React from "react";
import {StyleSheet, View, Pressable,Text} from "react-native";

function Custombuttons ({children}){
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

export default Custombuttons;

const styles = StyleSheet.create({
    outercontainer: {
        borderRadius: 50,
        margin: 4,
        overflow: 'hidden',
        flex: 1,
        marginVertical: 20,
        justifyContent: 'flex-end',
        
    },

    innercontainer: {
        backgroundColor: '#0CCDF0',
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