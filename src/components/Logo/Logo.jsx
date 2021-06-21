import React from 'react';
import Tilt from 'react-tilt';
import { BiBrain } from 'react-icons/bi';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma2 mt0">
      <Tilt
        className="Tilt br2 shadow-2 ml3"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}>
        <div
          className="Tilt-inner pa3"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <BiBrain style={{ width: '100px', height: '100px', color: 'white', paddingTop: '5px'}} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
