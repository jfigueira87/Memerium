import React from 'react'

const FormMeme = (props) => {
  
  const handleOnSubmit = (event) => {
    console.log("emprime");
  };

  return (
      <form>
        <label>Imagen</label>
        <input type="file" id="meme-image"></input>
        <button onClick={handleOnSubmit}>Cargar</button>
      </form>
  );
};

export default FormMeme;