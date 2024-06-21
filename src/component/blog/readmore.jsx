// component/blogpost/blogpost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import blogimage from './blogimage.jpg'; // Assuming you want to reuse the same image
import './blog.css';

const BlogPost = () => {
  const { id } = useParams();
  const formattedTitle = id.replace(/-/g, ' '); // Convert URL slug back to title

  return (
    <div className='readmore'>
          <div className="blogpost-container">
      <h1 className="blogpost-title">{formattedTitle}</h1>
      <img src={blogimage} alt={formattedTitle} className="blogpost-image" />
      <p className="blogpost-description">
        This is the detailed content of the blog post titled "{formattedTitle}". Here you can write the full description of the post.
      </p>
    </div>
    </div>
  );
}

export default BlogPost;
