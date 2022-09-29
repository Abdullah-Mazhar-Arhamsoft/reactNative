import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import InputTextView from "../../component/InputTextView";
import TextSide from "../../component/TextSide";
import TextView from "../../component/TextView";
import CheckBox from '@react-native-community/checkbox';
import CustomButton from "../../component/CustomButton";
import { getLoginAPI } from "./LoginAPI";
import axios from "axios";

function HomePage() {

    const [isAdminCheck, setIsAdminCheck] = useState(null);
    const [getdata, setdata] = useState();
    const [passwordCheck, setPasswordCheck] = useState('');
    const [emailCheck, setEmailCheck] = useState('');

    const goforfetchaxios = () => {
        axios
          .post('https://deskillz.arhamsoft.org/v1/mobile/auth/signin', {
            // userEmail: 'dani11@gmail.com',
            // userPass: '123',
            deviceId: '2741c1a12c63ae55',
            userEmail: emailCheck,
            userPass: passwordCheck,
            
            
          })
          .then(function (response) {
            // handle success
            // alert(JSON.stringify(response.data));
            console.log('Called');
            console.log(JSON.stringify(response.data));
            setdata(JSON.stringify(response.data));
            
          })
          .catch(function (error) {
            // handle error
            alert(error.message);
          });
      };

    //   console.log(getdata);

    // const goforfetch = async () => {
    //     console.log("called");

    //     const baseUrl = "https://deskillz.arhamsoft.org/v1/mobile/auth/signin";


    //     const url = `${baseUrl}`;
    //     const method = {
    //         get: 'GET',
    //         post: 'POST'
    //     };
    //     // const data = {
    //     //     userEmail: 'dani11@gmail.com',
    //     //     userPass: '123',
    //     //         // emailCheck,
    //     //         // passwordCheck,
    //     //     deviceId: '2741c1a12c63ae55'
    //     // };
    //     const data = new FormData();
    //     data.append("userEmail", "dani11@gmail.com");
    //     data.append("userPass", "123");
    //     data.append("deviceId", "2741c1a12c63ae55");
    //     console.log(data);

    //     let response = await getLoginAPI(url, method.post, data)
    //     console.log('response ==>>> ', response);
    //     setdata(response);
    // }

    const onChangeCheckbox = (value) => {
        if (value) {
            setIsAdminCheck(1)
        } else {
            setIsAdminCheck(null)
        }

    }

// console.log('IsAdminCheck=====', isAdminCheck);


    return (
        <View style={styles.container}>
            <TextView>Home Screen</TextView>
            <View>
                <TextSide>Email: </TextSide>
                <InputTextView
                    place={"Enter Email ..."}
                    onChangeText={setEmailCheck}
                    value={emailCheck}
                ></InputTextView>
            </View>
            <View>
                <TextSide>Password:</TextSide>
                <InputTextView
                    place={"Enter Password ..."}
                    onChangeText={setPasswordCheck}
                    value={passwordCheck}
                    secureTextEntry={true}
                ></InputTextView>
            </View>
            <View style={styles.check_box}>
                <CheckBox
                    disabled={false}
                    value={isAdminCheck === 1 ? true : false}
                    onValueChange={(value) => onChangeCheckbox(value)}
                />
                <Text style={styles.text}>Admin</Text>
            </View>

            <CustomButton
                onPress={() => goforfetchaxios()}
            >
                Log In
            </CustomButton>

        </View>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    check_box: {
        marginLeft: 35,
        margin: 10,
        flexDirection: 'row'
    },

    text: {
        margin: 5,
        fontWeight: 'bold',
        fontSize: 16
    }
})