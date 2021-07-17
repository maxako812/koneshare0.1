import React, { useContext } from "react";
import { withRouter } from "react-router";
import { UserContext } from "../../providers/UserProvider";
import { Input } from "../atoms/input/Input";
import { Label } from "../atoms/label/Label";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

const SignUp = ({ history }) => {
  const { signup } = useContext(UserContext);
  // UserContextからsignup関数を受け取る
  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signup(email.value, password.value, history);
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <Label>
          Email
          <Input name="email" type="email" placeholder="Email" />
        </Label>
        <br/>
        <Label>
          Password
          <Input name="password" type="password" placeholder="Password" />
        </Label>
        <br/>
        <br/>
        <PrimaryButton type="submit">Sign Up</PrimaryButton>
      </form>
    </div>
  );
};

export default withRouter(SignUp);