import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getOneMeme, deleteMeme } from '../services/services';

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
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-secondary py-8">
      {/* Contenedor principal */}
      <div className="max-w-6xl w-full px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        {/* Contenedor para la imagen con el marco */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div
            className="p-4 rounded-lg shadow-lg w-full max-w-sm bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('../src/assets/images/marcoCard.png')",
              backgroundSize: 'contain' // Ajustar el tamaño del marco
            }}
          >
            <img
              src={memeData.url}
              alt={memeData.name}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Lámpara encima de la imagen */}
          <div className="absolute -top-16 md:-top-20 left-1/2 transform -translate-x-1/2 w-24 md:w-36">
            <img
              src="../src/assets/images/luzCard.png"
              alt="Lamp"
              className="w-full h-auto"
            />
          </div>
        </div>
  
        {/* Información del meme */}
        <div className="w-full md:w-1/2 text-white font-mainFont space-y-4 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold">Título: {memeData.name}</h2>
          <p className="text-lg break-words">URL: <span className="break-all">{memeData.url}</span></p>
          <p className="text-lg">Categoría: {memeData.category}</p>
          <p className="text-lg">Palabras claves: {Array.isArray(memeData.tags) ? memeData.tags.join(', ') : memeData.tags}</p>
        
          {/* Botones */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
            <button
              onClick={handleDelete}
              className="w-full md:w-1/2 bg-colorButton text-primary font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-400">
              Eliminar meme
            </button>
            <Link
              to={`/editmeme/${id}`}
              className="w-full md:w-1/2 bg-colorButton text-primary font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-400 text-center">
              Editar Información
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemeDetail;
