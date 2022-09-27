import React from "react";
import {
    Modal,
    StyleSheet,
    View,
    Text,
    Button,
    ScrollView
} from "react-native";


function ModalView (props){


    return(
        
        <Modal visible={props.visible} transparent={true} animationType="fade">
            <View style={styles.modalview}></View>
            <ScrollView style={styles.textstyle}>
            <View>
                <Text style={styles.text1}> Hello</Text>
                <Text style={styles.text1}> How are you ?</Text>
                <Text style={styles.text1}> Nice to meet you</Text>
                <Text style={styles.text1}> Reply</Text>
                <View style={styles.btn1}>
                    <Button title="Cancel" color={'#EE5715'} onPress={props.cancel}></Button>
                </View>
            </View>
            </ScrollView>
        </Modal>
    )
}

export default ModalView;

const styles = StyleSheet.create({


    modalview: {
        height: '50%',

    },
    textstyle: {
        flex: 1 ,
        backgroundColor:'#7B15EE',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },

    text1 : {
        fontSize: 25,
        textAlign: 'center',
        padding: 10,
        borderWidth: 5,
        borderColor: 'thistle',
        borderRadius: 40,
        color: 'white',
        margin: 10 ,
        marginTop: 20,
    },
    btn1 : {
        margin: 30,
        marginHorizontal: 80
    }

})