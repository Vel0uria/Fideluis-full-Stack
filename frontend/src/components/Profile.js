import React, { useEffect, useState, useContext } from "react";
import AuthService from "../services/auth";
import { Button, Card, Hover } from "../styles";
import { Link } from "react-router-dom";
import axios from "axios";
import useForm from "../hooks/useForm";
import { MyContext } from "../services/Context";

function Profile() {
  const { state } = useContext(MyContext);
  console.log(state.user);

  const [form, handleInputs] = useForm();

  const [readings, setReading] = useState([]);
  const [reading, updateRead] = useState({});
  const isProduction = process.env.NODE_ENV === "production";
  const baseURL = isProduction
    ? "https://fideliuss.herokuapp.com/"
    : "http://localhost:3000";

  useEffect(() => {
    const authService = new AuthService();
    authService
      .profile()

      .then(({ data }) => {
        setReading(prevState => {
          return [...prevState, ...data.user.readings];
        });
      })
      .catch(err => {
        if (err.res === 401) {
          console.log(err.res);
        }
      });
  }, [baseURL]);

  const updateReading = id => {
    axios
      .patch(`${baseURL}/reading/${id}`, form)
      .then(({ data }) => {
        updateRead(prevState => {
          return { ...prevState, ...data.readings };
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (!state.user) return <p>Loading...</p>;
  return (
    <div className="profile">
      <h2>Hello {state.user.name} </h2>
      <h3>Your readings </h3>
      <div>
        <p> Click on the name of the reading to access</p>
      </div>
      {readings.map(reading => {
        return (
          <div key={reading._id}>
            <Card>
              <Hover>
                <Link to={`/savedreading/${reading._id}`}>
                  <h2>{reading.name}</h2>
                </Link>
              </Hover>
              <br />

              <input
                type="text"
                name="name"
                placeholder="new name"
                onChange={e => handleInputs(e)}
              />

              <Button onClick={() => updateReading(reading._id)}>
                Change name
              </Button>
            </Card>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Profile;
