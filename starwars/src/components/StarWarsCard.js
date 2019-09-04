import React from "react";
import "../App.css"
import styled from "styled-components"
import swbig from "../../src/sw-bg.jpg"
import { Card, CardImg, CardText, CardBody,
   CardTitle, CardSubtitle, Button , CardLink} from 'reactstrap';
 
 
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
         <Card>
         <CardBody inverse style={{backgroundImage: `url(${swbig})`}}>
         <CardTitle inverse style={{color: "grey", fontSize:"2.5rem"}}>Name: {props.name}</CardTitle>
         <CardText> Birth year: {props.birthday}</CardText>
         <CardLink href={props.homeworld}> HomeWorld </CardLink>
         </CardBody>
         </Card>
      </div>
   );
};

export default StarWarCards;