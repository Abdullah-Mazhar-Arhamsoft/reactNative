import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
    createDrawerNavigator,
}
    from "@react-navigation/drawer";
import HomePage from "./HomeScreens/HomePage";
import Settings from "./HomeScreens/Settings";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomDrawer from "./HomeScreens/CustomDrawer";
import URLBuilder from "./HomeScreens/URLBuilder";
import ProductList from "./CartScreens/ProductList";
import CartScreen from "./CartScreens/CartScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AnimationScreen from "./HomeScreens/AnimationScreen";

const Stack = createNativeStackNavigator();

function Product_Stack() {

    return (
        <Stack.Navigator screenOptions={{headerShown: false, headerTitleAlign: 'center' }}>

            <Stack.Screen name="Productlist" component={ProductList} options={{ title: 'Product' }} />
            <Stack.Screen name="CartScreen" component={CartScreen} options={{ title: 'Cart'}} />

        </Stack.Navigator>
    )
}


const Drawer = createDrawerNavigator();

function Home() {


    return (


        <Drawer.Navigator
            screenOptions={{ headerTitleAlign: 'center' }}
            // initialRouteName={'Product_Stack'}
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    title: 'Home',
                    drawerIcon: ({ focused }) => (
                        <Icon name='home' size={20}
                            color={focused ? '#1546DF' : 'black'}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Setting"
                component={Settings}
                options={{
                    title: 'Setting',
                    drawerIcon: ({ focused }) => (
                        <Icon name='gear' size={20}
                            color={focused ? '#1546DF' : 'black'}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="NEW"
                component={URLBuilder}
                options={{
                    title: 'API',
                    drawerIcon: ({ focused }) => (
                        <Icon name='star' size={20}
                            color={focused ? '#1546DF' : 'black'}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="Product_Stack"
                component={Product_Stack}
                options={{
                    title: 'Product',
                    drawerIcon: ({ focused }) => (
                        <Icon name='product-hunt' size={20}
                            color={focused ? '#1546DF' : 'black'}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="Animation_Screen"
                component={AnimationScreen}
                options={{
                    title: 'Animaton',
                    
                    drawerIcon: ({ focused }) => (
                        <Icon name='font' size={20}
                            color={focused ? '#1546DF' : 'black'}
                        />
                    ),
                }}
            />

            {/* <Drawer.Screen
                name="CartScreen"
                component={CartScreen}
                options={{
                    title: 'Cart',
                    drawerIcon: ({ focused }) => (
                        <Icon name='opencart' size={20}
                            color={focused ? '#1546DF' : 'black'}
                        />
                    ),
                }}
            /> */}

        </Drawer.Navigator>

    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },



})