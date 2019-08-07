import React, { useContext, useEffect } from "react";
import useForm from "../hooks/useForm";
import AuthService from "../services/auth";

import { Button, Card, Form } from "../styles";
import { MyContext } from "../services/Context";

const Signup = props => {
  const { changePlace, login } = useContext(MyContext);
  const authService = new AuthService();
  const [form, handleInputs] = useForm();

  useEffect(() => {
    changePlace("auth");
  }, [changePlace]);

  const handleSignup = () => {
    authService
      .signup(form)
      .then(response => {
        login(response.data.user);
        localStorage.setItem("USER", JSON.stringify(response.data.user));
        props.history.push("/profile");
      })
      .catch(err => {
        console.log(err);
        console.log(form);
      });
  };

  return (
    <div className="auth">
      <h2>Signup</h2>
      <Form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={e => handleInputs(e)}
        />
        <input
          type="email"
          name="email"
          placeholder="e-mail"
          onChange={e => handleInputs(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={e => handleInputs(e)}
        />
        <Button onClick={handleSignup}>Sign up</Button>
      </Form>
    </div>
  );
};

export default Signup;
