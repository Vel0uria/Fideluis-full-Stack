import React, { useContext, useEffect } from "react";
import useForm from "../hooks/useForm";
import AuthService from "../services/auth";
import { withRouter, Link } from "react-router-dom";
import { Button, Card, Form } from "../styles";
import { MyContext } from "../services/Context";

const Login = props => {
  const { changePlace, login } = useContext(MyContext);
  const authService = new AuthService();
  const [form, handleInputs] = useForm();

  useEffect(() => {
    changePlace("auth");
  }, [changePlace]);

  const handleLogin = () => {
    authService
      .login(form)
      .then(response => {
        login(response.data.user);

        localStorage.setItem("USER", JSON.stringify(response.data.user));
        props.history.push("/profile");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="auth">
      <h2>Your account</h2>
      <Form>
        <input
          type="text"
          name="email"
          placeholder="your e-mail"
          onChange={handleInputs}
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          placeholder="your password"
          onChange={handleInputs}
        />{" "}
        <br />
        <Button onClick={handleLogin}>Login</Button>
        <br />
        <p>
          Don't have an account yet? <Link to="/signup">Register here</Link>
        </p>
      </Form>
    </div>
  );
};

export default withRouter(Login);
