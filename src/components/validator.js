//Creamos una validacion para que siempre guarde el texto que reciba en el siguiente formato : "Hola ejemplo" (que coloque la primera en mayus y el resto minusculas)

const firstMayus = (string) => {
    if (!string) return ''; // Verifica que el string no esté vacío o sea nulo
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  
  export default firstMayus;
  
