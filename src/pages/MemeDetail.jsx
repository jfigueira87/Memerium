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
      <div className="max-w-4xl mx-auto bg-secondary p-8 rounded-lg shadow-md">
        <form className="meme-form space-y-4 font-mainFont text-white">
          <div>
            <label htmlFor="name" className="block mb-2 text-lg font-semibold">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={memeData.name}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-secondary bg-white"
              />
      </div>
      <div>
          <label htmlFor="url" className="block mb-2 text-lg font-semibold">
                URL de la imagen:
              </label>
              <input
                type="text"
                id="url"
                name="url"
                value={memeData.url}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-secondary bg-white"
              />
            </div>
      
            <div>
              <label htmlFor="category" className="block mb-2 text-lg font-semibold">
                Categoría:
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={memeData.category}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-secondary bg-white"
              />
            </div>
      
            <div>
              <label htmlFor="tags" className="block mb-2 text-lg font-semibold">
                Tags:
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={
                  Array.isArray(memeData.tags)
                    ? memeData.tags.join(", ")
                    : memeData.tags
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-secondary bg-white"
              />
            </div>
          </form>
      
          <div className="text-center mt-8 space-y-4">
            <Link
              to="/"
              className="inline-block w-full md:w-1/2 bg-colorButton text-primary font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-400"
            >
              Volver a la Lista
            </Link>
            <button
              onClick={handleDelete}
              className="inline-block w-full md:w-1/2 bg-colorButton text-primary font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-400"
            >
              Eliminar meme
            </button>
          </div>
        </div>
      )
    };
      export default MemeDetail;