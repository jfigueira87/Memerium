import React from 'react'
import { useLoaderData } from './react-router-dom'

const MemeDetail = () => {
  const meme = useLoaderData(); //detalles del meme desde el router

  return (
    <div>
      <h1>Aquí puedes ver el detalle del meme</h1>
      <p>Nombre: {meme.name}</p>
      <p>Categoría: {meme.category}</p>
      <p>Url: {meme.url}</p>
      <p>Etiquetas: {meme.tags.join(',')}</p>
      <p>Id del meme: {meme.id}</p>
    </div>
  );
}

export default MemeDetail
