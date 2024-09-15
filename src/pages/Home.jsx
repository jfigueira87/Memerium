import { getAllMemes } from "../services/services";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [memes, setMemes] = useState([]);
  const itemsPerPage = 3; // Número de memes por página

  const fetchData = async () => {
    const dataMemes = await getAllMemes();
    setMemes(dataMemes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Crear las páginas dividiendo los memes en grupos de 3
  const pages = [];
  for (let i = 0; i < Math.ceil(memes.length / itemsPerPage); i++) {
    pages.push(memes.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage));
  }

  const [currentPage, setCurrentPage] = useState(0);

  const goToPage = (index) => {
    setCurrentPage(index);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <>
      <div className="relative" id="home">
        <img src="src/assets/images/home.png" alt="galeria de memes" className="w-full" />
        <h2 className="text-white text-6xl absolute bottom-10 left-1/2 transform -translate-x-1/2">
          Donde los memes se hacen arte
        </h2>
      </div>
      <div className="m-14 text-center" id="aboutUs">
        <h2 className="text-3xl font-bold mb-5">Sobre nosotros</h2>
        <p>Memerium: Donde los Memes se Convierten en Arte</p>
        <p>Bienvenidos a Memerium, el primer museo digital dedicado exclusivamente al arte del meme. En un mundo donde el humor viral y la creatividad espontánea definen nuestra cultura, hemos creado un espacio donde los memes son más que simples imágenes: son obras de arte que cuentan historias, reflejan emociones y conectan a personas de todo el mundo.</p>
        <p>Los memes son una forma de arte moderna, una herramienta que rompe barreras de idioma y cultura. En Memerium, creemos que el humor puede unir a las personas, y los memes son una manera poderosa de hacerlo. Desde memes clásicos que nunca pasan de moda hasta los más recientes que inundan internet, nuestra misión es celebrar esta nueva forma de comunicación que, en cuestión de segundos, puede hacer reír a millones.</p>
        <h3 className="text-2xl font-bold my-5">Únete a la Revolución del Humor</h3>
        <p>Ser parte de Memerium es mucho más que tener acceso a una galería de memes: es formar parte de una revolución cultural, donde el arte y el humor se entrelazan para crear algo nuevo. Cada día, millones de personas crean y comparten memes que dan vida a conversaciones, provocan sonrisas y generan reflexión. Aquí, en nuestro museo digital, esa chispa creativa nunca se apaga.</p>
      </div>
        {/* Carrusel */}
      <div className="relative overflow-hidden bg-[#1E4F64]">
        {/* Wrapper del Carrusel */}
        <div
          className="relative flex transition-transform duration-700 ease-in-out my-20 justify-center"
          style={{ transform: `translateX(-${currentPage * (100 / pages.length)}%)`, width: `${pages.length * 100}%` }}
        >
          {pages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              className="flex space-x-4 justify-center"
              style={{ width: '100%' }} // Cada página toma el 100% del espacio visible
            >
              {page.map((meme) => (
                <div
                  key={meme.id}
                  className="flex-none"
                  style={{ width: 'calc(100% / 3)' }} // Cada Card ocupa 1/3 del espacio visible
                >
                  <Card url={meme.url} id_meme={meme.id} />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Indicadores del Carrusel */}
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`w-3 h-3 rounded-full ${i === currentPage ? 'bg-white' : 'bg-gray-300'}`}
              aria-current={i === currentPage ? 'true' : 'false'}
              aria-label={`Slide ${i + 1}`}
              onClick={() => goToPage(i)}
            ></button>
          ))}
        </div>

        {/* Controles del Carrusel */}
        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          onClick={prevPage}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-white text-gray-800 group-hover:bg-gray-200">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          onClick={nextPage}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-white text-gray-800 group-hover:bg-gray-200">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
        </button>
      </div>
    </>
  );
};

export default Home;



