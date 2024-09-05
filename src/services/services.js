import axios from "axios";
const URL_API = "http://localhost:3000/";

//Get all memes -- GET

async function getAllMemes() {
  try {
    const response = await axios.get(URL_API);
    console.log(response.data); 
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}

getAllMemes();


//Get one meme by ID -- GET

//Create meme -- POST

//Delete meme -- DELETE

//Update meme -- PUT