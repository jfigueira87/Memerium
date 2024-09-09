import { getAllMemes } from "../services/services";
import { useEffect, useState } from "react";
import Card from "../components/Card";


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
        <Card url={meme.url} id_meme={meme.id}/>
      ))}
    </>
  );
};

export default Home;

