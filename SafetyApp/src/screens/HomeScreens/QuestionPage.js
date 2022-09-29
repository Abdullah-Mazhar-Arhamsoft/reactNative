import React, { useEffect, useState } from "react";
import {StyleSheet,View,Text, ActivityIndicator, FlatList, ScrollView, Alert} from "react-native";
import axios from "axios";
import QuestionList from "./QuestionList";
import CustomButton from "../../component/CustomButton";

function QuestionPage ({route, navigation}) {
    useEffect( () => {
        goforfetchaxios();
        console.log('Called');
    },[]);

    const [getData, setData] = useState('');
    const [points, setPoints] = useState(0);

    // let size = getData.results.length;
    let anslist = [];

    let URLQs = route.params.paramKey;
    console.log('URl in Questions : ',URLQs);

    const setResult = (index, pointNew) => {
        // console.log('Length of questions: ',getData.results.length);

        // if (index===0 && pointNew===1){
        //     if (points > 1) {
        //         setPoints(points-1)
        //     }
        //     else {
        //         setPoints(points+pointNew);
        //     }
        // }
        // if (index===0 && pointNew===0 && points===1){
        //     setPoints(points-1)
        // }

        anslist[index] = pointNew;



        console.log(pointNew);
        console.log('List : ', anslist);
        // console.log('points === ', points);
        console.log('index == ', index)
    }
    const goforfetchaxios = async () => {

        try {
            const response = await axios.get(
              URLQs,
            );
            // alert(JSON.stringify(response.data));
            
            // console.log('API called : ', response.data.results);
            setData(response.data);
            
          } catch (error) {
            // handle error
            alert(error.message);
          }
        // 
      };

    const NewQuestion = () => {
        navigation.goBack();
    }
      

    const SubmitAnswer = () => {

        let marksobtained = 0;
        let size = getData.results.length;
        for (let i = 0; i <size; i++) {
                if (anslist[i] === getData.results[i].correct_answer) {
                    marksobtained = marksobtained + 1;
                }
            
        }
        let grade = '';
        let quote = '';
        let marks = (marksobtained/size)*100;
        if (marks >= 90 ) {
            grade = 'A*';
            quote = 'Genius';
        }
        else if (marks >= 80) {
            grade = 'A';
            quote = 'Well Done';
        }
        else if (marks >= 70) {
            grade = 'B';
            quote = 'Good Work';
        }
        else if (marks >= 60) {
            grade = 'C';
            quote = 'Need a little effort';
        }
        else if (marks >=50) {
            grade = 'D';
            quote = 'What are you doing ?';
        }
        else {
            grade = 'F';
            quote = 'Go Home';
        }
        Alert.alert(
            "Marks Obtained : ",
            marksobtained.toString()+ "/" + size+ '\nGrade = ' + grade + '\n' +'"' +quote+'"' , 
            [
              {
                text: "Make new Question",
                onPress: () => NewQuestion() ,
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
    }  

    //   console.log('GETDATA : ',getData);
        

    if (getData == '') {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0c9" />
                <Text>Fetching Data</Text>
            </View>    
        )
    }  
    else {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.header}>Question Page</Text>

            <View> 
                <Text style={styles.text1}> Category : {getData.results[0].category}</Text>
                <Text style={styles.text1}> Type : {getData.results[0].type}</Text>
                <Text style={styles.text1}> Difficulty : {getData.results[0].difficulty}</Text>
            </View>

            <View >
                <FlatList 
                    nestedScrollEnabled={true}
                    horizontal={false}
                    data={getData.results}
                    renderItem={(item) =>
                        <QuestionList text={item.item} num={item.index}
                         result={(index, points)=> setResult(index, points)}></QuestionList>
                    }
                />
            </View>

            <CustomButton
            style={{margin: 5}}
            onPress={() => SubmitAnswer()}
            >Submit</CustomButton>
        </View>
        </ScrollView>
    )
    }
}

export default QuestionPage;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    loader: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    header: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10
    },

    text1: {
        fontWeight: 'bold',
        fontSize: 17
    }
})