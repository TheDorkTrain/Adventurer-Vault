import { useState } from 'react';
import { Link } from 'react-router-dom';


import React from 'react';

const Footer = () => {
      
  return (
    <footer>
      <div className="footer">
        <div className="footer-content">
          <h4>
            Made with{' '}
            <span
              className="emoji"
              role="img"
              aria-label="sword"
              aria-hidden="false"
            >
              ⚔️
            </span>{' '}
            by Team 4
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer
