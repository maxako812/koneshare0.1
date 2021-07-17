import React from 'react'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { auth } from "../../firebase"


export const Logout = () => {

    const onClickLogout = () => {
        try {
            auth.signOut();
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <PrimaryButton
            onClick={onClickLogout}>ログアウト</PrimaryButton>
    )
}

