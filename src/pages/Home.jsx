import { getAllMemes } from "../services/services";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  const [memes, setMemes] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const fetchData = async () => {
    const dataMemes = await getAllMemes();
    setMemes(dataMemes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 412) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 1025) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        <img
          src="../src/assets/images/homeMobile.png"
          alt="galeria de memes"
          className="w-full block sm:hidden"
        />
        <img
          src="../src/assets/images/home.png"
          alt="galeria de memes mobile"
          className="w-full hidden sm:block"
        />
        <h2 className="text-white sm:text-6xl text-3xl absolute sm:bottom-10 bottom-5 left-1/2 transform -translate-x-1/2 text-center w-full">
          Donde los memes se hacen arte
        </h2>
      </div>
      <div id="aboutUs"></div>
      <div className="m-14 text-center" id="aboutUs">
        <h2 className="text-3xl font-bold mb-5">Sobre nosotros</h2>
        <p>Memerium: Donde los Memes se Convierten en Arte</p>
        <p>Bienvenidos a Memerium, el primer museo digital dedicado exclusivamente al arte del meme. En un mundo donde el humor viral y la creatividad espontánea definen nuestra cultura, hemos creado un espacio donde los memes son más que simples imágenes: son obras de arte que cuentan historias, reflejan emociones y conectan a personas de todo el mundo.</p>
        <p>Los memes son una forma de arte moderna, una herramienta que rompe barreras de idioma y cultura. En Memerium, creemos que el humor puede unir a las personas, y los memes son una manera poderosa de hacerlo. Desde memes clásicos que nunca pasan de moda hasta los más recientes que inundan internet, nuestra misión es celebrar esta nueva forma de comunicación que, en cuestión de segundos, puede hacer reír a millones.</p>

      </div>

      {/* Carrusel */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#01222B] via-secundary to-[#01222B]">
        {/* Wrapper del Carrusel */}
        <div
          className="relative flex transition-transform duration-700 ease-in-out my-15"
          style={{
            transform: `translateX(-${currentPage * (100 / pages.length)}%)`,
            width: `${pages.length * 100}%`,
          }}
        >
          {pages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              className="flex justify-center space-x-4"
              style={{ width: '100%' }}
            >
              {page.map((meme) => (
                <div
                  key={meme.id}
                  className={`flex-none ${itemsPerPage === 1 ? 'w-full' : 'w-1/2 lg:w-1/3'}`}
                >
                  <Card url={meme.url} id_meme={meme.id} />
                </div>
              ))}
            </div>
          ))}

        </div>
        <div className="text-center text-black font-mainFont flex justify-center w-full pb-8 mb-10">
          <Link to={`/newmeme`}> <button type="button" className="rounded-md bg-gray-300 px-10 py-4 text-sm font-bold  text-primary shadow-sm">Agrega un meme</button></Link>
        </div>

        {/* Indicadores del Carrusel */}

        <div className="relative hidden sm:flex">
          {/* Contenedor de Indicadores del Carrusel */}
          <div className="flex absolute bottom-2 sm:bottom-5 left-1/2 transform -translate-x-1/2 z-30 space-x-2 sm:space-x-3 overflow-x-auto">
            {/* Contenedor interno para permitir desplazamiento horizontal */}
            <div className="flex space-x-2 sm:space-x-3">
              {pages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${i === currentPage ? 'bg-white' : 'bg-gray-300'}`}
                  aria-current={i === currentPage ? 'true' : 'false'}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => goToPage(i)}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Controles del Carrusel */}
        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none sm:block hidden"
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
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none sm:block hidden"
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

        {/* Controles del Carrusel en Mobile */}
        <div className="absolute inset-x-0 bottom-0 flex justify-between px-4 py-2 sm:hidden">
          <button
            type="button"
            className="flex justify-center items-center w-8 h-8 rounded-full bg-white text-gray-800 shadow-md hover:bg-gray-200 focus:outline-none"
            onClick={prevPage}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            type="button"
            className="flex justify-center items-center w-8 h-8 rounded-full bg-white text-gray-800 shadow-md hover:bg-gray-200 focus:outline-none"
            onClick={nextPage}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;




