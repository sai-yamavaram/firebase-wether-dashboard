import React, {useRef, useState} from 'react';
import {StyleSheet, TextInput, Text} from "react-native";
import {validateEmail, validatePassword} from "../../HelperFunctions/Validations";

export type  InputProps = {
    type?: string,
    label: string,
    mode?: "outlined" | "flat" | undefined,
    keyboard?: "default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "decimal-pad" | "visible-password" | "ascii-capable" | "numbers-and-punctuation" | "url" | "name-phone-pad" | "twitter" | "web-search" | 'undefined',
    placeholder?: string,
    updateContext?: (value: string, hasError: boolean) => void,
    otherProps?: JSON | undefined,
};


const CustomInput = ({
                         type = "text",
                         label,
                         mode = "outlined",
                         keyboard = "default",
                         placeholder,
                         updateContext,
                         ...otherProps
                     }: InputProps) => {
    const [input, setInput] = useState('');
    const inputRef = useRef(null);
    const errorRef = useRef(null);
    const [hasError, setHasError] = useState(true);
    const styles = StyleSheet.create({
            input: {
                height: 45,
                // borderColor: "#9a73ef",
                borderColor: "#6200ee",
                // color:"white",
                fontSize: 16,
                borderRadius: 10,
                margin: 12,
                padding: 12,
                borderWidth: 1.45,
            },
            label: {
                marginHorizontal: 16,
                fontWeight: 'bold',
                color: "#6200ee"
            }
        }
    )
    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                ref={inputRef}
                style={styles.input}
                onChangeText={(text) => {
                    if (type === "email") {
                        if (text.length === 0) {
                            // @ts-ignore
                            inputRef.current.setNativeProps({style: {borderColor: "#6200ee"}});
                            // @ts-ignore
                            setHasError(true)
                        } else if (!validateEmail(text)) {
                            // @ts-ignore
                            inputRef.current.setNativeProps({style: {borderColor: "red"}});
                            // @ts-ignore
                            setHasError(true)
                        } else {
                            // @ts-ignore
                            inputRef.current.setNativeProps({style: {borderColor: "green"}});
                            // @ts-ignore
                            setHasError(false)

                        }

                    } else if (type === "password") {

                        if (text.length === 0) {
                            // @ts-ignore
                            inputRef.current.setNativeProps({style: {borderColor: "#6200ee"}});
                            // @ts-ignore
                            errorRef.current.setNativeProps({style: {opacity: 0}});
                            setHasError(true)

                        } else if (!validatePassword(text)) {
                            // @ts-ignore
                            inputRef.current.setNativeProps({style: {borderColor: "red"}});
                            // @ts-ignore
                            errorRef.current.setNativeProps({style: {opacity: 1}});
                            setHasError(true)
                        } else {
                            // @ts-ignore
                            inputRef.current.setNativeProps({style: {borderColor: "green"}});
                            // @ts-ignore
                            errorRef.current.setNativeProps({style: {opacity: 0}});
                            setHasError(false)

                        }
                    }
                    setInput(text);
                    if (updateContext) {
                        updateContext(text, hasError)
                    }
                }}
                placeholderTextColor="#dbcdf7"
                value={input}
                placeholder={placeholder}
                keyboardType={keyboard}
                {...otherProps}
            />
            {
                (type === "password") ?
                    <Text ref={errorRef} style={{
                        color: 'red',
                        fontWeight: "bold",
                        opacity: 0,
                        fontSize: 12,
                        marginHorizontal: 16,
                        marginBottom: 8
                    }}>Password must have min 8 char with uppercase, lowercase & contain special char </Text> : <></>
            }
        </>
    )
}


export default CustomInput;