import React, {createContext, useState} from 'react';
import StackNavigator from "./navigation/StackNavigator/Stacknavigator";


export const UserContext = createContext(null);

export default function App() {

    return (
        // @ts-ignore
            <StackNavigator/>
    );
}
