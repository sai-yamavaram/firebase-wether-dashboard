import React, {useState} from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import Dashboard from "../../screens/Dashboard/Dashboard";

const Stack = createStackNavigator();

// @ts-ignore
const StackNavigator = () => {

    return (
        // @ts-ignore
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Dashboard" component={Dashboard}/>
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default StackNavigator;

