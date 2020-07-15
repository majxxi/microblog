import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form } from "formik";

import * as Yup from "yup";

import { useDispatch } from 'react-redux';
import {addPost, updatePost} from './actions';
import {v4 as uuidv4} from 'uuid';

function PostForm({postId}){
  const dispatch = useDispatch();
  const addPostHelper = postData => dispatch(addPost(uuidv4(), postData));
  const updatePostHelper = postData => dispatch(updatePost(postId, postData));
  const history = useHistory();


  const validationSchema = Yup.object({
    title : Yup.string().required(),
    description : Yup.string().required(),
    body : Yup.string().required()
  });

  return (
    <div>
      <Formik initialValues={{ title:'', description:'', body:'' }}
              validationSchema={validationSchema}
              onSubmit={(data) => {
                postId ? updatePostHelper(data) : addPostHelper(data);
                history.push('/');
      }}>
        {({ values, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <Field name="title"
                    as="input"
                    placeholder="title"
              />
            </div>
            <div>
              <Field name="description"
                    as="input"
                    placeholder="description"
              />
            </div>
            <div>
              <Field name="body"
                    as="textarea"
                    placeholder="body"
              />
            </div>
            <div>
              <button type="submit">POST</button>
              <button onClick={() => history.push('/')} type="click">CANCEL</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
};

export default PostForm;