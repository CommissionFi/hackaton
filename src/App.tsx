import React from 'react';
import './App.css';

function App() {
  const redirectToDashboard = () => {
    // Replace the URL with the actual dashboard URL
    window.location.href = '/dashboard';
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Logo">
          CommissionFi
        </div>
        <div className="dashboardButton">
          <button onClick={redirectToDashboard} className="dashboard-button">
            Go to Dashboard
          </button>
        </div>
      </header>
      <h1>Welcome to CommissionFi</h1>
        <h2>Empowering artists and buyers to create, collaborate, and transact safely in the world of commissions</h2>
        <p>
          Integer id venenatis arcu. Morbi tristique, odio vel euismod
          ullamcorper, odio tellus convallis metus, vel pharetra dui nisl a
          libero.
        </p>
        <p>
          Vivamus fermentum, risus sit amet malesuada rhoncus, ligula leo
          suscipit dolor, non vulputate libero mauris nec justo.
        </p>
    </div>
  );
}

export default App;
