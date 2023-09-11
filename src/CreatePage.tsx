import React, { useState } from 'react';
import axios from 'axios';

const WalletForm: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [showInputs, setShowInputs] = useState(false);

  const [formData, setFormData] = useState({
    Username: '',
    BIO: '',
    WalletAddress: '',
    PfpSrc: '',
  });

  const handleWalletAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setWalletAddress(newValue);

    if (newValue.trim() !== '') {
      setShowInputs(true);
    } else {
      setShowInputs(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all mandatory fields are filled
    if (
      formData.Username.trim() === '' ||
      formData.BIO.trim() === '' ||
      walletAddress.trim() === '' ||
      formData.PfpSrc.trim() === ''
    ) {
      alert('Please fill in all mandatory fields before submitting.');
      return;
    }

    const url = 'http://129.159.251.230:5000/api/user';

    const postData = {
      ...formData,
      WalletAddress: walletAddress,
    };

    try {
      const response = await axios.post(url, postData);

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Wallet Address:</h2>
      <input
        type="text"
        placeholder="Enter your wallet address"
        value={walletAddress}
        onChange={handleWalletAddressChange}
        required 
      />
      {showInputs && (
        <form onSubmit={handleSubmit}>
          <h2>Additional Information:</h2>
          <input
            type="text"
            name="Username"
            placeholder="Username"
            value={formData.Username}
            onChange={handleInputChange}
            required 
          />
          <input
            type="text"
            name="BIO"
            placeholder="BIO"
            value={formData.BIO}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="PfpSrc"
            placeholder="PfpSrc"
            value={formData.PfpSrc}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default WalletForm;
