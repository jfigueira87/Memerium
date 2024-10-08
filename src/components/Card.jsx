import React from 'react';
import { Link } from 'react-router-dom';
import luzMarco from '../assets/images/luzCard.png'
import marcoCard from '../assets/images/marcoCard.png'

const Card = ({ url, id_meme }) => {
  return (
    <div className='flex items-center justify-center flex-col py-5'>
      <div className='flex items-center justify-center'>
        <img src={luzMarco} alt="light" />
      </div>
      <div className="w-[330px] h-[348px]  flex items-center justify-center" style={{ backgroundImage: `url(${marcoCard})` }}>
        <img className="w-[280px] h-[310px] ml-0.5" src={url} alt="Painting frame" />
      </div>
      <Link to={`/detailmeme/${id_meme}`}><button className='rounded-md bg-gray-300 px-10 py-2 text-sm font-bold  text-primary shadow-sm my-8 hover:bg-gray-400'>Ver mas</button></Link>
      
    </div>
  );
};

export default Card;


