import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "../styles";
import { Link, withRouter } from "react-router-dom";

function DBReading(props) {
  const [cards, setCard] = useState([]);
  const { id } = props.match.params;

  const isProduction = process.env.NODE_ENV === "production";
  const baseURL = isProduction ? "" : "http://localhost:3000";

  useEffect(() => {
    axios
      .get(`${baseURL}/readings/${id}`)
      .then(({ data }) => {
        const cards = data.reading.cards;
        setCard(cards);
      })
      .catch(err => {
        console.log(err);
      });
  }, [baseURL, id]);

  const deleteReading = e => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then(res => {
      if (res.value) {
        axios
          .delete(`${baseURL}/reading/${id}`)
          .then(({ data }) => {
            Swal.fire("Deleted!", data.msg, "success");
            props.history.push("/profile");
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        return;
      }
    });
  };

  return (
    <div>
      {cards.map((card, i) => {
        return (
          <div key={i}>
            {!card ? (
              <p>Loading</p>
            ) : (
              <div key={i}>
                <p>{card.name}</p>
                <img src={card.img} alt="card" />
                <p>{card.meaning_up}</p>
                <p>{card.desc}</p>
              </div>
            )}
          </div>
        );
      })}
      <Link to="/profile">
        <Button onClick={deleteReading}>Delete</Button>
      </Link>
      <Link to="/profile">
        <Button>Back to your profile</Button>
      </Link>
    </div>
  );
}

export default withRouter(DBReading);
