import React from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Homepage() {
  //obj of posts
  const postsObj = useSelector(store => store.posts);
  console.log(postsObj);
  // arr of pairs: [[id1, postdata1],[id2, postdata2],...]
  const postsArr = Object.entries(postsObj); 
  console.log(postsArr);

  return (
    <div>
      <h1>WELCOME</h1>
      <Card>
        {postsArr.map(postPair =>
          <CardBody>
            <CardTitle><Link to={`/${postPair[0]}`}>{postPair[1].title}</Link></CardTitle>
            <CardSubtitle>{postPair[1].description}</CardSubtitle>
          </CardBody>
        )}
      </Card>
    </div>
  )
}

export default Homepage;