import { getAllMemes, deleteMeme } from "../services/services"
import { useEffect, useState } from "react"


//Sintaxis del usestate --->  const [count, setCount] = useState(0);

// useEffect(() => {
// // Código del efecto: lo que queremos hacer (efecto secundario)
// 		return () => {
// // Código de limpieza: lo que queremos hacer al desmontar el componente o antes de ejecutar el efecto nuevamente
// };
// }, [dependencies]);


const Home = () => {
  const [meme, setMeme] = useState([]);

  useEffect(()=>{
    const dataMemes = getAllMemes();
    console.log(dataMemes)
    setMeme(dataMemes)
  },[]); 
return(
  <>
    <p>Nombre del meme: {meme.name}</p>
  </>
) 
}

// useEffect(() => {
//   async function fetchData() {
//     // You can await here
//     const response = await MyAPI.getData(someId);
//     // ...
//   }
//   fetchData();
// }, [someId]); // Or [] if effect doesn't need props or state

//Manejar delete meme
const handleDelete = async (id) => {
  const response = await deleteMeme(id);
  //console.log(response);
  setMemes (memes.filter(meme => meme.id !== id));
};
return (
  <div>
    <h1>Lista de Memes</h1>
    <ul>
      {memes.map((meme) => (
        <li key={meme.id}>
          <p>{meme.name}</p>
          <button onClick={() => handleDelete(meme.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  </div>
);

export default Home 
