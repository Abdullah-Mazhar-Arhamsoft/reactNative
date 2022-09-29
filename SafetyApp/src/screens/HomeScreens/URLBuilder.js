import React, { useState } from "react";
import {StyleSheet,View, Text, TextInput} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from "../../component/CustomButton";
import QuestionPage from "./QuestionPage";



function URLBuilder ({navigation}) {

  const [inputText, setInputText] = useState('');
  const [shouldShow, setShouldShow] = useState(false);
  const [showURL, setShowURL] = useState('');

  // let  url = '';

  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [categoryvalue, setCategoryValue] = useState([]);
  const [categoryitems, setCategoryItems] = useState([
    // {label: 'Any Category', value: 1},
    {label: 'General Knowledge', value: 9},
    {label: 'Entertainment: Books', value: 10},
    {label: 'Entertainment: Films', value: 11}
  ]);

  const [isDifficultyOpen, setDifficultyOpen] = useState(false);
  const [difficultyvalue, setDifficultyValue] = useState(null);
  const [difficultyitems, setDifficultyItems] = useState([
    // {label: 'Any Difficulty', value: 1},
    {label: 'Easy', value: 'easy'},
    {label: 'Medium', value: 'medium'},
    {label: 'Hard', value: 'hard'}
  ]);

  const [isTypeOpen, setTypeOpen] = useState(false);
  const [typevalue, setTypeValue] = useState(null);
  const [typeitems, setTypeItems] = useState([
    // {label: 'Any Choice', value: 1},
    {label: 'Multiple Choice', value: 'multiple'},
    {label: 'True/False', value: 'boolean'}
  ]);

  const buildURL = () => {
    setShouldShow(true);

     let url = 'https://opentdb.com/api.php?amount='+inputText+'&category='+categoryvalue+'&difficulty='+difficultyvalue+'&type='+typevalue+'';
    console.log('url : ', url);
    setShowURL(url);
    console.log('Show url : ', url);
    navigation.navigate('QuestionPage', {paramKey: url,})
    return url;

    
  }

  // const nextPage = () => {
  //   navigation.navigate('QuestionPage', {paramKey: showURL,})
  // }

    return(
        <View  style={styles.container}>
          <View >
            <Text style={styles.text}>Number of Questions:</Text>
            <TextInput
              style={styles.inputtext}
              onChangeText={setInputText}
             />

          </View>

          <View style={styles.DropBoxcontainer}>
            <Text style={styles.text}>Select Category:</Text>
            <DropDownPicker
                zIndex={3000}
                zIndexInverse={1000}
                open={isCategoryOpen}
                value={categoryvalue}
                items={categoryitems}
                setOpen={setCategoryOpen}
                setValue={setCategoryValue}
                setItems={setCategoryItems}
                translation={{PLACEHOLDER: "Any Category"}}
                onChangeValue={(categoryvalue) => {
                  console.log('Category Value : ',categoryvalue);
                }}
            />
          </View>

          <View style={styles.DropBoxcontainer}>
            <Text style={styles.text}>Select Difficulty:</Text>
            <DropDownPicker
                zIndex={2000}
                zIndexInverse={2000}
                open={isDifficultyOpen}
                value={difficultyvalue}
                items={difficultyitems}
                setOpen={setDifficultyOpen}
                setValue={setDifficultyValue}
                setItems={setDifficultyItems}
                translation={{PLACEHOLDER: "Any Difficulty"}}
                onChangeValue={(difficultyvalue) => {
                  console.log('Difficulty Value : ',difficultyvalue);
                }}
            />
          </View>

          <View style={styles.DropBoxcontainer}>
            <Text style={styles.text}>Select Type:</Text>
            <DropDownPicker
            zIndex={1000}
            zIndexInverse={3000}
                open={isTypeOpen}
                value={typevalue}
                items={typeitems}
                setOpen={setTypeOpen}
                setValue={setTypeValue}
                setItems={setTypeItems}
                translation={{PLACEHOLDER: "Any Choice"}}
                onChangeValue={(typevalue) => {
                  console.log('Type Value : ',typevalue);
                }}
            />
          </View>

          <View style={styles.DropBoxcontainer}>
            <CustomButton
            onPress={() => buildURL()}
            >
              Generate URL
            </CustomButton>  
          </View>
          {shouldShow ? 
          (
            <View style={styles.DropBoxcontainer}>
              <Text style={styles.urltext}>{showURL}</Text>

            </View>
          )
          : null
          }

          {/* <View style={styles.DropBoxcontainer}>
            <CustomButton
              onPress={() => nextPage() }
            >
              Go To Questions
            </CustomButton>

          </View> */}

        </View>

    )   
}

export default URLBuilder;

const styles = StyleSheet.create({
      container: {
        flex: 1
      },

      DropBoxcontainer: {
        margin: 10
      },

      text: {
        fontSize: 17,
        fontWeight: 'bold',
        margin: 5
      },

      inputtext: {
        width: '95%',
        height: 45,
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 7,
        paddingStart: 10,
        alignSelf: 'center',
        backgroundColor: 'white'
    },

    urltext: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      borderWidth: 3,
      padding: 5,
      backgroundColor: 'white'
    }
})
