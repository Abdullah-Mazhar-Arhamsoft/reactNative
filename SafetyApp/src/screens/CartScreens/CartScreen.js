import React, { useEffect } from "react";
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {AddLatestProduct} from '../../features/counter/productslice';

function CartScreen () {

    const add_product = useSelector((state) => state.addproduct.product);
    const dispatch = useDispatch();
    console.log('Add product: ', add_product);

    const DeleteItem = (item) => {

        // console.log('Item: ',item);
        
        // console.log('Add Product: ',add_product);

        // let myArray = [add_product];


        // for (let i = 0; i < myArray.length; i++) {
        //     if (myArray[i].id === item.id) {
        //         item.quantity = myArray[i].quantity;
        //         console.log(myArray[i].quantity);
        //         item.quantity--;
        //         myArray.splice(i, 1);
        //         break;
        //     }
        // }

        // console.log('Item after splice ==> ', item);
        // console.log('myArray after splice ==> ', myArray);    

        const filterItem = add_product.filter(element =>  element !== item);
        // const filterItem = add_product.filter(element => element !== item.quantity);

        console.log('Filter Item: ',filterItem);
        dispatch(AddLatestProduct(filterItem))
        // let found = false;
        // for (let i = 0; i <add_product.length; i++) {
        //     if (filterItem.id === add_product[i].id) {
        //         console.log(item.id);
        //         found = true;
        //         break;
        //     }
        // }
        // if (!found){
        //     let myArray = [...add_product, item];
        //     dispatch(AddLatestProduct(myArray))
        // }
    };
    

    return(
        <View style={{flex:1}}>
            <Text style={styles.text_head}>Cart Screen</Text>
            <View style={styles.list_container}>
                {add_product.map((item) => {
                    return(
                        <Pressable 
                            key={item.id}
                            onPress={() => DeleteItem(item) }
                            android_ripple={{color: '#DDDEDD'}}
                            style={{margin:2 }}>
                        <View  style={styles.item_container}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.name}>{item.Name}</Text>
                                <Text style={styles.price}>{item.Price}</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.detail}>{item.Detail}</Text>
                            <Text>Qty: {item.quantity && item.quantity}</Text>
                            </View>
                        </View>
                        </Pressable>

                    )
                })}
            </View>
        </View>
    )
}

export default CartScreen;

const styles = StyleSheet.create({
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
        fontWeight: 'bold'
    },

    price: {
        marginTop: 5,
        fontSize: 15
    },

    detail: {
        fontSize: 14,
        marginBottom: 5,
        marginTop: 5
    },

    text_head: {
        textAlign: 'center',
        fontSize: 27,
        fontWeight: 'bold'
    }
})