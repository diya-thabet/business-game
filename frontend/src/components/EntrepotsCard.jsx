import React, { useState } from 'react';
import './EntrepotsCard.css';
import mapBackground from '../assets/banyet.png';
import walletIcon from '../assets/superficie.png';
import thumbIcon from '../assets/thumbStart.png';
import dropdownArrow from '../assets/dropdown-arrow.png';
import blueCircleIcon from '../assets/BlueCircle.png';

const EntrepotsCard = () => {
  const [activeTab, setActiveTab] = useState('Bas de gamme');
  const [sliderValue, setSliderValue] = useState(100);

  const sliderMax = 1000;
  const progress = (sliderValue / sliderMax) * 100;
  const tabs = ['Bas de gamme', 'Moyenne gamme', 'Haut de gamme'];

  const handleValueChange = (e) => {
    const value = e.target.value;
    setSliderValue(value === '' ? '' : Number(value));
  };

  return (
    <div className="entrepots-card">
      <h3 className="entrepots-title">Vos décisions : Gestion des entrepôts</h3>

      <div className="entrepots-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <select className="entrepots-dropdown" style={{ backgroundImage: `url(${dropdownArrow})` }}>
        <option>Dépôts matière première 1</option>
      </select>

      <div className="map-area" style={{ backgroundImage: `url(${mapBackground})` }}>
        <div className="map-pin">
          <img src={blueCircleIcon} alt="Map marker" className="map-circle-icon" />
          <div className="map-pin-text">
            <span>Superficie Actuel</span>
            <strong>{sliderValue || 0} m²</strong>
          </div>
        </div>
      </div>

      <div className="slider-section">
        <div className="slider-header">
          <label className="slider-label">Superficie à allouer</label>
          <div className="slider-value-group">
            <div className="slider-value-display">Superficie m²</div>
            <div className="slider-input-wrapper">
              <input
                type="number"
                className="slider-value-input"
                value={sliderValue}
                onChange={handleValueChange}
              />
              <img src={walletIcon} alt="icon" className="wallet-icon" />
            </div>
          </div>
        </div>
        <div className="slider-container">
          <input
            type="range"
            min="0"
            max={sliderMax}
            value={sliderValue}
            onChange={handleValueChange}
            className="decision-slider"
            style={{
              '--progress': `${progress}%`,
              '--thumb-image': `url(${thumbIcon})`
            }}
          />
        </div>
      </div>

      <div className="card-actions">
        <button className="btn-card btn-card-secondary">Annuler</button>
        <button className="btn-card btn-card-primary">Confirmer</button>
      </div>
    </div>
  );
};

export default EntrepotsCard;