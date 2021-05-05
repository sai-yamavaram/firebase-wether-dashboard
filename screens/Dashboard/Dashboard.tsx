import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Text, StyleSheet, View, TouchableOpacity, Dimensions} from "react-native";
import {StatusBar} from "expo-status-bar";
import axios from "axios";
import Firebase from "../../firebase/init";


const {width, height} = Dimensions.get('window');

// @ts-ignore
export default function Dashboard({navigation, route}) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const {user} = route.params;
    const [response, setResponse] = useState(null);
    const [location, setLocation] = useState("Mumbai");
    const [temperature, setTemperature] = useState(null);
    const time = new Date();
    useEffect(() => {
        try {

            axios.get('http://api.weatherstack.com/current?access_key=3ab112569617b8b4e74085e78f42aeff&query="Mumbai"').then(
                res => {
                    setResponse(res.data)
                    var obj = res.data;
                    try {
                        // var oo = JSON.serialize(oo);
                        setLocation(obj.location.name + "," + obj.location.country);
                        setTemperature(obj.current.temperature);
                    } catch (e) {
                        console.log(e)
                    }
                })

        } catch (e) {
            console.log(e)
        }


    }, [])

    return (
        <View style={{flex: 1,}}>
            <Image style={{resizeMode: "contain", position: "absolute"}}
                   source={require('../../assets/custom/snow.png')}/>

            {(response === null) ?
                <ActivityIndicator style={{position: "absolute", top: height / 2}} animating={true} color={"white"}
                                   size={50}/> :
                (
                    <View style={{margin: 10}}>
                        <Text style={[styles.white, {position: "absolute", top: 40, fontSize: 30}]}>
                            Welcome {user}
                        </Text>
                        <Text style={[styles.white, {position: "absolute", top: 80, fontSize: 30, fontWeight: "bold"}]}>
                            {time.getDate() + "th"} {monthNames[time.getMonth()]}, {time.getFullYear()}
                        </Text>
                        <Text
                            style={[styles.white, {position: "absolute", top: 125, fontSize: 30, fontWeight: "bold"}]}>
                            {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
                        </Text>
                        <Text style={[styles.white, {
                            position: "relative",
                            top: 170,
                            fontSize: 60,
                            fontWeight: "bold",
                            fontStyle: 'italic'
                        }]}> {location}</Text>
                        <Text style={[styles.white, {
                            position: "relative",
                            top: 170,
                            fontSize: 200,
                            fontWeight: "bold",
                            fontStyle: 'italic'
                        }]}>
                            {temperature}&#176;
                        </Text>
                        <Text style={[styles.white, {
                            position: "relative",
                            top: 190,
                            fontSize: 40,
                            fontWeight: "bold",
                            fontStyle: 'italic'
                        }]}>
                           Humidity {response?.current?.humidity}
                        </Text>

                        <Text style={[styles.white, {
                            position: "absolute",
                            top: height - 100,
                            fontSize: 40,
                            fontWeight: "bold"
                        }]}>
                            Have a Nice Day !!
                        </Text>
                    </View>)}
            <View style={{position: "absolute", bottom: 40, right: width / 2 - 100, opacity: 0.88}}>
                <TouchableOpacity style={{
                    backgroundColor: "white",
                    width: 200,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                }} onPress={() => {
                    Firebase.auth().signOut();
                    navigation.pop();

                }}>
                    <Text style={{fontWeight: "bold", fontSize: 20}}>Logout</Text>
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