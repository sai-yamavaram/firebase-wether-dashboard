import {StatusBar} from 'expo-status-bar';
import React, {useContext, useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image, ToastAndroid} from 'react-native';
import CustomInput from "../../components/CustomInput/CustomInput";
import {UserContext} from "../../App";
import Firebase from "../../firebase/init";

export default function LoginScreen() {
    const {user,updateUser} = useContext(UserContext);
    // var email = "";
    const [email,setEmail]= useState('');
    const [password,setPassword] = useState('');
    const [emailValidationError,setEmailValidationError] = useState(false);
    const [passwordValidationError,setPasswordValidationError] = useState(false);

    const ShowValidationToast = (message)=>{
        ToastAndroid.showWithGravityAndOffset(
            message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        );
    }

    return (
        <View style={styles.container}>
            <Image style={{resizeMode: "contain", width: "100%", marginBottom: -100}}
                   source={require('../../assets/custom/cats.png')}/>
            <CustomInput label={"Email"} type={"email"} textContentType={"emailAddress"} updateContext={(value:string,hasError:boolean)=> {
                setEmail(value);
                setEmailValidationError (hasError)
            }}
                         placeholder={"Eg. exampleemail@company.com"} keyboard={"email-address"}/>
            <CustomInput label={"Password"} type={"password"} secureTextEntry={true} placeholder={"Eg. Password@123"} updateContext={(value:string,hasError:boolean)=> {
                setPassword(value);
                setPasswordValidationError( hasError);
                // console.warn(password)
            }} />
            <TouchableOpacity style={{
                height: 50,
                marginHorizontal: 12,
                backgroundColor: "#6200ee",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
            }}
            onPress={() => {
                console.log(emailValidationError,passwordValidationError);
                if((emailValidationError || passwordValidationError)==true  )
                {
                    ShowValidationToast('Email/Password are not in Valid format')
                }
                else{
                    try {

                        Firebase.auth().signInWithEmailAndPassword(email, password)
                            .then((userCredentials)=> {
                                ShowValidationToast("Success")
                                updateUser(userCredentials.user)
                                console.log(user);
                            })
                            .catch((error) => {
                                var errorCode = error.code;
                                var errorMessage = error.message;
                                if(errorCode.trim()==="auth/user-not-found")
                                {
                                    Firebase.auth().createUserWithEmailAndPassword(email, password)
                                        .then((userCredentials)=> {
                                            ShowValidationToast("Success")
                                            updateUser(userCredentials.user)
                                            console.log(user);
                                        })
                                }
                                console.log(errorMessage,errorCode)
                            })
                    }
                    catch (e) {
                        console.log(e)
                    }
                }
              }}
            >
                <Text style={{color: "white"}}>Login</Text>
            </TouchableOpacity>
            {/*<TouchableOpacity style={{*/}
            {/*    height: 50,*/}
            {/*    borderWidth:2,*/}
            {/*    marginTop:5,*/}
            {/*    marginHorizontal: 12,*/}
            {/*    borderColor: "#6200ee",*/}
            {/*    borderRadius: 8,*/}
            {/*    justifyContent: "center",*/}
            {/*    alignItems: "center",*/}
            {/*}}*/}
            {/*  onPress={() => {*/}
            {/*      console.log(emailValidationError,passwordValidationError);*/}
            {/*      if(emailValidationError || passwordValidationError  )*/}
            {/*      {*/}
            {/*          ShowValidationToast('Email/Password are not in Valid format')*/}
            {/*      }*/}
            {/*      else{*/}
            {/*          try {*/}

            {/*              Firebase.auth().createUserWithEmailAndPassword(email, password)*/}
            {/*                  .then((userCredential) => {*/}
            {/*                      updateUser( userCredential.user);*/}
            {/*                      ShowValidationToast("Success")*/}
            {/*                  })*/}
            {/*                  .catch((error) => {*/}
            {/*                      var errorCode = error.code;*/}
            {/*                      var errorMessage = error.message;*/}
            {/*                      if(errorCode.trim()==="auth/email-already-in-use")*/}
            {/*                      {*/}
            {/*                          Firebase.auth().signInWithEmailAndPassword(email, password)*/}
            {/*                              .then((userCredentials)=> {*/}
            {/*                                  ShowValidationToast("Success")*/}
            {/*                                  updateUser(userCredentials.user)*/}
            {/*                                  console.log(user);*/}
            {/*                              })*/}
            {/*                      }*/}
            {/*                          console.log(errorMessage,errorCode)*/}
            {/*                  })*/}
            {/*          }*/}
            {/*          catch (e) {*/}
            {/*              console.log(e)*/}
            {/*          }*/}
            {/*      }*/}
            {/*  }}*/}
            {/*>*/}
            {/*    <Text style={{color: "#6200ee"}}>Signup</Text>*/}
            {/*</TouchableOpacity>*/}
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
