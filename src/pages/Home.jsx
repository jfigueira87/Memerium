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
      <Card url="https://res.cloudinary.com/dz53okn10/image/upload/v1725878180/Captura_de_pantalla_2024-09-09_123547_ufiara.png"/>
      {memes.map((meme, index) => (
        <div className="font-[Itim]" key={index}>
          <p >Nombre del meme: {meme.name}</p>
          <p>Categoria: {meme.categoria}</p>
          <img src={meme.url} alt={meme.name} />
          <p>Tags: {meme.tags}</p>
        </div>
      ))}
    </>
  );
};

export default Home;

