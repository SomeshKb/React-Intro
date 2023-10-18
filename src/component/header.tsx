import { useState } from 'react';
import * as React from 'react';

export default function Header({ onSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
