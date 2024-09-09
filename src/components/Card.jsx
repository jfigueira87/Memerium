import React from 'react';

const Card = ({ url }) => {
  return (
    <div className="w-[390px] h-[473px] bg-[url('./src/assets/images/marcoCard.png')]">
      <div className="z-50">
        <img src={url} alt="Painting frame" />
      </div>
    </div>
  );
};

export default Card;

