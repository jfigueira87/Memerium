import { useLoaderData, Link } from './react-router-dom';
import { getOneMeme } from '../services';

export const memeLoader = async ({ params }) => {
  const meme = await getOneMeme(params.id);
  return { meme };
};
const MemeDetail = () => {
  const { meme } = useLoaderData();

  return (
    <div>
      <h1>Aquí puedes ver el detalle del meme</h1>
     <p>Nombre: {meme.name}</p>
      <p>Categoría: {meme.category}</p>
      <p>Url: {meme.url}</p>
      <p>Etiquetas: {meme.tags.join(',')}</p> /* porque hay mas de 1 tag*/
      <p>Id del meme: {meme.id}</p>
    </div>
  );
}

export default MemeDetail
