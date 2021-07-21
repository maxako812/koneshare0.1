import { Link } from "react-router-dom";
import styled from "styled-components";
import HImg from "../../../images/koneshareheader.png"


export const LHeader = () => {
    return (
        <SHeader>
            <SHwrapper>
                <Link to="/">
                    <SImg class="headerlogo" src={HImg} alt="landing" />
                </Link>
                <SDiv>
                    <SLink to="/login">ログイン</SLink>
                    <SLink to="/signup">新規登録</SLink>
                </SDiv>
            </SHwrapper>
        </SHeader>
    )
}


const SHeader = styled.header`
    background-color: #7266a1;
    position: relative;
    /* color: #fff;
    padding : 10px 0;
    margin: 0 auto; */
`

const SHwrapper = styled.div`
    /* font-size:1.25rem; */
    /* text-transform: uppercase;
    text-align: right;
    padding-right:40px; */
    /* display: flex;
    justify-content: space-between; */
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0;
    padding-bottom: 0;
`

const SDiv = styled.div`
    /* font-size:1.25rem; */
    text-transform: uppercase;
    text-align: center;
    display: flex;
    padding-right:40px;
`

const SImg = styled.img`
    /* height: 30px; */
    width: 140px;
    /* margin-top: 8px;
    padding-left:40px */
    display: block;
    padding: 1.5rem 1rem;
`

const SLink = styled(Link)`
    margin: 0 8px;
    color: white;
    text-decoration: none;
`
