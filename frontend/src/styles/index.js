import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body{
    margin: 0;
    font-family:'Libre Caslon Text';
    background-color:  #fffff7;
      text-align: center;
   
  }
  .background{
    margin: 0 25%;
   
    width: 50vw;

  }

h1{

  font-family:"Cinzel", serif
}

h2{

  font-family:"Cinzel Decorative", cursive;
}

img {
   border-radius: 5%;

  width: 20vw;
  
  
}


`;

export const Nav = styled.nav`
  width: 100vw;
  height: 8vh;
  background-color: crimson;

  display: flex;
  justify-content: space-evenly;
  border-top-color: crimson;
  border-bottom-width: 5px;
  border-bottom-color: gold;
  border-style: solid;

  a {
    font-family: "Cinzel Decorative", cursive;
    font-size: 1.5rem;
    text-decoration: none;
    color: white;
  }
`;

export const Form = styled.div`
  background-color: beige;
  border-color: gold;
  border-style: solid;
  border-radius: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 50vh;
  margin-top: 3%;
  margin-left: 25%;

  input {
    margin: 1%;
    border: none;

    text-align: center;
    width: 20vw;
    height: 3vh;
    font-family: "Cinzel";
  }
  button {
    margin-top: 8%;
  }

  a {
    text-decoration: none;
  }
`;

export const Card = styled.div`
  width: 40vw;
  height: 32vh;
  margin-left: 30%;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2%;
  text-align: center;
  background-color: beige;
  text-decoration: none;

  img {
    width: 20vw;
    height: 23vh;
  }
  input {
    margin: 1%;
    border: none;
    font-family: "Cinzel";
  }
  a {
    text-decoration: none;
    color: crimson;
  }
`;

export const Button = styled.button`
  border-color: crimson;
  background-color: white;
  font-size: 1rem;
  font-family: "Libre Caslon Text";
  border-radius: 5%;
  width: 15vw;
  height: 12;
`;

export const Hover = styled.div`
  display: flex;
  a {
    transition: 1s ease all;
    &:hover {
      transform: scale(1.2);
    }
    &::before {
      content: "";
    }
  }
`;
