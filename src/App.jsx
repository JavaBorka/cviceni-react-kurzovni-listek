import React, { useState } from 'react';
import Rate from './components/Rate';
import './App.css'

const App = () => {
  const [currency, setCurrency] = useState('USD');

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="container">
      <h1>Kurzovní lístek</h1>
      <div className="currency-info">
        <form>
          <div className="form-field">
            <label htmlFor="currency-select">Měna:</label>
            <select
              id="currency-select"
              value={currency}
              onChange={handleCurrencyChange}
            >
              <option value="USD">Americký dolar</option>
              <option value="EUR">Euro</option>
              <option value="GBP">Britská libra</option>
              <option value="CHF">Švýcarský frank</option>
            </select>
          </div>
        </form>
        <Rate from={currency}/>
      </div>
    </div>
  );
};

export default App
