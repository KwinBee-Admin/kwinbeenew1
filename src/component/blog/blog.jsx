import React from 'react';
import './blog.css';
import BlogCard from './blogcard';
import blogimage from './blogimage.jpg';

const blogs = [
  {
    title: "Sample Blog Post 1",
    content: "This is a sample blog post. It contains some introductory content about the topic discussed in the blog.",
    imageUrl: blogimage
  },
  {
    title: "Sample Blog Post 2",
    content: "This is another sample blog post. It contains some more content about the topic discussed in the blog.",
    imageUrl: blogimage
  },
  {
    title: "Sample Blog Post 3",
    content: "This is yet another sample blog post. It contains even more content about the topic discussed in the blog.",
    imageUrl: blogimage
  },
  {
    title: "Sample Blog Post 4",
    content: "This is yet another sample blog post. It contains even more content about the topic discussed in the blog.",
    imageUrl: blogimage
  },
  // Add more blog objects as needed
];

export default function Blog() {
  return (
    <div className='blogpage'>
      <h1>Our Blog</h1>
      {blogs.map((blog, index) => (
        <BlogCard 
          key={index}
          title={blog.title}
          content={blog.content}
          imageUrl={blog.imageUrl}
          isRightAligned={index % 2 !== 0} // Apply right alignment to every other blog card
        />
      ))}
    </div>
  );
}
