import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import CustomInput from "../../components/CustomInput/CustomInput";

export default function LoginScreen() {

    return (
        <View style={styles.container}>
            <Image style={{resizeMode: "contain", width: "100%", marginBottom: -100}}
                   source={require('../../assets/custom/cats.png')}/>
            <CustomInput label={"Email"} type={"email"} textContentType={"emailAddress"}
                         placeholder={"Eg. exampleemail@company.com"} keyboard={"email-address"}/>
            <CustomInput label={"Password"} type={"password"} secureTextEntry={true} placeholder={"Eg. Password@123"}/>
            <TouchableOpacity style={{
                height: 50,
                marginHorizontal: 12,
                backgroundColor: "#6200ee",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
            }}
            onPress={() => {
                console.warn("move")
              }}
            >
                <Text style={{color: "white"}}>Login</Text>
            </TouchableOpacity>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: "white"
    },
    title: {
        textAlign: 'center',
        height: 100,
        paddingVertical: 8,
    },
});
