import React, {createContext, useEffect, useState} from 'react';
import StackNavigator from "./navigation/StackNavigator/Stacknavigator";
import {ActivityIndicator, Image, Text, StyleSheet, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import axios from "axios";


export default function App() {


    return (
        // @ts-ignore
        <StackNavigator/>
    );
}

const styles = StyleSheet.create({
    white: {
        color: "white"
    }
})