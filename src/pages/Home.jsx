import { useEffect, useState } from "react";
import { getAllMemes, deleteMeme } from "../services/services";
import { Link } from 'react-router-dom';


const Home = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const dataMemes = await getAllMemes();
    setMemes(dataMemes); // Aquí guardas los datos en el estado `memes`
    setLoading(false);
  }
};

  const handleDelete = async (id) => {
    await deleteMeme(id); // Eliminamos el meme del servidor
    setMemes(memes.filter(meme => meme.id !== id)); // Actualiza el estado eliminado
  }

    useEffect(() => {
    fetchData();
  }, []);

    if (loading) {
    return <p className="text-center text-lg"> Estamos cargando los memes...</p>;
    }

  return (
    <>
      <div>
        <h1> Memerium </h1>
      <Link to="/add">Add Meme</Link>
      <div className="memes">
        {memes.map(meme => (
          <div key={meme.id} className="meme">
            <img src={meme.url} alt={meme.name} />
            <h2>{meme.name}</h2>
            <Link to={`/edit/${meme.id}`}>Edit</Link>
            <button onClick={() => deleteMeme(meme.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>  
    </>
  )
export default Home