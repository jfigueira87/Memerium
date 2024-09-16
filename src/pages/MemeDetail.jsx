import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getOneMeme, deleteMeme } from '../services/services';



//Hay que definir el loader y exportar
export async function loader({ params }){
  const data = await getOneMeme(params.id);
  return { meme:data }
}

const MemeDetail = () => {
  const { id } = useParams(); // Funcion del router dom para obtener el Id de la URL
  const [memeData, setMemeData] = useState(null); // Estado para almacenar los datos del meme
  const [loading, setLoading] = useState(true); // Estado para mostrar si está cargando
  const navigate = useNavigate ();

  useEffect(() => {
    
    const fetchMeme = async () => {
      try {
        const data = await getOneMeme(id);
        setMemeData(data);
        setLoading(false); // Deja de mostrar el cargando
      } catch (error) {
        console.error('Error al obtener los datos del meme:', error);
        setLoading(false);
      }
    };

    fetchMeme();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteMeme(id);
      navigate("/"); //redirige a home
    } catch (error){
      console.error("Error al eliminar el meme:", error);
    }
  };

  if (loading) {
    return <div className="text-center font-delius text-lg text-gray-500"> Cargando...</div>; // Mostrar cargando mientras se obtienen los datos
  }

  if (!memeData) {
    return <div className="text-center font-delius text-lg text-red-500"> No se encontró el meme</div>; // Mostrar esto si no se encuentra el meme
  }

  // Formulario con los datos del meme, aún me falta meterle estilo, la imagen del meme y los botones
  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-8 bg-gradient-to-b from-[#A4A5A4] to-[#1E4F64] rounded-lg shadow-md max-w-6xl mx-auto mt-12">
      {/* Imagen del meme */}
    <div className="w-full md:w-1/2 flex justify-center items-center">
    <img
    src={memeData.url}
    alt={memeData.name}
    className="roundes-lg shadow-lg w-full h-auto max-w-sm"
    />
    </div>
    {/*Información del meme*/}
    <div className="w-full md:w-1/2 text-white md:pl-12 mt-8 md:mt-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-delius">Título: {memeData.name}</h2>
        
        <p className="text-lg md:text-xl mb-2 font-delius">
          <strong>URL:</strong> <a href={memeData.url} className="underline text-gray-300">{memeData.url}</a>
        </p>
        
        <p className="text-lg md:text-xl mb-2 font-delius">
          <strong>Categoría:</strong> {memeData.category}
        </p>

        <p className="text-lg md:text-xl mb-2 font-delius">
          <strong>Palabras claves:</strong> {memeData.tags.join(', ')}
        </p>

        {/* Botones */}
        <div className="flex mt-6 space-x-4">
          <button
            onClick={handleDelete}
            className="bg-[#A4A5A4] hover:bg-gray-400 text-[#003340] font-delius font-semibold py-2 px-4 rounded-lg shadow"
          >
            Eliminar meme
          </button>
          
          <Link
            to="/"
            className="bg-[#A4A5A4] hover:bg-gray-400 text-[#003340] font-delius font-semibold py-2 px-4 rounded-lg shadow"
          >
            Volver a la Lista
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemeDetail;
