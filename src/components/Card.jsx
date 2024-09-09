import React from 'react';

const Card = ({ url }) => {
  return (
    <div className="w-[330px] h-[348px] bg-[url('./src/assets/images/marcoCard.png')] flex items-center justify-center">
      <div className="z-50">
        <img className="w-[280px] h-[310px]" src={url} alt="Painting frame" />
      </div>
    </div>
  );
};

export default Card;


