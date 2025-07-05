import React from 'react';
// This should be your CLEAR warehouse image
import backgroundImage from '../assets/background.jpg';
import './DecisionsContainer.css';

import EntrepotsCard from './EntrepotsCard';
import AteliersCard from './AteliersCard';
import EspacesAdminCard from './EspacesAdminCard';

const DecisionsContainer = () => {
  return (
    // The image is applied directly to the main container here
    <div
      className="decisions-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <EntrepotsCard />
      <AteliersCard />
      <EspacesAdminCard />
    </div>
  );
};

export default DecisionsContainer;