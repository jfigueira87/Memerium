import React from 'react'
import { createMeme } from '../services/services';
import { uploadImage } from '../services/services';

const CreateMeme = () => {
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Agregar un meme</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form id="formAddMeme" class="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">Dale un nombre a tu meme</label>
            <div class="mt-2">
              <input type="text" name="name" required class="block w-full rounded-md py-1.5 text-black bg-primarylight ring-1 ring-secondary"></input>
            </div>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">Elige una categoria</label>
            <div class="mt-2">
              <select type="text" name="category" required class="block w-full rounded-md py-1.5 text-black bg-primarylight ring-1 ring-secondary">
                <option value="" selected> Seleccione una categoria </option>
                <option value="trabajo">Trabajo</option>
                <option value="programacion">Programación</option>
                <option value="estudiante">Estudiante</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="keyword" className="block text-sm font-medium leading-6 text-white">Palabras clave</label>
            <div class="mt-2">
              <input type="text" name="keyword" required class="block w-full rounded-md py-1.5 text-black bg-primarylight ring-1 ring-secondary"></input>
            </div>
          </div>
          <div>
            <label htmlFor="photo" className="block text-sm font-medium leading-6 text-white">Subir imagen</label>
            <div class="mt-2">
              <input id="photo" type="file" name="photo" onChange={uploadImage}></input>
            </div>
          </div>
          <div>
            <button onClick={createMeme} class="flex w-full justify-center rounded-md bg-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-primary shadow-sm"> Add Image </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMeme;
