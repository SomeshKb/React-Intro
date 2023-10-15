import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Post() {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    getPostDetails();
  }, []);

  useEffect(() => {
    getPostComments();
  }, []);

  const getPostDetails = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getPostComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="post-container">
      <div className="post-title">{post?.title}</div>
      <div className="post-body">{post?.body}</div>

      <div className="comment-wrapper">
        <span className="comment-header">Comments</span>
        {comments.map((item, index) => (
          <div key={index} className="comment-items">
            <div className="comment-autor-name"> {item.name} </div>
            <div className="comment-body"> {item.body} </div>
          </div>
        ))}
      </div>
    </div>
  );
}
