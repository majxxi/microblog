import React, { useEffect } from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle, CardFooter
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTitlesFromAPI, voteOnPostFromAPI } from './actions';

function Homepage() {
  const titles = useSelector(store => store.titles);
  console.log(titles);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getTitlesFromAPI());
    history.push('/');
  }, [dispatch, history]);

  const voteOnPostHelper = (postId, vote) => {
    dispatch(voteOnPostFromAPI(postId, vote));
  }

  return (
    <div>
      <h1>WELCOME</h1>

      {titles.sort((a,b) => b.votes - a.votes).map(postPair =>
        <Card key={postPair.id}>
          <CardBody>
            <CardTitle><Link to={`/${postPair.id}`}>{postPair.title}</Link></CardTitle>
            <CardSubtitle>{postPair.description}</CardSubtitle>
            <CardFooter>
              <p>Net Votes: {postPair.votes}</p>
              {/* refactor to use same button, make new component */}
              <i className="fas fa-thumbs-up mr-2 text-success"
                onClick={() => voteOnPostHelper(postPair.id, 'up')}></i>
              <i className="fas fa-thumbs-down text-danger"
                onClick={() => voteOnPostHelper(postPair.id, 'down')}></i>
            </CardFooter>
          </CardBody>
        </Card>
      )}
    </div>
  )
}

export default Homepage;