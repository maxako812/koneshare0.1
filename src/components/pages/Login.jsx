import React, { useContext } from "react";
import { withRouter } from "react-router";
import { UserContext } from "../../providers/UserProvider";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import { Label } from "../atoms/label/Label";
import SignUp from "./SignUp";

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
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>
                <Label>
                    Email
          <Input name="email" type="email" placeholder="Email" required/>
                </Label>
                <br/>
                <Label>
                    Password
          <Input name="password" type="password" placeholder="Password" required/>
                </Label>
                <br />
                <br />
                <PrimaryButton type="submit">ログインする</PrimaryButton>
            </form>
            <br/>
            <br/>
            <SignUp/>
        </div>
    );
};
export default withRouter(Login);

