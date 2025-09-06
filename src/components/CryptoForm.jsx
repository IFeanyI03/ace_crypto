import React, { useState } from 'react';

const CryptoForm = () => {
  const [activeTab, setActiveTab] = useState('Buy');

  return (
    <div className="crypto-form-container card-style">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'Buy' ? 'active' : ''}`}
          onClick={() => setActiveTab('Buy')}
        >
          Buy
        </button>
        <button
          className={`tab ${activeTab === 'Sell' ? 'active' : ''}`}
          onClick={() => setActiveTab('Sell')}
        >
          Sell
        </button>
      </div>
      <div className="form-content">
        <div className="form-group">
          <label>Send</label>
          <div className="input-with-currency">
            <input type="text" placeholder="0.0000-1000000" />
            <div className="currency-selector">BTC</div>
          </div>
        </div>
        <div className="form-group">
          <label>Receive</label>
          <div className="input-with-currency">
            <input type="text" placeholder="0.0000" readOnly />
            <div className="currency-selector">ETH</div>
          </div>
        </div>
        <button className="btn-primary full-width">Confirm</button>
      </div>
    </div>
  );
};

export default CryptoForm;