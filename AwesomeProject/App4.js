import React, { useState } from "react";
import { StyleSheet, View, Text, Image, FlatList, ScrollView, Pressable, Button,
        ActivityIndicator
} from "react-native";
import Weatherlist from './source/Weatherlist';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';
import { getWeather } from "./source/networkin/WeatherApiServices";



const App4 = () => {

    // const myIcon = ;

    const weather = [
        {
            id: "1",
            date: "Sunday",
            Degree: "40`C"
        },
        {
            id: "2",
            date: "Monday",
            Degree: "45`C"
        },
        {
            id: "3",
            date: "Tuesday",
            Degree: "50`C"
        },
        {
            id: "4",
            date: "Wednesday",
            Degree: "55`C"
        },
        {
            id: "5",
            date: "Thursday",
            Degree: "60`C"
        },
        {
            id: "6",
            date: "Friday",
            Degree: "65`C"
        },
        {
            id: "7",
            date: "Saturday",
            Degree: "70`C"
        },
    ]


const [getdata, setdata] = useState(); 


const goforfetch = async () =>{
    console.log("called");

    const baseUrl = "https://api.openweathermap.org/data/2.5/onecall";
    let lat = 31.459253;
    let lon = 74.276213;
    let appid = '54a680c2885c0e4d9da4125cbef7d279';

    const url = `${baseUrl}?lat=${lat}&lon=${lon}&appid=${appid}`;
    const method = {
        get:'GET',
        post: 'POST'
    }

    let res = await getWeather(url, method.get)
    console.log(res);
   setdata(res);
    

    // console.log(url);
    // fetch(url, {
    //     method: method.get, // or 'PUT'
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: null
    // })
    //     .then((response) => response.json())
    //     .then((data) => {

    //         setdata(data);
    //         console.log(data.current.temp);
            
    //     })
    //     .catch((error) => {
    //         console.log('Error : ', error);
    //     });
    ////getWeather(url, method.get);
}
// console.log(getdata);


if(getdata == undefined) {
    
    return <View>
    <View style={{ margin: 18 }}>
            <Button
                title={'Click using Fetch'}
                onPress={goforfetch}
                color='green'
            />
        </View>
        <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0c9" />
                <Text>Fetching Data</Text>
            </View>
</View>
} else {
    let iconset = getdata.current.weather[0].icon ;


    function msToTime(duration) {
        var milliseconds = Math.floor((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

            return hours + ":" + minutes ;

      }
      console.log(getdata);
    console.log("http://openweathermap.org/img/wn/"+iconset+".png");
    console.log("http://openweathermap.org/img/wn/"+iconset+".png");
return (
    
    
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.uppercontainer}>
                <View>
                    <Text style={styles.text1}>{getdata.timezone}</Text>
                    <Text style={styles.text2}>{getdata.current.temp} °F</Text>
                </View>
                <View style={styles.imagecontainer}>
                    {/* <Image source={require('./images/Moon.jpg')} style={styles.imagestyle}></Image> */}
                    <Image source={{uri : "http://openweathermap.org/img/wn/"+iconset+".png"}} style={styles.imagestyle}></Image>
                </View>
            </View>

            <View style={styles.middlecontainer}>
                <View style={styles.textcontainer}>
                    <Text style={styles.textmid1}>Real Feel</Text>
                    <Text style={styles.textmid1}>Humidity</Text>
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textmid2}>{getdata.current.feels_like} °F</Text>
                    <Text style={styles.textmid2}>{getdata.current.humidity} %</Text>
                </View>

                <View style={styles.textcontainer}>
                    <Text style={styles.textmid1}>Chance of rain</Text>
                    <Text style={styles.textmid1}>Pressure</Text>
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textmid2}>{getdata.current.clouds} %</Text>
                    <Text style={styles.textmid2}>{getdata.current.pressure} mbar</Text>
                </View>

                <View style={styles.textcontainer}>
                    <Text style={styles.textmid1}>Wind Speed</Text>
                    <Text style={styles.textmid1}>UV Index</Text>
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textmid2}>{getdata.current.wind_speed} km/h</Text>
                    <Text style={styles.textmid2}>{getdata.current.uvi}</Text>
                </View>
            </View>

            <View style={styles.lowercontainer}>
                <View style={styles.inneruppercontainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Icon name="sun" size={20} color="white" />    
                        <Text style={styles.date}>{new Date(getdata.current.dt).toUTCString()}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Icon name="sunrise" size={20} color="white" />
                        <Text style={styles.date}>{msToTime(getdata.current.sunrise)} am</Text>
                    </View> 

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>   
                    <Icon name="sunset" size={20} color="white" />
                        <Text style={styles.date}>{msToTime(getdata.current.sunset)} pm</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: 70, marginTop: 10 }}>
                        <Icon name="cloud" size={20} color="white" />
                        <Text style={styles.text3}>Forecast</Text>
                    </View>

                    <FlatList
                        contentContainerStyle={{paddingLeft:70, paddingBottom: 30}}
                        horizontal={true}
                        data={getdata.hourly}
                        renderItem={(item) =>
                            <Weatherlist text={item.item} />
                        }
                    />
                </View>
                <View style={styles.innerlowercontainer}>
                    <View style={styles.btn}>
                    <Pressable style={styles.press}  android_ripple={{ color: '#094575' }}>
                        <Icon name="search" size={30} color="white" />
                    </Pressable>
                    <Pressable  style={styles.press}  android_ripple={{ color: '#094575' }}>
                        <Icon name="lock" size={30} color="white" />
                    </Pressable>
                    <Pressable style={styles.press}  android_ripple={{ color: '#094575' }}>
                        <Icon name="globe" size={30} color="white" />
                    </Pressable>
                    </View>

                </View>

            </View>
        </View>
        </ScrollView>

    );
}
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292C3F'
    },

    uppercontainer: {

        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        flex: 1
    },

    middlecontainer:{
        flex : 1,
        borderRadius: 25,
        backgroundColor: '#D0D7DC',
        margin: 20,
        elevation: 2,
        opacity: 0.6,
        padding: 10
    },

    text1: {
        fontSize: 30,
        textAlign: 'center',
        padding: 5,
        color: '#787D81'
    },

    text2: {
        fontSize: 35,
        textAlign: 'center',
        padding: 5,
        color: 'white'
    },

    imagecontainer: {
        height: 250,
        width: 350,
        borderRadius: 100,
        overflow: 'hidden',
    },

    imagestyle: {
        height: '100%',
        width: '100%'
    },

    textcontainer: {
        flexDirection: 'row'
    },

    textmid1: {
        color: '#EDF1F3' ,
        fontSize: 20 ,
        flex: 1,
        marginStart: 20,
        marginTop: 10
    },

    textmid2: {
        fontSize: 24,
        flex: 1,
        marginTop: 10,
        marginStart: 20,
        color: '#fff',
        marginBottom: 10
    },

    lowercontainer: {

        padding: 10,
        flex: 1
    },

    inneruppercontainer: {
        // marginStart: 70,
        paddingTop: 30,
        flex: 1,
    },

    text3: {
        color: 'white',
        fontSize: 15,
        marginStart: 10
    },

    innerlowercontainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },

    btn: {
        flexDirection: 'row',
    },

    press: {
        paddingEnd: 140,
    },

    date: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 15,
        marginStart: 20
    },



});

export default App4;