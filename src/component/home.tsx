import * as React from 'react';
import { useState } from 'react';
import Header from './header';
import PostList from './post-list';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Header onSearch={setSearchTerm}></Header>
      <PostList search={searchTerm}></PostList>
    </div>
  );
}
