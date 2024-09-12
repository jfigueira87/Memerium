import React from 'react'
import { createMeme } from '../services/services';
import { uploadImage } from '../services/services';
import { useForm } from 'react-hook-form';


const CreateMeme = () => {
  const {register, formState:{errors},handleSubmit} = useForm();
  const onSubmit = (data) =>{
    console.log(data)
  }

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Agregar un meme</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form id="formAddMeme" class="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">Dale un nombre a tu meme</label>
            <div class="mt-2">
              <input type="text" {...register('name',{required:true})} class="block w-full rounded-md py-1.5 text-black bg-primarylight ring-1 ring-secondary"></input>
              {errors.name?.type === 'required' && <p>El campo de nombre es requerido</p>}
            </div>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">Elige una categoria</label>
            <div class="mt-2">
              <select type="text" {...register('category',{required:true})} class="block w-full rounded-md py-1.5 text-black bg-primarylight ring-1 ring-secondary">
                <option value="" selected> Seleccione una categoria </option>
                <option value="trabajo">Trabajo</option>
                <option value="programacion">Programación</option>
                <option value="estudiante">Estudiante</option>
              </select>
              {errors.category?.type === 'required' && <p>Es necesario elegir una categoria</p>}
            </div>
          </div>
          <div>
            <label htmlFor="keyword" className="block text-sm font-medium leading-6 text-white">Palabras clave</label>
            <div class="mt-2">
              <input type="text" {...register('keyword',{required:true})} class="block w-full rounded-md py-1.5 text-black bg-primarylight ring-1 ring-secondary"></input>
              {errors.keyword?.type === 'required' && <p>Es necesario asignar una palabra clave</p>}
            </div>
          </div>
          <div>
            <label htmlFor="photo" className="block text-sm font-medium leading-6 text-white">Subir imagen</label>
            <div class="mt-2">
              <input id="photo" type="file" accept='image/*' {...register('photo',{
                required:'Es necesario subir una foto', 
                validate:{checkFileType: (fileList) => {
                  return (
                    fileList && fileList[0]?.type.startsWith('image/')
                  ) || 'El archivo debe ser una imagen';
              }}})}  onChange={uploadImage}/>
              {errors.photo && <p>{errors.photo.message}</p>}
            </div>
          </div>
          <div>
            <input type="submit" value="Add Image" className="flex w-full justify-center rounded-md bg-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-primary shadow-sm"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMeme;
