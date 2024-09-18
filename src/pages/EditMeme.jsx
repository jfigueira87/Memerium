import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getOneMeme, updateMeme } from "../services/services";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const EditMeme = () => {
  const { id } = useParams(); 
  const [memeData, setMemeData] = useState(''); 
  const {register, handleSubmit, setValue} = useForm ();

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const data = await getOneMeme(id);
        
        setMemeData(data);
        setValue('name',data.name)
        setValue('category',data.category)
        setValue('url',data.url)
        setValue('tags',data.tags)
        
      } catch (error) {
        console.error("Error al obtener los datos del meme:", error);
        setLoading(false);
      }
    };

    fetchMeme();
  }, [id, setValue]);
  
  const navigate = useNavigate();
  const onSubmit = (data) =>{    
    updateMeme(id, data)
    navigate("/") 
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-primary">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Editar meme</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form id="formAddMeme" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium leadnaming-6 text-white">Título</label>
            <div className="mt-2">
              <input 
              type="text" 
              className="block w-full rounded-md py-1.5 text-black bg-primarylight ring-1 ring-secondary" 
              name='name'
              
              {...register('name',{required:true})}
              ></input>
              
            </div>
          </div>

          <div>
            <label name='url'type="tags" className="block text-sm font-medium leading-6 text-white">URL</label>
            <div className="mt-2">
              <label className="block text-sm font-medium leading-6 text-white">{memeData.url}
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-white">Categoria</label>
            <div className="mt-2">
              <select 
              type="text" 
              className="block w-full rounded-md py-1.5 text-black bg-primarylight ring-1 ring-secondary"
              {...register('category',{required:true})}
              >
                <option value="trabajo">Trabajo</option>
                <option value="programacion">Programación</option>
                <option value="estudiante">Estudiante</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-white">Palabras clave</label>
            <div className="mt-2">
              <input 
              type="text" 
              className="block w-full rounded-md py-1.5 text-black bg-primarylight ring-1 ring-secondary"             
              {...register('tags',{required:true})}
               ></input>
            </div>
          </div>

          <div>
            <input type="submit" value="Guardar información" className="flex w-full justify-center rounded-md bg-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-primary shadow-sm" />
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditMeme;
