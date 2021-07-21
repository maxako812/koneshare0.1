import styled from "styled-components";
import React, { useContext } from "react";
import { withRouter } from "react-router";
import { UserContext } from "../../providers/UserProvider";
import { Input } from "../atoms/input/Input";
import { Label } from "../atoms/label/Label";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { LHeader } from "../atoms/layout/LHeader";
import { Footer } from "../atoms/layout/Footer";

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
      <LHeader />
      <SContainer>

        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <SUl>
            <SLi>
              <Input name="email" type="email" placeholder="Email" /></SLi>

            <SLi>
              <Input name="password" type="password" placeholder="Password" /></SLi>
            <SLi>
              <PrimaryButton type="submit">新規登録する</PrimaryButton></SLi>
          </SUl>

        </form>

      </SContainer>
      <Footer />
    </div>
  );
};

export default withRouter(SignUp);


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