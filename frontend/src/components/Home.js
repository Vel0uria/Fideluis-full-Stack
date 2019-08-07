import React from "react";
import { Card } from "../styles";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>WELCOME TO FIDELIUS</h1>
      <Card>
        <Link to="/sixcards">
          <img src="../pics/download.jpeg" alt="sixcards" />
          <p>Six Card spread</p>
        </Link>
      </Card>
      <br />
      <Card>
        <Link to="onecard">
          <img src="../pics/fortune.jpg" alt="onecard" />
          <p>Daily reading</p>
        </Link>
      </Card>
      <br />
      <Card>
        <Link to="threecards">
          <img src="../pics/threecards.jpeg" alt="threecards" />
          <p>Present, past and future</p>
        </Link>
      </Card>
    </div>
  );
}

export default Home;
