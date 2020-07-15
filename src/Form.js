import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form } from "formik";

import * as Yup from "yup";

function PostForm( {addPost} ){
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
                addPost(data);
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