import { useEffect, useState } from "react";
import axios from "axios";
import{ deleteMeme } from "../services"
import { getAllMemes } from "axios";


  const Home = () => {
  const [memes, setMemes] = useState([]);

  const fetchData = async () => {
    const dataMemes = await getAllMemes();
    setMemes(dataMemes); // Aquí guardas los datos en el estado `memes`
  }
  };

  const handleDelete = async (id) => {
    await deleteMeme(id); // Eliminamos el meme del servidor
    setMemes(memes.filter(meme => meme.id !== id)); // Actualiza el estado eliminado
  }

  useEffect(() => {
    fetchData();
  }, []);

    return (
    
      <div>
        <h1> Memerium - Lista de Memes </h1>
      <ul>
        {memes.map(meme => (
          <li key={meme.id} className="meme">
            <button onClick={() => deleteMeme(meme.id)}>Delete</button>
          </li>
        ))}
        </ul>
      </div>
    
    )
  export default Home