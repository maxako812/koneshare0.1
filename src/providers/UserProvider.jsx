import React from 'react'
import { createContext } from "react"
import { useState, useEffect } from "react";
import { auth } from "../firebase"

export const UserContext = createContext({});


export const UserProvider = (props) => {
    const { children } = props;
    const [userInfo, setUserInfo] = useState(null);

    const login = async (email, password, history) => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            history.push("/top");

        } catch (error) {
            alert(error);
        }
    };


    //新規登録用のメソッド
    const signup = async (email, password, history) => {
        try {
            await auth.createUserWithEmailAndPassword(email, password)
            history.push("/top")
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        auth.onAuthStateChanged(setUserInfo);
    }, []);



    return (
        //contextを利用して認証に必要な情報を渡す
        <UserContext.Provider value={{
            login: login,
            signup: signup,
            userInfo
        }}
        >
            {children}
        </UserContext.Provider>
    )
}
