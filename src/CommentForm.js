import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from './actions';
import { v4 as uuidv4 } from 'uuid';

function CommentForm({ postId }) {
  const [formData, setFormData] = useState(''); 

  const dispatch = useDispatch();
  const addCommentHelper = comment => dispatch(addComment(postId, { comment, id: uuidv4() }));

  const handleChange = evt => {
    setFormData(evt.target.value);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    addCommentHelper(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <input type="text" />
        <button type="submit">POST</button>
      </form>
    </div>
  )
}

export default CommentForm;