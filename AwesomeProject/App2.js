import React, { useState } from "react";
import {
    Button,
    ImageBackground,
    StyleSheet,
    View,
    Text,
} from "react-native";

import ModalView from "./source/ModalView";


const App2 = () => {

    const [ModalIsVisible, SetModalIsVisible] = useState(false);

    function ModalOpenHandler () {
        SetModalIsVisible(true);
    }

    function EndModalHandler () {
        SetModalIsVisible(false);
    }

    return(
        <View style={styles.container}>
            <ImageBackground source={require('./images/back.png')} style={styles.backgroundimg}>
                <View style={styles.ModalbtnView}>
                    <Text style={styles.text1}> 
                        Modal
                    </Text>
                    <Button title="Press here" color={'#E9291C'} onPress={ModalOpenHandler}></Button>
                </View>
                <ModalView visible={ModalIsVisible} cancel={EndModalHandler}>
                 </ModalView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
    },

    backgroundimg: {
        flex : 1,

    },

    ModalbtnView: {
        justifyContent: 'center',
        padding: 15,
        flex: 1,

    },

    text1: {
        fontSize: 30,
        borderWidth: 5,
        borderColor: 'thistle',
        marginBottom: 10,
        padding: 10,
        textAlign: 'center',
        color: 'white'
    }
});

export default App2;