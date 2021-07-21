import React, { useContext } from "react";
import { withRouter } from "react-router";
import { UserContext } from "../../providers/UserProvider";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import { Label } from "../atoms/label/Label";
import { Footer } from "../atoms/layout/Footer";
import { LHeader } from "../atoms/layout/LHeader";
import styled from "styled-components"

const Login = (props) => {

    const { history } = props;
    const { login } = useContext(UserContext);

    // UserContextからlogin関数を受け取る
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        login(email.value, password.value, history);
    };

    return (
        <div>
            <LHeader />
            <SContainer>
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <SUl>
                        <SLi>
                            {/* <Label>Email</Label> */}
                            <Input name="email" type="email" placeholder="Email" required />
                        </SLi>
                        <SLi>
                            {/* <Label>
                                Password</Label> */}
                            <Input name="password" type="password" placeholder="Password" required />
                        </SLi>
                        <SLi>

                            <PrimaryButton type="submit">ログインする</PrimaryButton>

                        </SLi>
                    </SUl>
                </form>
            </SContainer>
            <Footer />
        </div>
    );
};
export default withRouter(Login);


const SContainer = styled.div`
    text-align:center;
    max-width:1000px;
    margin:0 auto;
`
const SLi = styled.li`
    list-style: none;
    margin-bottom: 40px;
`
const SUl = styled.ul`
    width: 500px;
    margin: 0 auto;
`

