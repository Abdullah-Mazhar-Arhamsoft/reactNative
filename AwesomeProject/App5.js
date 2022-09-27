import React from "react";
import {View, StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
// import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from "./screens/HomeScreen";
import About from "./screens/About";


// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App5 = () => {

    return (
        <NavigationContainer>

            <Drawer.Navigator>
                <Drawer.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Home',
                        drawerIcon: ({focused}) => (
                            <Icon name='home' size={20}
                            color={focused ? '#1546DF' : 'black'}
                            />
                          ),
                    }}
                />
                <Drawer.Screen name="About" component={About}
                    options={{
                        title: 'About',
                        drawerIcon: ({focused}) => (
                            <Icon name='gear' size={20}
                            color={focused ? '#1546DF' : 'black'}
                            />
                          ),
                    }}
                />
            </Drawer.Navigator>


            {/* <Stack.Navigator>
                <Stack.Screen 
                    name="Home"
                    component={HomeScreen}
                    options={{title: 'Welcome'}}
                />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator> */}
        </NavigationContainer>
        

        
    );
};

const styles = StyleSheet.create({

});

export default App5;


