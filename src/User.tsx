import React from 'react';
import './App.css';
import { useParams } from 'react-router-dom';

const User: React.FC = () => {
  const { input } = useParams<{ input: string }>();

  return (
    <div>
      <h1>User Page</h1>
      <p>User input: {input}</p>
    </div>
  );
};

export default User;