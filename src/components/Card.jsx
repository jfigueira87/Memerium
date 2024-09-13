import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ url, id_meme }) => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex items-center justify-center'>
        <img src="./src/assets/images/luzCard.png" alt="light" />
      </div>
      <div className="w-[330px] h-[348px] bg-[url('./src/assets/images/marcoCard.png')] flex items-center justify-center">
        <img className="w-[280px] h-[310px] ml-0.5" src={url} alt="Painting frame" />
      </div>
      <Link to={`/detailmeme/${id_meme}`}><button>Ver mas</button></Link>
      
    </div>
  );
};

export default Card;


