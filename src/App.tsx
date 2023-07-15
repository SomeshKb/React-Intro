import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePost from './component/create-post';
import Home from './component/home';
import Post from './component/post';
import './style.css';

export default function App() {
  return (
    <Router>
      {/* Define your routes using the Route component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<CreatePost />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
      {/* <Route component={NotFound} /> */}
    </Router>
  );
}
