import React, {useState} from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import {UserContext} from "../../App";

const Stack = createStackNavigator();


const House = () => {
    return (
        <Text style={{flex: 1, justifyContent: "center"}}>Home</Text>
    )
}

// @ts-ignore
const StackNavigator = () => {
    const [user, setUser] = useState({email: null, displayName: null})

    // @ts-ignore
    const updateUser = (u) => {
        setUser(u);
    }
    return (
        // @ts-ignore
        <UserContext.Provider value={{user, updateUser}}>

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
        </UserContext.Provider>

    )
}

export default StackNavigator;

