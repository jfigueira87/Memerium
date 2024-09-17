
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';

// function App() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate();

//   const onSubmit = handleSubmit((data) => {
//     console.log(data);
//     navigate('/#'); // Ejemplo de redirección después de enviar el formulario
//   });

//   return (
//     <div className="flex justify-center bg-[#1E4F64]"> 
//     <form className="flex flex-col justify-center" onSubmit={onSubmit}>
//       <label htmlFor="titulo" className= "text-white">Titulo</label>
//       <input className="bg-white-500 w-40"
//         type="text"
//         id="titulo"
//         {...register("titulo", { required: true })}
//       />
//       {errors.titulo && <span>Espacio requerido</span>}

//       <label htmlFor="categoria" className= "text-white">Categoria</label>
//       <input className="bg-white-500 w-40"
//         type="text"
//         id="categoria"
//         {...register("categoria", { required: true })}
//       />
//       {errors.categoria && <span>Espacio requerido</span>}

//       <label htmlFor="palabrasClave" className= "text-white">Palabras Clave</label>
//       <input className="bg-white-500 w-40"
//         type="text"
//         id="palabrasClave"
//         {...register("palabrasClave", { required: true })}
//       />
//       {errors.palabrasClave && <span>Espacio requerido</span>}

//       <button type="submit" className= "text-white" >Guardar información</button>
//     </form>
//     </div>
//       );
// }

// export default App;