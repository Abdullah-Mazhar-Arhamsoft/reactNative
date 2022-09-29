import React, {useRef, useEffect} from "react";
import {StyleSheet, View, Text, Animated,} from 'react-native';

function AnimationScreen () {

    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 10000,
            }
        ).start();
    },[fadeAnim])

    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Animated.View style={{opacity: fadeAnim}}>
                <View style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </View>
            </Animated.View>
        </View>
        
    )
}

export default AnimationScreen;

const styles = StyleSheet.create({

})
