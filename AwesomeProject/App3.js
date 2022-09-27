import React, {useState} from "react";
import {StyleSheet, TextInput, View,Text, Button} from "react-native";

import ModalView from "./source/ModalView";
import Primarybuttons from "./source/Primarybuttons";


const App3 = () => {

    const [ModalIsVisible, SetModalIsVisible] = useState(false);

    function ModalOpenHandler () {
        SetModalIsVisible(true);
    }

    function EndModalHandler () {
        SetModalIsVisible(false);
    }

    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.innerbox}>
                    <TextInput style={styles.inputtext} 
                                maxLength={2}
                                keyboardType='number-pad'
                    >
                    </TextInput>
                    <View style={styles.buttoncontainer}>
                        <Primarybuttons>Start</Primarybuttons>
                        <Primarybuttons>End</Primarybuttons>
                    </View>
                </View>
            </View>
            <View style={styles.modalcontainer}>
                <View style={styles.modalbox}>
                    <ModalView visible={ModalIsVisible} cancel={EndModalHandler}></ModalView>
                </View>
                <View style={styles.lowerbuttoncontainer}>
                    <Button title="+" color={'#0CCDF0'} onPress={ModalOpenHandler}></Button>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    box: {
        flex: 1,
        padding: 10,
        margin: 10,

    },

    innerbox: {
        backgroundColor: '#4e0329',
        justifyContent:'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 28,
        elevation: 4
    },

    inputtext: {
        fontSize: 30,
        borderBottomWidth: 5,
        borderBottomColor: '#F0930C',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: 50,
        width: 50,
        marginBottom: 10
    },

    modalcontainer: {
        flex: 1,
        flexDirection: 'row'
    },

    lowerbuttoncontainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginBottom: 30,
        marginEnd: 20,
 
    },

    modalbox: {
        flex: 3,
    },

    buttoncontainer: {
        flexDirection: 'row',
    }


});

export default App3;