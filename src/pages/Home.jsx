import { getAllMemes } from "../services/services";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getAllMemes } from "../services/services";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [memes, setMemes] = useState([]);
  const itemsPerPage = 3;

  const fetchData = async () => {
    const dataMemes = await getAllMemes();
    setMemes(dataMemes);
  };

  useEffect(() => {
    fetchData();
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
      <div className="relative">
        <img src="src/assets/images/home.png" alt="galeria de memes" className="w-full" />
        <h2 className="text-white text-6xl absolute bottom-10 left-1/2 transform -translate-x-1/2">
          Donde los memes se hacen arte
        </h2>
      </div>
      <div className="m-14 text-center text-white">
        <h2 className="text-3xl font-bold">Sobre nosotros</h2>
        <p>Memerium, la web de memes que son arte</p>
        <p>Aquí puedes subir, editar y borrar memes para crear tu propia colección de humor ¡tú decides qué memes viven y cuáles desaparecen!. Ayuda al humor viral: ríete, crea y comparte.</p>
        <p>Sé parte de Memerium donde cada meme tiene su lugar.</p>
      </div>
      <div className="relative overflow-hidden bg-[#1E4F64]">
        {/* Carousel Wrapper */}
        <div className="relative flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentPage * 100}%)` }}>
          {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="flex flex-nowrap w-full">
              {page.map((meme) => (
                <div key={meme.id} className="w-full flex-none">
                  <Card url={meme.url} id_meme={meme.id} />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
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

        {/* Carousel Controls */}
        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          onClick={prevPage}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-white text-gray-800 group-hover:bg-gray-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
        </button>
      </div>
    </>
  );
};

export default Home;


