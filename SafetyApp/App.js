
import React, {useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import UserProfile from './src/screens/HomeScreens/UserProfile';
import QuestionPage from './src/screens/HomeScreens/QuestionPage';
import { Provider } from 'react-redux';
import { store } from './src/app/store';


const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(()=>{
    SplashScreen.hide();
  },[])

  return (
    <NavigationContainer>
    {/* <Drawer.Navigator>
        <Drawer.Screen
            name="Home"
            component={HomeScreen}
        />
        <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator> */}

    <Provider store={store}>
    <Stack.Navigator screenOptions={{headerShown: false, headerTitleAlign: 'center'}}>
        <Stack.Screen 
            name="LogIn"
            component={Login}
            options={{title: 'Welcome' }}
        />
        <Stack.Screen name="SignUp" component={SignUp} options={{title: 'SignUp'}} />
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Stack.Screen name="UserProfile" component={UserProfile} options={{title: 'UserProfile', headerShown: true}} />
        <Stack.Screen name='QuestionPage' component={QuestionPage} options={{title: 'Questions Page'}} />
        
    </Stack.Navigator>

    </Provider>
</NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
