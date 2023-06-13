import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_COMMENT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const CommentForm = ({ medicalHistoryId }) => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          medicalHistoryId,
          commentText,
          commentAuthor: Auth.getProfile().data.patientname,
        },
      });

      setCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'commentText' && value.length <= 400) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className="bg-cyan-500 text-white p-2 m-0" >
      <h4>Do you have any questions or comments for the doctor?</h4>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 400 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/400
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form
            className="flex flex-row justify-center bg-cyan-500 justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >           
              <textarea
                name="commentText"
                placeholder="Message the medical professional..."
                value={commentText}
                className="form-input block w-full px-5 py-3 mt-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 w-100"
                onChange={handleChange}
              ></textarea>
          
            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-2 " type="submit">
                Add Comment
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your medicalHistorys. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default CommentForm;
