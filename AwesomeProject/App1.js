import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
    Button,
    Alert, 
} from 'react-native';
import AddItem from './source/AddItem';
import { useState } from 'react';


const App1 = () => {

    const persons = [
        {
            id: "1",
            name: "Earnest Green",
        },
        {
            id: "2",
            name: "Winston Orn",
        },
        {
            id: "3",
            name: "Carlton Collins",
        },
        {
            id: "4",
            name: "Malcolm Labadie",
        },
        {
            id: "5",
            name: "Michelle Dare",
        },

    ];



    const [enteredGoalTest, setEnteredGoalTest]= useState("");
    const [courseGoals, setCourseGoals] = useState([]);
    console.log(enteredGoalTest);

    function NameHandler(){
        console.log("fgjhftcghj");
        
    }

    function GoalInputHandler(enteredTest){
        setEnteredGoalTest(enteredTest)
    };

    function AddGoalHandler(){
        setCourseGoals((currentCourseGoals) =>[
            ...currentCourseGoals,
            {text: enteredGoalTest, key: Math.random().toString()}
        ]
         )

        Alert.alert(
            "Alert Title",
            enteredGoalTest,
            [
              {
                text: "Cancel",
                onPress: () => Alert.alert("Cancel Pressed"),
                style: "cancel",
              },
            ],
            
        );
    };


    return (
        <View style={styles.container}>

            <View style={styles.row}>
                <FlatList   
                
                
                    data={persons}
                    renderItem={(item) => 
                        <AddItem text={item.item} check={NameHandler} />
                    }
                    keyExtractor={(item) => item.id}
                
                />
            </View>

                <TextInput 
                    style={styles.textInput}
                    placeholder="Enter your Text123"
                    onChangeText={GoalInputHandler} >
                </TextInput>
                <Button title='Show Text' onPress={AddGoalHandler}  >

                </Button>


        </View>

    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    inputContainer:{
        margin: 10,
    },

    textInput: {
        padding: 10,
        margin: 10,
        fontSize: 20,
        borderWidth: 5,
        borderColor: 'thistle',
        color: 'black'
    }


});

export default App1;
