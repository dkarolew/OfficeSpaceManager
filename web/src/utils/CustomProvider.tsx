import {UserContext} from "./UserContext";
import React, {useEffect, useState} from "react";
import {getLocalStorage, setLocalStorage} from "./storage";

export function CustomProvider({children}: { children: any }) {

    const initialState = {
        userId: null,
        firstName: '',
        lastName: '',
        email: '',
        teamCode: '',
        role: '',
        isLoggedIn: false
    }

    const [userInfo, setUserInfo] = useState(() => getLocalStorage("user", initialState));

    useEffect(() => {
        setLocalStorage("user", userInfo);
    }, [userInfo]);

    return (
        // @ts-ignore
        <UserContext.Provider value={{ userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    );
}