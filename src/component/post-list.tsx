import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './header';

export default function PostList() {
  const [limit, setLimit] = useState(10);
  const [post, setPosts] = useState([]);

  const navigate = useNavigate();

  const getPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onLimitChange = ($event) => {
    setLimit($event.target.value);
  };

  const onCreatePostClicked = () => {
    console.log('kk');
    navigate('/post');
  };

  useEffect(() => {
    getPost();
  }, [limit]);

  return (
    <div>
      {/* <input onChange /> */}
      <Header></Header>
      <button onClick={onCreatePostClicked}>Create Post</button>

      <select onChange={onLimitChange}>
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <div className="posts-wrapper">
        {post.map((item, index) => (
          <div key={index} className="post-items">
            <Link className="post-item-text" to={`/post/${item.id}`}>
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
