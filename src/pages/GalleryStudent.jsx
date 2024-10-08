import Card from "../components/Card";
import { getAllMemes } from "../services/services";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const GalleryStudent = () => {
    const [memes, setMemes] = useState([]);
    const fetchData = async () => {
        const dataMemes = await getAllMemes();
        setMemes(dataMemes);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filterCondition = (meme) => meme.category === "estudiante";
    const filteredMemes = memes.filter(filterCondition);

    return (
        <>
            <div className="relative overflow-hidden bg-[#001524]" id="galleryStudent" >
            <h2 className="text-2xl font-extrabold text-center text-white mt-10">MEMES DE ESTUDIANTES</h2>
                <div className="m-4 text-center text-black font-mainFont flex justify-center py-8">
                <Link to={`/newmeme`}> <button type="button" className="rounded-md bg-gray-300 px-10 py-4 text-sm font-bold  text-primary shadow-sm hover:bg-gray-400">Agrega un meme</button></Link>
                </div> 
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 duration-700 ease-in-out h-full justify-items-center">
                    {filteredMemes.map((meme) => (
                        <div className="" key={meme.id}>
                            <Card url={meme.url} id_meme={meme.id} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default GalleryStudent;