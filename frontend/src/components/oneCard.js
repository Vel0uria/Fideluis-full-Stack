import React, { useState, useEffect } from "react";
import axios from "axios";
import useForm from "../hooks/useForm";
import { Button, Card } from "../styles";
import { Link } from "react-router-dom";
import AuthService from "../services/auth";

function OneCard() {
  const [cards, setCard] = useState([]);
  const [user, setUser] = useState({});
  const [form, handleInputs] = useForm();

  const isProduction = process.env.NODE_ENV === "production";
  const baseURL = isProduction
    ? "https://fideliuss.herokuapp.com/"
    : "http://localhost:3000";
  useEffect(() => {
    axios
      .get(`${baseURL}/cards/random?n=1`)
      .then(({ data }) => {
        setCard(prevState => {
          return [...prevState, ...data.cards];
        });
      })
      .catch(err => {
        console.log(err);
      });
    const authService = new AuthService();
    authService.profile().then(res => {
      const userData = res.data.user;
      setUser(userData);
    });
  }, [baseURL]);

  const saveReading = () => {
    axios
      .post(`${baseURL}/savereading`, {
        ...form,
        cards,
        user
      })
      .then(({ data }) => {
        return data.name;
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Card for today</h1>

      {cards.map((card, i) => {
        if (!cards) return <p>Loading...</p>;
        else {
          return (
            <div key={i}>
              {!card ? (
                <p>Loading</p>
              ) : (
                <div key={i}>
                  <h2>{card.name}</h2>
                  <img src={card.img} alt="card" />
                  <p>{card.meaning_up}</p>
                  <Button>See detail</Button>
                </div>
              )}
            </div>
          );
        }
      })}
      <br />
      <Card>
        <input
          type="text"
          name="name"
          placeholder="name your reading"
          onChange={e => handleInputs(e)}
        />
        <br />
        <Link to="/profile">
          <Button onClick={saveReading}>Save Reading</Button>
        </Link>
      </Card>
    </div>
  );
}

export default OneCard;
