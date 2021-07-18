import { Link} from "react-router-dom";
import styled from "styled-components"


export const Footer = () => {
    return (
        <SFooter>
            &copy; 2021 T.B.D Inc.
        </SFooter>
    )
}

const SFooter = styled.footer`
    /* background-color: #11999e; */
    background-color: #7266a1;
    color: #fff;
    text-align: center;
    padding : 8px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
`
