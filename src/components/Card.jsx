import React from 'react';

const Card = ({ url }) => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex items-center justify-center'>
        <img src="./src/assets/images/luzCard.png" alt="light" />
      </div>
      <div className="w-[330px] h-[348px] bg-[url('./src/assets/images/marcoCard.png')] flex items-center justify-center">
        <img className="w-[280px] h-[310px] ml-0.5" src={url} alt="Painting frame" />
      </div>
    </div>
  );
};

export default Card;


