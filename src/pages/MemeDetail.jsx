import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneMeme } from '../services/services';

//Hay que definir el loader y exportar
export async function loader({ params }){
  const data = await getOneMeme(params.id);
  return { meme:data }
}

export const memeLoader = async ({ params }) => {
  const meme = await getOneMeme(params.id);
  return { meme };
};
const MemeDetail = () => {
  const { id } = useParams(); // Funcion del router dom para obtener el Id de la URL
  const [memeData, setMemeData] = useState(null); // Estado para almacenar los datos del meme
  const [loading, setLoading] = useState(true); // Estado para mostrar si está cargando

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

  if (loading) {
<<<<<<< HEAD
    return <div>Cargando...</div>; // Mostrar cargando mientras se obtienen los datos
  }

  if (!memeData) {
    return <div>No se encontró el meme</div>; // Mostrar esto si no se encuentra el meme
=======
    return <div className="text-center font-delius text-lg text-gray-500"> Cargando...</div>; // Mostrar cargando mientras se obtienen los datos
  }

  if (!memeData) {
    return <div className="text-center font-delius text-lg text-red-500"> No se encontró el meme</div>; // Mostrar esto si no se encuentra el meme
>>>>>>> b3975c4 (:Style: tailwind style in memedetail)
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


/*
      <form className="meme-form">
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={memeData.name}
          />
        </div>

        <div>
          <label htmlFor="url">URL de la imagen:</label>
          <input
            type="text"
            id="url"
            name="url"
            value={memeData.url}
          />
        </div>

        <div>
          <label htmlFor="category">Categoría:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={memeData.category}
          />
        </div>

        <div>
          <label htmlFor="tags">Tags:</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={
              Array.isArray(memeData.tags)
                ? memeData.tags.join(', ')
                : (memeData.tags) // En caso de que no sea un array, devuelve la unica palabra que tiene
            }
            readOnly
          />
        </div>


      </form>
      <div className="text-center mt-">
        <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">volver a la Lista
        </Link>
        <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4">Eliminar
        </button>   
      </div>
    </div>
  );
};

export default MemeDetail;*/