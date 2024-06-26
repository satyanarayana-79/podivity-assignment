import React, { useState, useEffect } from 'react';
import { getPosts, deletePost } from '../utils/mockAPI';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const PostContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PostTitle = styled.h2`
  font-size: 24px;
  color: #333;
`;

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const handleDelete = (id) => {
    deletePost(id);
    setPosts(getPosts());
  };

  return (
    <div>
      {posts.map(post => (
        <PostContainer key={post.id}>
          <PostTitle>{post.title}</PostTitle>
          <p>{post.author}</p>
          <p>{post.summary}</p>
          <p>{post.date}</p>
          <button onClick={() => history.push(`/post/${post.id}`)}>View Post</button>
          <button onClick={() => history.push(`/edit/${post.id}`)}>Edit Post</button>
          <button onClick={() => handleDelete(post.id)}>Delete Post</button>
        </PostContainer>
      ))}
    </div>
  );
};

export default BlogPostList;
