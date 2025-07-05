import React, { useState } from 'react';
import './EspacesAdminCard.css'; // Uses its own CSS file
import mapBackground from '../assets/banyet.png';
import walletIcon from '../assets/superficie.png';
import thumbIcon from '../assets/thumbStart.png';
import blueCircleIcon from '../assets/BlueCircle.png';

const EspacesAdminCard = () => {
  const [sliderValue, setSliderValue] = useState(100); // Initial value

  const sliderMax = 1000;
  const progress = (sliderValue / sliderMax) * 100;

  const handleValueChange = (e) => {
    const value = e.target.value;
    setSliderValue(value === '' ? '' : Number(value));
  };

  return (
    <div className="espaces-card">
      <h3 className="espaces-title">Vos décisions : Gestion des espaces administratifs</h3>

      {/* The tab buttons section is removed for this card */}

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

export default EspacesAdminCard;