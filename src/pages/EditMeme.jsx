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

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    navigate('/home'); // Ejemplo de redirección después de enviar el formulario
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1E4F64]">
      <div className="bg-[#003340] p-8 rounded-md shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Editar información</h1>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="titulo" className="text-white">Titulo</label>
            <input
              className="bg-white w-full p-2 rounded-md mt-1"
              type="text"
              id="titulo"
              {...register("titulo", { required: true })}
            />
            {errors.titulo && <span className="text-red-500">Espacio requerido</span>}
          </div>

          <div>
            <label htmlFor="categoria" className="text-white">Categoria</label>
            <input
              className="bg-white w-full p-2 rounded-md mt-1"
              type="text"
              id="categoria"
              {...register("categoria", { required: true })}
            />
            {errors.categoria && <span className="text-red-500">Espacio requerido</span>}
          </div>

          <div>
            <label htmlFor="palabrasClave" className="text-white">Palabras Clave</label>
            <input
              className="bg-white w-full p-2 rounded-md mt-1"
              type="text"
              id="palabrasClave"
              {...register("palabrasClave", { required: true })}
            />
            {errors.palabrasClave && <span className="text-red-500">Espacio requerido</span>}
          </div>

          <button type="submit" className="bg-[#A4A5A4] text-[#003340] py-2 px-4 rounded-md w-full font-semibold hover:bg-[#e0e0e0]">
            Guardar información
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
