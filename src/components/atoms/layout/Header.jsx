import { Link } from "react-router-dom";
import styled from "styled-components"
import { Logout } from "../../molecules/Logout";

export const Header = () => {
    return (
        <SHeader>
            <SLink to="/">相談する</SLink>
            <SLink to="/inquirylist">相談一覧</SLink>

            <SDiv>
                <Logout/>
            </SDiv>

        </SHeader>
    )
}

const SHeader = styled.header`
    background-color: #7266a1;
    color: #fff;
    text-align: center;
    padding : 10px 0;

`

const SLink = styled(Link)`
    margin: 0 8px;
    color: white;
    text-decoration: none;
`

const SDiv = styled.div`
    float: right;
`