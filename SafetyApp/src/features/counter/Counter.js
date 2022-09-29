import React from "react";
import {StyleSheet, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CustomButton from "../../components/CustomButton";
import {decrement, increment} from './counterSlice';

function Counter () {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return(
        <View style={styles.container}>
            <CustomButton onPress={() => dispatch(increment())}>
                Increment
            </CustomButton>
            <Text style={styles.text}>{count}</Text>
            <CustomButton onPress={() => dispatch(decrement())}>
                Decrement
            </CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        textAlign: 'center',

    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%'
    }
})

export default Counter;