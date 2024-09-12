import { useEffect, useState } from "react";
import{ deleteMeme, getAllMemes } from "../services/services";

  const Home = () => {
  const [memes, setMemes] = useState([]);

  const fetchData = async () => {
    try{
      const data = await getAllMemes ();
      setMemes (data);
   } catch (error) {
    console.error ("Error al obtener memes:", error);
   }
  };
  //useEffect ejecuta para que el componente funcione

    useEffect(() => {
      fetchData();
  }, []);

  // Ahora DELETE
  const handleDelete = async (id) => {
    try{
      await deleteMeme(id); // Eliminamos el meme del servidor
      setMemes(memes.filter(meme => meme.id !== id)); // Actualiza el estado eliminado
    } catch (error) {
      console.error ("Error al eliminar el meme: ", error);
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-delius font-bold text-gray-800 mb-4 sm:text-3xl md:text-4xl"> Memerium - Lista de Memes </h1>
      <ul className="space-y-4">
        {memes.map((meme) => (
          <li key={meme.id} className="bg-white p-4 rounded-lg shadow-md text-gray-600 mb-4 text-base sm:text-lg md:text-xl">
            <span className="text-lg">{meme.name}</span> {}
            <button onClick={() => handleDelete(meme.id)} className="flex w-full justify-center rounded-md bg-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-button-text shadow-sm mt-2"
            > Eliminar meme </button>
         </li>
        ))}
        </ul>
      </div>    
    )
  }
  export default Home