import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getOneMeme, deleteMeme } from '../services/services';
import luzMarco from '../assets/images/luzCard.png';
import marcoCard from '../assets/images/marcoCard.png';

const MemeDetail = () => {
  const { id } = useParams();
  const [memeData, setMemeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const data = await getOneMeme(id);
        setMemeData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los datos del meme:", error);
        setLoading(false);
      }
    };

    fetchMeme();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteMeme(id);
      navigate("/"); // redirige a la página de inicio
    } catch (error) {
      console.error("Error al eliminar el meme:", error);
    }
  };

  if (loading) {
    return (
      <div className="text-center font-delius text-lg text-gray-500">
        Cargando...
      </div>
    );
  }

  if (!memeData) {
    return (
      <div className="text-center font-delius text-lg text-red-500">
        No se encontró el meme
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-secondary py-8 px-4">
      {/* Contenedor de la lámpara e imagen */}
      <div className="flex flex-col items-center mb-8 mr-8"> {/* Añado margen a la derecha */}
        <img src={luzMarco} alt="Lámpara" className="w-36 mb-4" />
        <div
          className="w-[330px] h-[348px] flex items-center justify-center"
          style={{ backgroundImage: `url(${marcoCard})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
        >
          <img className="w-[280px] h-[310px] ml-0.5 object-cover" src={memeData.url} alt="Meme" />
        </div>
      </div>

      {/* Información del meme */}
      <div className="w-full max-w-lg text-white font-mainFont space-y-4 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-semibold">Título: {memeData.name}</h2>

        {/* URL ajustada */}
        <p className="text-lg break-words truncate">
          URL: <a href={memeData.url} className="underline break-all">{memeData.url}</a>
        </p>

        <p className="text-lg">Categoría: {memeData.category}</p>
        <p className="text-lg">
          Palabras claves: {Array.isArray(memeData.tags) ? memeData.tags.join(', ') : memeData.tags}
        </p>

        {/* Botones */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center space-y-4 md:space-y-0 md:space-x-4 mt-4">
          <button
            onClick={handleDelete}
            className="w-full md:w-auto bg-colorButton text-primary font-semibold py-2 px-6 rounded-md shadow-md hover:bg-gray-400"
          >
            Eliminar meme
          </button>
          <Link
            to={`/editmeme/${id}`}
            className="w-full md:w-auto bg-colorButton text-primary font-semibold py-2 px-6 rounded-md shadow-md hover:bg-gray-400 text-center"
          >
            Editar información
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemeDetail;