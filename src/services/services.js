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

// async function uploadImage() {


//   const response = await fetch("https://api.cloudinary.com/v1_1/dz53okn10/image/upload", {
//     method: "POST",
//     body: formData
//   });
//   const result = await response.json();
//   console.log("UPLOAD IMAGE");
//   fileInput.src = result.secure_url;
//   console.log(fileInput);
//   return;
// }

//Create meme -- POST
export async function uploadImage() {
  try {
    const fileInput = document.querySelector('#photo');
    const formData = new FormData();
    formData.append('upload_preset', 'ml_default');
    formData.append('file', fileInput.files[0]);

    const response = await axios.post(URL_STORAGE, formData)
    fileInput.src = response.data.secure_url;
    return response.data;
  } catch {
    console.log("ERROR");
  }
};

export async function createMeme() {
  try {
    const fileInput = document.querySelector('#photo');
    const form = document.querySelector('#formAddMeme');

    const response = await axios.post(URL_API, {
      name:form.name.value,
      category:form.category.value,
      tags:form.keyword.value,
      url:fileInput.src
    })
    .then((response) =>{
      console.log(response);
    });
    return response.data;
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
