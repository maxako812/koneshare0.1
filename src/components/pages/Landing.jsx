import React from 'react'
import styled from "styled-components";
import { Footer } from '../atoms/layout/Footer'
import { LHeader } from "../atoms/layout/LHeader"
import Img from "../../images/konesharelogo.png"
export const Landing = () => {

    return (
        <div>
            <LHeader />
            <SWrapper>
                <img class="logo" src={Img} alt="logo" />
                <p>KONESHAREは社内の困りごとを解決できるサービスです</p>
            </SWrapper>
            <Footer />
        </div>

    )
}

const SWrapper = styled.body`
    text-align:center;
    margin: 100px;
`

