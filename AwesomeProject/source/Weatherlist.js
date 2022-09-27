import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import Icon from 'react-native-vector-icons/Feather';

function Weatherlist (props) {  
    
    let iconset = props.text.weather[0].icon ; 

    return (
        <View style={styles.Additem}>
            <Text style={styles.AddText}>
                {props.text.temp}
            </Text>
            <View style={styles.iconcontainer}>
                {/* <Icon name="cloud-drizzle" size={20} color="white" /> */}
                <Image source={{uri:"http://openweathermap.org/img/wn/"+iconset+".png"}}
                        style={{height: 45, width: 45}}
                ></Image>
            </View>
            <Text style={styles.AddText}>
                {props.text.humidity}
            </Text>
        </View>

    )
}

export default Weatherlist;

const styles = StyleSheet.create({
    Additem: {
        margin: 7,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#292C3F',
        height: 110,
        alignItems: 'center'
    },

    iconcontainer:{
        margin: 10,
        borderWidth: 2,
        borderColor: '#094575',
        borderRadius: 25,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50
    },

    AddText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }

})

