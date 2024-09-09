import { getAllMemes } from "../services/services";
import { useEffect, useState } from "react";
import {DeleteBtn} from "../components/DeleteBtn";

const Home = () => {
  const [memes, setMemes] = useState([]);

  const fetchData = async () => {
    const dataMemes = await getAllMemes();
    setMemes(dataMemes); // Aquí guardas los datos en el estado `memes`
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {memes.map((meme, index) => (
        <div key={index}>
          <p>Nombre del meme: {meme.name}</p>
          <p>Categoria: {meme.categoria}</p>
          <img src={meme.url} alt={meme.name} />
          <p>Tags: {meme.tags}</p>
        </div>
      ))}
    </>
  );
};

export default Home;

