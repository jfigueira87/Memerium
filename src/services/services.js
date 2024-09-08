import axios from "axios";
const URL_API = "http://localhost:3000/memes";

//Get all memes -- GET

export async function getAllMemes() {
  try {
    const response = await axios.get(URL_API);
    return response.data;
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
};

//Get one meme by ID -- GET

//Create meme -- POST
export async function createMeme(bodyMeme) {
  try {
    const response = await axios.post(URL_API, bodyMeme)
    return response.data
  } catch{

  }
};
//Delete meme -- DELETE
export async function deleteMeme(id) {
  try {
    const response = await axios.delete(`${URL_API}/${id}`);
    //console.log('deletedMeme', response.data);//verificar si se elimino
    return response.data;
  } catch (error) {
    console.error('Error en la solicitud:', error); //mostrar el error
  }
};

//Update meme -- PUT
export async function updateMeme(id) {
  try {
    const response = await axios.put(`${URL_API}/${id}`, bodyMeme)

  } catch {

  }
};