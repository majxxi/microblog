import React from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom';

function Homepage(){
  const titles = []; // title and descrition

  return(
    <div>
    <h1>WELCOME</h1>
    <Card>
      {titles.map(card =>
      <CardBody>
        <CardTitle><Link to={`/${card.postId}`}>{card.title}</Link></CardTitle>
        <CardSubtitle>{card.description}</CardSubtitle>
      </CardBody>
      )}
    </Card>
    </div>
  )
}

export default Homepage;