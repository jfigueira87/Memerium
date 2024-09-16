// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import { updateMeme } from './api'; 

// function App() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     const id = 1;
//     try {
//       const updatedMeme = await updateMeme(id, data);
//       console.log('Meme actualizado:', updatedMeme);

      
//       navigate('/home');
//     } catch (error) {
//       alert('Error al actualizar el meme');
//     }
//   };

//   return (
//     <div className="flex justify-center bg-[#1E4F64]"> 
//       <form className="flex flex-col justify-center" onSubmit={handleSubmit(onSubmit)}>
//         <label htmlFor="titulo" className="text-white">Titulo</label>
//         <input className="bg-white-500 w-40"
//           type="text"
//           id="titulo"
//           {...register("titulo", { required: true })}
//         />
//         {errors.titulo && <span>Espacio requerido</span>}

//         <label htmlFor="categoria" className="text-white">Categoria</label>
//         <input className="bg-white-500 w-40"
//           type="text"
//           id="categoria"
//           {...register("categoria", { required: true })}
//         />
//         {errors.categoria && <span>Espacio requerido</span>}

//         <label htmlFor="palabrasClave" className="text-white">Palabras Clave</label>
//         <input className="bg-white-500 w-40"
//           type="text"
//           id="palabrasClave"
//           {...register("palabrasClave", { required: true })}
//         />
//         {errors.palabrasClave && <span>Espacio requerido</span>}

//         <button type="submit" className="text-white">Guardar información</button>
//       </form>
//     </div>
//   );
// }
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { updateMeme } from '../services/services'; 

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { id } = useParams(); // Obtener el ID de los parámetros de la URL

  const onSubmit = async (data) => {
    try {
      const updatedMeme = await updateMeme(id, data);
      console.log('Meme actualizado:', updatedMeme);
      navigate('/home');
    } catch (error) {
      console.error('Error al actualizar el meme:', error);
      alert('Error al actualizar el meme. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1E4F64]"> 
      <form className="flex flex-col justify-center p-6 bg-white rounded shadow-md w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="titulo" className="text-gray-700">Título</label>
        <input className="bg-gray-200 p-2 rounded mb-2"
          type="text"
          id="titulo"
          aria-invalid={errors.titulo ? "true" : "false"}
          {...register("titulo", { required: true })}
        />
        {errors.titulo && <span className="text-red-500">Espacio requerido</span>}

        <label htmlFor="categoria" className="text-gray-700">Categoría</label>
        <input className="bg-gray-200 p-2 rounded mb-2"
          type="text"
          id="categoria"
          aria-invalid={errors.categoria ? "true" : "false"}
          {...register("categoria", { required: true })}
        />
        {errors.categoria && <span className="text-red-500">Espacio requerido</span>}

        <label htmlFor="palabrasClave" className="text-gray-700">Palabras Clave</label>
        <input className="bg-gray-200 p-2 rounded mb-2"
          type="text"
          id="palabrasClave"
          aria-invalid={errors.palabrasClave ? "true" : "false"}
          {...register("palabrasClave", { required: true })}
        />
        {errors.palabrasClave && <span className="text-red-500">Espacio requerido</span>}

        <label htmlFor="url" className="text-gray-700">URL</label>
        <input className="bg-gray-200 p-2 rounded mb-2"
          type="url"
          id="url"
          aria-invalid={errors.url ? "true" : "false"}
          {...register("url", { required: true })}
        />
        {errors.url && <span className="text-red-500">Espacio requerido</span>}

        <button type="submit" className="bg-blue-500 text-white p-2 rounded mb-2">Guardar información</button>
        <button type="button" className="bg-gray-500 text-white p-2 rounded" onClick={() => navigate('/lista')}>Volver a la lista</button>
      </form>
    </div>
  );
}

export default App;
