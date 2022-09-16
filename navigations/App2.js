import React from "react";
import {View, StyleSheet} from "react-native"
import CustomButton from "./component/CustomButton";
import ImageView from "./component/ImageView";


const App2 = () => {

    const image = {
            houseImage : require('./Images/Moon.jpg'),
        };

    return(

        <View style={styles.container}>
            <ImageView images={image.houseImage} styling={styles.image} />

            <CustomButton>Click Here</CustomButton>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    image: {
        width: '90%',
        height: 200,
        borderRadius: 25,
        margin: 15
    }

});

export default App2;