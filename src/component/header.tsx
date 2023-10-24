import { useState } from 'react';
import * as React from 'react';

export default function Header({ onSearch }) {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
