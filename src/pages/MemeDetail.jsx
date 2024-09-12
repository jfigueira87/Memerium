import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneMeme } from '../services/services';

//Hay que definir el loader y exportar
export async function loader({ params }){
  const data = await getOneMeme(params.id);
  return { meme:data }
}

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
    return <div>Cargando...</div>; // Mostrar cargando mientras se obtienen los datos
  }

  if (!memeData) {
    return <div>No se encontró el meme</div>; // Mostrar esto si no se encuentra el meme
  }

  // Formulario con los datos del meme, aún me falta meterle estilo, la imagen del meme y los botones
  return (
    <div>
      <h2>Detalle del Meme</h2>
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
            value={memeData.tags.join(', ')} // Convertimos el array de tags en una cadena separada por comas ya que en nuestro db.json tenemos algunos memes con varias palabras claves
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

export default MemeDetail;