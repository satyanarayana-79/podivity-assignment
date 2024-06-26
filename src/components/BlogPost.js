import React from 'react';
import { useParams } from 'react-router-dom';
import { getPosts } from '../utils/mockAPI';

const BlogPost = () => {
  const { id } = useParams();
  const post = getPosts().find(post => post.id === parseInt(id));

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.author}</p>
      <p>{post.content}</p>
      <p>{post.date}</p>
    </div>
  );
};

export default BlogPost;
