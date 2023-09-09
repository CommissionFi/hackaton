import React, { useState, useEffect } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const User: React.FC = () => {
  const { input } = useParams<{ input: string }>();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Fetch user data when the component mounts
    axios.get(`http://129.159.251.230:5000/api/user?Username=${input}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [input]);

  return (
    <div>
      <h1>User Page</h1>
      <p>User input: {input}</p>
      {userData && (
        <div>
          <h2>User Information</h2>
          <p>Bio: {userData.BIO}</p>
          <p>Wallet Address: {userData['Wallet Address']}</p>
          <img src={userData['Pfp src']} alt="Profile Picture" />
        </div>
      )}
    </div>
  );
};

export default User;