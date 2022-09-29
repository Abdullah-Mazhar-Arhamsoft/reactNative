import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import arrayShuffle from 'array-shuffle';
import PressAns from "./PressAns";
import { RadioButton} from 'react-native-paper';

function QuestionList(props) {
    useEffect(() => {
        array_ans();
    }, []);


    const [getqs, setqs] = useState(false);
    const [getlist, setlist] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const [isAdminCheck, setIsAdminCheck] = useState(null);


    let list = [props.text.correct_answer, props.text.incorrect_answers[0], props.text.incorrect_answers[1], props.text.incorrect_answers[2]];
    const array_ans = () => {

        if (props.text.incorrect_answers.length > 2) {
            setqs(true);
            setlist(arrayShuffle(list));
        }

        else {
            list = [props.text.correct_answer, props.text.incorrect_answers[0]];
            setlist(arrayShuffle(list));
        }
    };

    const ValueFetch = (index) => {
        // console.log('it has been called one');
        console.log(index);
        //if (index == props.text.correct_answer) {
            props.result(props.num, index);
        // }
        // else {
        //     props.result(props.num, 0);
        // }
        setSelectedValue(index);

    };

    // const Valuechosetwo = () => {
    //     console.log('it has been called two')
    // };

    // const Valuechosethree = () => {
    //     console.log('it has been called three')
    // };

    // const Valuechosefour = () => {
    //     console.log('it has been called four')
    // }


    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Question) {props.text.question}</Text>

            <View style={styles.ans}>
            <RadioButton.Group onValueChange={(value) => ValueFetch(value)} value={selectedValue}>
                {/* <Text style={styles.textans}>a) {getlist[0]}</Text> */}
                {getlist.map((item, index) => {
                    return (
                        <PressAns 
                         num={index}
                         check={(index)=> ValueFetch(index)}>
                            {item}
                        </PressAns>
                    )
                })}

                {/* <PressAns check={Valuechosetwo} >b){getlist[1]}</PressAns> */}
                </RadioButton.Group>
            </View>

            {/* {getqs ? 
          (
            <View style={styles.ans}>
            <PressAns check={Valuechosethree}>c) {getlist[2]}</PressAns>
            <PressAns check={Valuechosefour}>d){getlist[3]}</PressAns>
            </View>
          )
          : null
          } */}

            <Text> Correct answer : {props.text.correct_answer}</Text>

        </View>
    )
}

export default QuestionList;

const styles = StyleSheet.create({
    container: {
        margin: 10,

    },

    text1: {
        fontSize: 15
    },

    ans: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
        // margin: 10,

        // width: '100%'
    },

    textans: {
        width: '50%',
        margin: 5
    }
})
