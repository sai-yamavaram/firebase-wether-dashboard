import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";

const Stack = createStackNavigator();


const House = () => {
    return (
        <Text style={{flex: 1, justifyContent: "center"}}>Home</Text>
    )
}

// @ts-ignore
const StackNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={LoginScreen}/>
            <Stack.Screen name="House" component={House}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default StackNavigator;

