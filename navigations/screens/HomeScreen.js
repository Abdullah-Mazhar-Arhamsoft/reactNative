import React, { useState, useRef } from "react";
import {View, StyleSheet, Button, Text, TextInput} from "react-native";
import RBSheet from 'react-native-raw-bottom-sheet';

import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from "../component/CustomButton";


function HomeScreen ({navigation}){
    const refRBSheet = useRef();
    const [username, setUsername] = useState('AboutReact');

    const press = () => { 
        console.log("Pressed")
        navigation.navigate('About', {paramKey: username,})
    };

    const pressed = () => {
        refRBSheet.current.open();
    }

    
    return (
        <View style={styles.container}>

            <Text style={styles.text}>This is Home Page</Text>
            <TextInput 
                value={username}
                onChangeText={(username) => setUsername(username)}
                placeholder={'Enter Any Value'}
                style= {styles.inputStyle}
            />

            {/* <Button
                title="About Page"
                color={'#F4A729'}
                onPress={() =>
                    navigation.navigate('About', {paramKey: username,})
                }
            /> */}

            <CustomButton 
             onPress={() => press()}
             >
            About Page
            </CustomButton>


        <View style={styles.containerbox}>
            <Text style={styles.text}>Clickfor Bottom Sheet</Text>
            {/* <Button title='Show Bottom Sheet'
                    color={'#F4A729'} 
                    onPress={() => refRBSheet.current.open()}
                    /> */}
            <CustomButton
            onPress={() => pressed()}
            >
            Show Bottom Sheet    
            </CustomButton>        

                    <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    customStyles={{
                      wrapper: {
                        backgroundColor: "transparent"
                      },
                      draggableIcon: {
                        backgroundColor: "#000"
                      }
                    }}
                    >
                        
                        <View style={styles.bottomnavigation}>
                            <View style={styles.box1}>
                                <Text style={styles.text1}>Share Using</Text>
                            
                                <View style={styles.box2}>
                                    <Icon name='facebook-square' size={40} />
                                    <Icon name='camera-retro' size={40} />
                                    <Icon name='linkedin-square' size={40} />
                                    <Icon name='folder' size={40} />
                                    <Icon name='sign-in' size={40} />
                                </View>

                                <View style={styles.box2}>
                                    <Icon name='github-square' size={40} />
                                    <Icon name='phone-square' size={40} />
                                    <Icon name='twitter' size={40} />
                                    <Icon name='bell' size={40} />
                                    <Icon name='cloud' size={40} />
                                </View>
                            
                            
                            </View>

                        </View>


                    </RBSheet>

                    
        
        </View>


            
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 30,
        margin: 15
    },

    inputStyle: {
        width: '80%',
        height: 40,
        padding: 10,
        marginVertical: 10,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 25,
        paddingStart: 10
    },

    bottomnavigation: {
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },

    box1 : {
        flex: 1,
        flexDirection: 'column',
        
    },

    text1: {
        fontSize: 20,
        textAlign: 'center',
        padding: 20,
    },

    box2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginStart: 30
    },
})