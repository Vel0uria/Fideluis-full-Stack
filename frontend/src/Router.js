import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import sixCards from "./components/sixCard";
import OneCard from "./components/oneCard";
import ThreeCards from "./components/threeCards";
import DBReading from "./components/DBReading";
import AuthService from "./services/auth";
import { MyContext } from "./services/Context";

const Router = () => {
  const { login, changeIsLogged } = useContext(MyContext);
  useEffect(() => {
    const service = new AuthService();
    const getProfile = async () => {
      const {
        data: { user }
      } = await service.profile();
      login(user);
    };
    getProfile();
  }, [changeIsLogged, login]);
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/logout" />
        <Route exact path="/onecard" component={OneCard} />
        <Route exact path="/sixcards" component={sixCards} />
        <Route exact path="/threecards" component={ThreeCards} />
        <Route exact path="/savedReading/:id" component={DBReading} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
