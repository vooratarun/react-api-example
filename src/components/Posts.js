import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts2 } from '../actions/postActions';

const Posts = (props) => {

  useEffect(() => {
    props.fetchPosts2();
  }, [props.fetchPosts2]);

  if (props.loading) {
    return <div>Loading...</div>;
  }

  if (props.error) {
    return <div>Error: {props.error}</div>;
  }

  return (
    <div>
      <h1>Posts Component redux</h1>
      <ul>
        {props.posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps, { fetchPosts2 })(Posts);
