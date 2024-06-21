import React from 'react';
import { useNavigate } from 'react-router-dom';
import './blog.css';
import blogimage from './blogimage.jpg';

const BlogCard = ({ title, content, isRightAligned }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${title.replace(/\s+/g, '-').toLowerCase()}`); // Create a URL-friendly slug
  };

  return (
    <div className="blog-card-container">
      <div className={`blog-card ${isRightAligned ? 'blog-card-right' : ''}`}>
        <img src={blogimage} alt="Blog" className="blog-image" />
        <div className="blog-content">
          <h2>{title}</h2>
          <p>{content}</p>
          <button className="read-more-button" onClick={handleReadMore}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
