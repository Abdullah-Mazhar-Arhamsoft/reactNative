import React from "react";
import {StyleSheet,TextInput} from "react-native";

function InputTextView (props) {

    function InputHandler() {

    }

    return(
        <TextInput 
        {...props}
            placeholder={props.place}
            // style={{...styles.textinput, ...props.style}}
            style={styles.textinput}
            
        />
    )
}

export default InputTextView;

const styles = StyleSheet.create({
    textinput: {
        width: '80%',
        height: 35,
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        paddingStart: 10,
        alignSelf: 'center'
    }
})