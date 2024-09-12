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
    <div className="container mx-auto p-4">
      <h1 clasName="text-3xl font-bold text-center mb-6"> Memerium - Lista de Memes </h1>
      <ul className="space-y-4">
        {memes.map((meme) => (
          <li key={meme.id} className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
            <span className="text-lg">{meme.name}</span> {}
            <button onClick={() => handleDelete(meme.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"> Eliminar </button>
         </li>
        ))}
        </ul>
      </div>    
    )
  }
  export default Home