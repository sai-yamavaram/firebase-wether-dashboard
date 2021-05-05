import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Text, StyleSheet, View, TouchableOpacity, Dimensions} from "react-native";
import {StatusBar} from "expo-status-bar";
import axios from "axios";
import Firebase from "../../firebase/init";


const {width,height} = Dimensions.get('window');

// @ts-ignore
export default function Dashboard({navigation, route}) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const {user} = route.params;
    console.log("dashboard user", user)
    const [response, setResponse] = useState(null);
    const time  = new Date();
    useEffect(() => {
        try {

            axios.get('https://run.mocky.io/v3/9bf2feaa-911c-4b11-8211-7dd26e95868c').then(
                res => {
                    setResponse(res.data)

                })
                .then(()=>{

                    // console.log( Object.keys(response[1][0][0]))
                })
        } catch (e) {
            console.log(e)
        }


    }, [])
    // useEffect(() => {
    //     let secTimer = setInterval(() => {
    //         setTime(new Date().toLocaleString())
    //     }, 1000)
    //
    //     return () => clearInterval(secTimer);
    // }, [])

    return (
        <View style={{flex: 1,}}>
            <Image style={{resizeMode: "contain", position: "absolute"}}
                   source={require('../../assets/custom/snow.png')}/>

            {(response === null) ? <ActivityIndicator style={{position:"absolute",top:height/2}} animating={true} color={"white"} size={50}/> :
                (
                    <View style={{margin:10}}>
                        <Text style={[styles.white,{position:"absolute",top:40, fontSize:30}]}>
                            Welcome {user}
                        </Text>
                        <Text style={[styles.white,{position:"absolute",top:80, fontSize:20,fontWeight:"bold"}]}>
                            {time.getDate() +"th"} { monthNames[time.getMonth()]}, {time.getFullYear()}
                        </Text>
                        <Text style={[styles.white,{position:"absolute",top:110, fontSize:20,fontWeight:"bold"}]}>
                            {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
                        </Text>
                        <Text style={[styles.white,{position:"absolute",top:height - 100, fontSize:30,fontWeight:"bold"}]}>
                            Have a Nice Day
                        </Text>
                    </View>)}
            <View style={{position:"absolute",bottom:40, right:"40%",opacity:0.8}}>
                <TouchableOpacity style={{
                    backgroundColor: "white",
                    width: 100,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                }} onPress={() => {
                    Firebase.auth().signOut();
                    navigation.pop();

                }}>
                    <Text style={{fontWeight:"bold"}}>Logout</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style={"light"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    white: {
        color: "white"
    }
})