import * as React from 'react';
import { useState } from 'react';

export default function Header() {
  const [searchText, setSearchText] = useState('');

  const detectTextChange = (event) => {
    console.log(event.target.value);
    setSearchText(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={detectTextChange} />
    </div>
  );
}
