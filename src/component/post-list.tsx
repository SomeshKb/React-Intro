import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './header';

export default function PostList(props) {
  const [limit, setLimit] = useState(10);
  const [post, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const navigate = useNavigate();

  const getPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);

        if (props.search) {
          filterPosts(props.search);
        } else {
          setFilteredPosts(data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onLimitChange = ($event) => {
    setLimit($event.target.value);
  };

  const onCreatePostClicked = () => {
    navigate('/post');
  };

  useEffect(() => {
    getPost();
  }, [limit]);

  const filterPosts = (searchTerm) => {
    if (!searchTerm && searchTerm == '') {
      setFilteredPosts(post);
    } else {
      const filtered = post.filter((item) => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredPosts(filtered);
    }
  };

  useEffect(() => {
    filterPosts(props.search);
  }, [props.search]);

  return (
    <div>
      <div className="post-list-action">
        <button onClick={onCreatePostClicked}>Create Post</button>
        <select onChange={onLimitChange}>
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div className="posts-wrapper">
        {filteredPosts.map((item, index) => (
          <Link to={`/post/${item.id}`} key={index} className="post-items">
            <span className="post-item-text">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
