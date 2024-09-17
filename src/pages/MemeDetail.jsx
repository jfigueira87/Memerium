import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getOneMeme, deleteMeme } from "../services/services";

//Hay que definir el loader y exportar
export async function loader({ params }) {
  const data = await getOneMeme(params.id);
  return { meme: data };
}

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
        {" "}
        Cargando...
      </div>
    );
  }

  if (!memeData) {
    return (
      <div className="text-center font-delius text-lg text-red-500">
        {" "}
        No se encontró el meme
      </div>
    );
  }

  // Formulario con los datos del meme, aún me falta meterle estilo, la imagen del meme y los botones
  return (
    <div className="min-h-screen w-full flex flex-col justify-center bg-secondary">
      
      {/* Contenedor principal */}
      <div className="max-w-6xl w-full mx-auto p-8 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        {/* Contenedor para la imagen con el marco */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div
            className="p-4 rounded-lg shadow-lg w-full md:w-[350px] bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('../src/assets/images/marcoCard.png')", // Ruta del archivo del marco
              backgroundSize: "100% 100%", // Hace que el marco se ajuste al contenedor
            }}
          >
            <img
              src={memeData.url}
              alt={memeData.name}
              className="w-full h-auto"
            />
          </div>
  
          {/* Lámpara encima de la imagen */}
          <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-36">
            <img
              src="../src/assets/images/luzCard.png" // Ruta del archivo de la lámpara
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
};

export default MemeDetail;