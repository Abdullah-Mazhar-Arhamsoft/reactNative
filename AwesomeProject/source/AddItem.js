import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function AddItem(props) {
    console.log(props);


    return (
        <TouchableOpacity onPress={()=> props.check()}>
        <View style={styles.Additem}>
            <Text style={styles.AddText}>
                {props.text.name}
            </Text>
            <Text style={styles.AddText}>
                {props.text.id}
            </Text>
        </View>
        </TouchableOpacity>
    )
}


export default AddItem;

const styles = StyleSheet.create({

    Additem: {
        margin: 15,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#F95532',
        borderWidth: 5,
        borderColor: 'thistle',
        
        flexDirection:'row'
    },

    AddText: {
        color: 'black',
        fontSize: 20,
        flex:1
    }

})