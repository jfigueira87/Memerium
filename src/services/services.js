import axios from "axios";
const URL_API = "http://localhost:3000/memes";
const URL_STORAGE = "https://api.cloudinary.com/v1_1/dz53okn10/image/upload"; //url del repositorio de imagenes CLOUDINARY

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
export async function uploadImage(file) {
  try {
    const formData = new FormData();
    formData.append('upload_preset', 'ml_default');
    formData.append('file', file);

    const response = await axios.post(URL_STORAGE, formData);
    return response.data; // Devuelve los datos de la respuesta, incluyendo la URL de la imagen
  } catch (error) {
    console.log("ERROR en la subida de la imagen", error);
  }
};

export async function createMeme(dataMeme) {
  try {
    
    const response = await axios.post(URL_API, dataMeme)
    .then((response) =>{
      console.log(response);
    });
    return response;
  } catch(e) {console.error("ERROR",e);
  }
};



//Delete meme -- DELETE
export async function deleteMeme(id) {
  try {
    const reponse = await axios.delete(`${URL_API}/${id}`)
  } catch {

  }
};

//Update meme -- PUT
export async function updateMeme(id, bodyMeme) {
  try {
    const response = await axios.put(`${URL_API}/${id}`, bodyMeme);
    return response.data;
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}
