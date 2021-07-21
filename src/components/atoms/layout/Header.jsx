import { Link } from "react-router-dom";
import styled from "styled-components"
import { Logout } from "../../molecules/Logout";
import HImg from "../../../images/koneshareheader.png"


export const Header = () => {
    return (
        <SHeader>
            <SHeaderWrapper>
                <SHeaderlogo>
                    <Link to="/top">
                        <SImg class="headerlogo" src={HImg} alt="logo" />
                    </Link>
                </SHeaderlogo>

                <SHeaderMiddle>
                    <SNav>
                        <SLink to="/top">相談する</SLink>
                        <SLink to="/inquirylist">相談一覧</SLink>
                    </SNav>
                </SHeaderMiddle>
                <SHeaderEnd>
                    <Logout />
                </SHeaderEnd>
            </SHeaderWrapper>
        </SHeader>
    )
}


const SHeader = styled.header`
    background-color: #7266a1;
    color: #fff;
    /* text-align: center;
    padding : 10px 0; */
    position: relative;

`

const SHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem; 
    flex:1;
`

const SHeaderlogo = styled.div`
    text-align: center; 
    
`

const SImg = styled.img`
    /* height: 30px; */
    width: 140px;
    margin-top: 8px;
    padding-left:40px;
    float: left;
`

const SNav = styled.nav`
    display:flex;
    
`

const SHeaderMiddle = styled.nav`
    order: -1;
    padding-left: 3rem;
`

const SLink = styled(Link)`
    /* margin: 0 8px; */
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    padding-left: 0;
    padding-right: 1rem;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`


const SHeaderEnd = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 4rem;
`