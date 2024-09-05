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
}

//Get one meme by ID -- GET

//Create meme -- POST

//Delete meme -- DELETE

//Update meme -- PUT