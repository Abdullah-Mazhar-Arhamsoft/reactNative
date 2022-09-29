import React from "react";
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { add } from "react-native-reanimated";
import { useDispatch, useSelector } from 'react-redux';
import { FamilySet } from "../../constants/Fonts";
import { AddLatestProduct } from '../../features/counter/productslice'


function ProductList({ navigation }) {
    const add_product = useSelector((state) => state.addproduct.product);
    const dispatch = useDispatch();
    const Product_List = [
        {
            id: "1",
            Name: "Rolex",
            Detail: "An expensive watch which shows time.",
            Price: "$1000",
        },
        {
            id: "2",
            Name: "Custom Shirt",
            Detail: "Any Picture you want on your shirt.",
            Price: "$30",
        },
        {
            id: "3",
            Name: "Trouser",
            Detail: "Premium trouser with zipped Pockets.",
            Price: "$35",
        },
        {
            id: "4",
            Name: "Samsung Galaxy S22",
            Detail: "Flagship Phone with samsungs newest features.",
            Price: "$500",
        }
    ];



    const Additem = (item) => {
        let myArray = [...add_product];
        item.quantity = 1;
        // const foundItem = myArray.filter(element =>             
        //     element.id == item.id);
        //console.log(foundItem);
        const foundItem = myArray.find(element => element.id == item.id);
        // console.log(foundItem);
        if (foundItem != undefined) {
        // console.log(foundItem);
            for (let i = 0; i < myArray.length; i++) {
                if (myArray[i].id === item.id) {
                    item.quantity = myArray[i].quantity;
                    console.log(myArray[i].quantity);
                    item.quantity++;
                    myArray.splice(i, 1);
                    break;
                }
            }
        }
        myArray = [...myArray, item];
        myArray.sort((a,b) => {
            return a.quantity - b.quantity;
        })

        dispatch(AddLatestProduct(myArray))

        // console.log("add_product ===>>> ", add_product);
        // console.log("myArray ===>>> ", myArray);
        // dispatch(AddLatestProduct(myArray))
    };

    const GotoCartScreen = () => {
        navigation.navigate('CartScreen', { name: 'Cart Page' })
    }

    return (
        <View style={styles.container}>
            <View style={styles.cartbtn_container}>
                <Pressable
                    onPress={() => GotoCartScreen()}
                    android_ripple={{ color: '#D81BCA' }}
                    style={({ pressed }) =>
                        pressed
                            ? { ...styles.press_container, ...styles.pressed }
                            : [styles.press_container]}
                >
                    <Text style={styles.text_cart}>Cart</Text>
                </Pressable>
            </View>

            <View style={styles.list_container}>
                {Product_List.map((item) => {
                    return (
                        <Pressable
                            key={item.id}
                            onPress={() => Additem(item)}
                            android_ripple={{ color: '#DDDEDD' }}
                            style={{ margin: 2 }}>
                            <View style={styles.item_container}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.name}>{item.Name}</Text>
                                    <Text style={styles.price}>{item.Price}</Text>
                                </View>
                                <Text style={styles.detail}>{item.Detail}</Text>
                            </View>
                        </Pressable>

                    )
                })}
            </View>

        </View>
    )
}

export default ProductList;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    cartbtn_container: {
        alignItems: 'flex-end',
    },

    press_container: {
        margin: 15,
        backgroundColor: '#F4A729',
        paddingHorizontal: 14,
        paddingVertical: 5,
        borderRadius: 10,
        overflow: 'hidden'
    },

    text_cart: {
        fontSize: 19,
        fontWeight: 'bold',
        fontFamily: FamilySet.regular
    },

    pressed: {
        opacity: 0.25,
        overflow: "hidden",
    },

    list_container: {
        flex: 1
    },

    item_container: {
        margin: 10,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCFCD'
    },

    name: {
        fontSize: 17,
        
        fontFamily: FamilySet.boldOswald
    },

    price: {
        marginTop: 5,
        fontSize: 15,
        fontFamily: FamilySet.regular
    },

    detail: {
        fontSize: 14,
        marginBottom: 5,
        marginTop: 5,
        fontFamily: FamilySet.PTSans_bold
    }
})
