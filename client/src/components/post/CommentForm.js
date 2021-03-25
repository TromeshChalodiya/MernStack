import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
  const [text, setaddText] = useState('');

  return (
    <Fragment>
      <div className='post-form'>
        <div className='bg-primary p'>
          <h3>Leave a Comment</h3>
        </div>
        <form
          className='form my-1'
          onSubmit={(e) => {
            e.preventDefault();
            addComment(postId, { text });
            setaddText('');
          }}
        >
          <textarea
            name='text'
            cols='30'
            rows='5'
            value={text}
            onChange={(e) => setaddText(e.target.value)}
            required
          ></textarea>
          <input type='submit' className='btn btn-dark my-1' value='Submit' />
        </form>
      </div>
    </Fragment>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
