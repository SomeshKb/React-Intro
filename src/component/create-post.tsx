import * as React from 'react';
import { useState } from 'react';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check for validation errors
    if (!title.trim() || !body.trim()) {
      setFormError('Please fill out all fields.');
      return;
    }

    // Reset form error
    setFormError('');

    // Here, you can perform actions with the form data, like submitting it to a server or saving it in your application's state.
    console.log('Submitted title:', title);
    console.log('Submitted body:', body);

    // Reset the form fields after successful submission
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      {formError && <p style={{ color: 'red' }}>{formError}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
