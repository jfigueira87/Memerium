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
      <div className="relative">
        <img src="src/assets/images/home.png" alt="galeria de memes" className="w-full" />
        <h2 className="text-white text-6xl absolute bottom-10 left-1/2 transform -translate-x-1/2">
          Donde los memes se hacen arte
        </h2>
      </div>
      <div className="m-14 text-center">
        <h2 className="text-3xl text-center font-bold">Sobre nosotros</h2>
          <p>Memerium, la web de memes que son arte</p>
          <p>Aquí puedes subir, editar y borrar memes para crear tu propia colección de humor ¡tú decides qué memes viven y cuáles desaparecen!. Ayuda al humor viral: ríete, crea y comparte.</p>
          <p>Sé parte de Memerium donde cada meme tiene su lugar.</p>
      </div>

      {memes.map((meme) => (
        <Card url={meme.url} id_meme={meme.id} />
      ))}
    </>
  );
};

export default Home;

