import React from "react";
import "../App.css"
import styled from "styled-components"
 
const H1 = styled.h1`
font-size: 3rem;
color: red;
border: 1px solid black;`;


const H2 = styled.h2`
font-size: 2rem
color :gray;`;

const A =styled.a`
font-size: 1.5rem
color: navy;`;


const StarWarCards=(props) => {
   return(
      <div>
        <H1>Name: {props.name}</H1>
        <H2>  Birth year: {props.birthday}</H2>
        <A>HomeWorld: {props.homeworld}</A>

     
      </div>
   );
};

export default StarWarCards;