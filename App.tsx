import Firebase from "./firebase/init";
import React, {createContext, useState} from 'react';
import StackNavigator from "./navigation/StackNavigator/Stacknavigator";
export default function App() {
    const UserContext = createContext(null);
    const [user,setUser] = useState(null)

    // @ts-ignore
    const updateUser = (u)=>{
        setUser(u);
    }
    return (
        // @ts-ignore
        <UserContext.Provider value={{user, updateUser}}>
            <StackNavigator/>
        </UserContext.Provider>
    );
}
