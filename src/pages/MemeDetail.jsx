import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getOneMeme, deleteMeme } from "../services/services";

//Hay que definir el loader y exportar
export async function loader({ params }) {
  const data = await getOneMeme(params.id);
  return { meme: data };
}

const MemeDetail = () => {
  const { id } = useParams(); // Funcion del router dom para obtener el Id de la URL
  const [memeData, setMemeData] = useState(null); // Estado para almacenar los datos del meme
  const [loading, setLoading] = useState(true); // Estado para mostrar si está cargando
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const data = await getOneMeme(id);
        setMemeData(data);
        setLoading(false); // Deja de mostrar el cargando
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
      navigate("/"); //redirige a home
    } catch (error) {
      console.error("Error al eliminar el meme:", error);
    }
  };

  if (loading) {
    return (
      <div className="text-center font-delius text-lg text-gray-500">
        {" "}
        Cargando...
      </div>
    ); // Mostrar cargando mientras se obtienen los datos
  }

  if (!memeData) {
    return (
      <div className="text-center font-delius text-lg text-red-500">
        {" "}
        No se encontró el meme
      </div>
    ); // Mostrar esto si no se encuentra el meme
  }

  // Formulario con los datos del meme, aún me falta meterle estilo, la imagen del meme y los botones
return (
  <div className="min-h-screen w-full flex flex-col justify-center bg-secondary">
    
    {/* Contenedor principal */}
    <div className="max-w-4xl w-full mx-auto p-8 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
      
      {/* Contenedor para la imagen con el marco */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <div className="bg-white p-4 rounded-lg shadow-lg border-8 border-[#DAB97D] w-full md:w-[350px]">
          <img
            src={memeData.url}
            alt={memeData.name}
            className="w-full h-auto"
          />
        </div>

        {/* Lámpara encima de la imagen */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-12">
          <img
            src="../src/assets/images/luzCard.png"
            alt="Lamp"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Información del meme */}
      <div className="w-full md:w-1/2 text-white font-mainFont space-y-4">
        <h2 className="text-xl font-semibold">Título: {memeData.name}</h2>
        <p className="text-lg">URL: {memeData.url}</p>
        <p className="text-lg">Categoría: {memeData.category}</p>
        <p className="text-lg">Palabras claves: {Array.isArray(memeData.tags) ? memeData.tags.join(', ') : memeData.tags}</p>
      
        {/* Botones */}
        <div className="flex space-x-4 mt-4">
          <button
            onClick={handleDelete}
            className="w-1/2 bg-colorButton text-primary font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-400"
          >
            Eliminar meme
          </button>
          <Link
            to="/"
            className="w-1/2 bg-colorButton text-primary font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-400 text-center"
          >
            Volver a la lista
          </Link>
        </div>
      </div>
    </div>
  </div>
);
}
export default MemeDetail