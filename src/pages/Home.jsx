import { getAllMemes } from "../services/services"
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
}

// useEffect(() => {
//   async function fetchData() {
//     // You can await here
//     const response = await MyAPI.getData(someId);
//     // ...
//   }
//   fetchData();
// }, [someId]); // Or [] if effect doesn't need props or state
return (
  <div>
    <h1>Home</h1>
    <ul>
      {meme.map((meme) => (
        <li key={meme.id}>
          <p> Nombre { meme.name} </p>
          <p> Url: { meme.url} </p>
          <p> Categoría: { meme.category } </p>
          <p> Etiquetas: { meme.tags } </p>
          <button onClic={() => handleDelete (meme.id)}> Eliminar </button>
        </li>
      ))}
    </ul>
  </div>
)



export default Home

