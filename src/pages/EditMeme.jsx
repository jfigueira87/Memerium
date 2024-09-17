import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getOneMeme, deleteMeme } from "../services/services";

//Hay que definir el loader y exportar
export async function loader({ params }) {
  const data = await getOneMeme(params.id);
  return { meme: data };
}

const EditMeme = () => {
  const { id } = useParams(); // Funcion del router dom para obtener el Id de la URL
  const [memeData, setMemeData] = useState(true); // Estado para almacenar los datos del meme
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const data = await getOneMeme(id);
        setMemeData(data);
        setLoading(false); // Deja de mostrar el cargando
      } catch (error) {
        console.error("Error al obtener los datos del meme:", error);
        setLoading(false);
      }
    };

    fetchMeme();
  }, [id]);

//   const handleDelete = async () => {
//     try {
//       await deleteMeme(id);
//       navigate("/"); //redirige a home
//     } catch (error) {
//       console.error("Error al eliminar el meme:", error);
//     }
//   };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-primary">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Editar meme</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form id="formAddMeme" className="space-y-6">
          <div>
            <label className="block text-sm font-medium leading-6 text-white">Título</label>
            <div className="mt-2">
              <input type="text" className="block w-full rounded-md py-1.5 text-black bg-primarylight ring-1 ring-secondary" value={memeData.name} ></input>

            </div>
          </div>

          <div>
            <label type="tags" className="block text-sm font-medium leading-6 text-white">URL</label>
            <div className="mt-2">
              <label className="block text-sm font-medium leading-6 text-white">{memeData.url}</label>

            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-white">Categoria</label>
            <div className="mt-2">
              <select value={memeData.category} type="text" className="block w-full rounded-md py-1.5 text-black bg-primarylight ring-1 ring-secondary">
                {/* <option value=""> Seleccione una categoria </option> */}
                <option value="trabajo">Trabajo</option>
                <option value="programacion">Programación</option>
                <option value="estudiante">Estudiante</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-white">Palabras clave</label>
            <div className="mt-2">
              <input type="text" className="block w-full rounded-md py-1.5 text-black bg-primarylight ring-1 ring-secondary" value={memeData.tags} ></input>

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