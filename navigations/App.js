import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SplashScreen from 'react-native-splash-screen'
// import {createDrawerNavigator} from "@react-navigation/drawer";
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from "./screens/HomeScreen";
import About from "./screens/About";


 const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab =createBottomTabNavigator();




const App = () =>  {
 
  useEffect(()=>{
    SplashScreen.hide();
  },[])

  return(
    <NavigationContainer>
            {/* <Drawer.Navigator>
                <Drawer.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator> */}


            <Stack.Navigator>
                <Stack.Screen 
                    name="Home"
                    component={HomeScreen}
                    options={{title: 'Welcome'}}
                />
                <Stack.Screen name="About" component={About} options={{title: 'About'}} />
            </Stack.Navigator>

            {/* <Tab.Navigator
            >
              <Tab.Screen
                name="Home Screen"
                component={HomeScreen}
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({focused}) => (
                    <Icon name='home' size={20}
                    color={focused ? '#1546DF' : 'black'}
                    />
                  ),
                }}

                />
              <Tab.Screen 
                name="About Screen" 
                component={About}
                options={{
                  tabBarLabel: 'About',
                  tabBarIcon: ({focused}) => (
                    <Icon name='gear' size={20}
                    color={focused ? '#1546DF' : 'black'}
                    />
                  ),
                }}

                />
            </Tab.Navigator> */}
        </NavigationContainer>
  );
};

const styles = StyleSheet.create({

  
});

  export default App;
