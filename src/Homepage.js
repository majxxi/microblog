import React, { useEffect } from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTitlesFromAPI } from './actions';

function Homepage() {
  //obj of posts
  // const postsObj = useSelector(store => store.posts);
  // // arr of pairs: [[id1, postdata1],[id2, postdata2],...]
  // const postsArr = Object.entries(postsObj); 

  const titles = useSelector(store => store.titles);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getTitlesFromAPI());
    history.push('/');
  }, [dispatch, history]);

  return (
    <div>
      <h1>WELCOME</h1>

      {titles.map(postPair =>
         <Card key={postPair.id}>
          <CardBody>
            <CardTitle><Link to={`/${postPair.id}`}>{postPair.title}</Link></CardTitle>
            <CardSubtitle>{postPair.description}</CardSubtitle>
          </CardBody>
          </Card>
        )}
     
        {/* {postsArr.map(postPair =>
         <Card>
          <CardBody>
            <CardTitle><Link to={`/${postPair[0]}`}>{postPair[1].title}</Link></CardTitle>
            <CardSubtitle>{postPair[1].description}</CardSubtitle>
          </CardBody>
          </Card>
        )} */}
      
    </div>
  )
}

export default Homepage;