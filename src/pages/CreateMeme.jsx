import React from 'react'

const CreateMeme = () => {
  return (
    <div>
       <h1>Agregar un meme</h1>
       <form>
        <label>Dale un nombre a tu meme</label>
        <input type="text" placeholder="Nombre"></input>
        <label>Elige una categoria</label>
        <select>
          <option>Seleccion una opción</option>
          <option value="programation">Programación</option>
          <option value="work">Trabajo</option>
          <option value="students">Estudiantes</option>
        </select>
        <label>Palabras clave</label>
        <input type="text" placeholder="Nombre"></input>
        <label>Subir imagen</label>
        <input type="file"></input>
       </form>
    </div>
  )
}

export default CreateMeme
