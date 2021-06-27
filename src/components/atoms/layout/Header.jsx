import { Link} from "react-router-dom";
import styled from "styled-components"
export const Header = () => {
    return (
        <SHeader>
            <SLink to="/">公募する</SLink>
            <SLink to="/inquirylist">回答する</SLink>
        </SHeader>
    )
}

const SHeader = styled.header`
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding : 8px 0;

`

const SLink = styled(Link)`
    margin: 0 8px;
`