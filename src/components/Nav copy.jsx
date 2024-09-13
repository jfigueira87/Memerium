// //Navbar

// import { useEffect, useState } from 'react'; 
// import { Link } from 'react-router-dom';
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// const links = [
//   {
//     link: "/",
//     text: "Inicio",
//     id: 1,
//   },
//   {
//     link: "newmeme",
//     text: "Galería",
//     submenu: [
//       {
//         text: "memes de trabajo",
//         link: "newmeme/trabajo",
//       },
//       {
//         text: "memes programación",
//         link: "newmeme/programacion",
//       },
//       {
//         text: "memes de estudiante",
//         link: "newmeme/estudiante",
//       },
//     ],
//     id: 2,
//   },
//   {
//     link: "editmeme",
//     text: "Sobre Nosotros",
//     id: 3,
//   },
//   {
//     link: "detailmeme/:id",
//     text: "Contacto",
//     id: 4,
//   },
// ];

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState(null);

//   const handleSubmenuClick = (e, linkItem) => {
//     if (linkItem.submenu) {
//       e.preventDefault(); 
//       setActiveSubmenu(activeSubmenu === linkItem.text ? null : linkItem.text);
//     } else {
//       setActiveSubmenu(null); 
//       setIsMenuOpen(false);  
//     }
//   };

//   const renderSubmenu = (submenuItems) => (
//     <ul className="absolute top-full left-0 w-full bg-white shadow-lg py-2 z-50 flex flex-col space-y-1"> {/*stylo submenù*/}
//       {submenuItems.map((item) => (
//         <li key={item.text} className="px-4 py-2 bg-[#1E4F64]">
//           <Link to={item.link} className="text-white block bg-[#1E4F64]">{item.text}</Link>
//         </li>
//       ))}
//     </ul>
//   );

//   return (
//     <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
//       <div className="flex items-center justify-between px-20 py-4">
//         <Link to="/" className="text-[#1E4F64] text-xl font-bold">
//           Memerium
//         </Link>
//         <div className="md:hidden">
//           {!isMenuOpen ? (
//             <AiOutlineMenu
//               className="cursor-pointer text-black"
//               size={24}
//               onClick={() => setIsMenuOpen(true)}
//             />
//           ) : (
//             <AiOutlineClose
//               className="cursor-pointer text-black"
//               size={24}
//               onClick={() => setIsMenuOpen(false)}
//             />
//           )}
//         </div>
//       </div>

//       {/* Menú completo para pantallas grandes */}
//       <div className="hidden md:flex justify-end space-x-20">
//         {links.map((l) => (
//           <div key={l.id} className="relative group">
//             <Link
//               className="text-xl text-[#1E4F64] font-bold hover:underline"
//               to={l.link}
//               onClick={(e) => handleSubmenuClick(e, l)}
//             >
//               {l.text}
//             </Link>
//             {/* Render submenú solo si está activo y en pantallas grandes */}
//             {l.submenu && activeSubmenu === l.text && renderSubmenu(l.submenu)}
//           </div>
//         ))}
//       </div>

//       {/* Menú desplegable para pantallas pequeñas */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white absolute w-full left-0 top-16 shadow-md z-40 h-full">
//           <ul className="flex flex-col space-y-4 p-4">
//             {links.map((l) => (
//               <div key={l.id}>
//                 <Link
//                   className="text-xl text-[#1E4F64] font-bold"
//                   to={l.link}
//                   onClick={(e) => handleSubmenuClick(e, l)}
//                 >
//                   {l.text}
//                 </Link>
//                 {/* Render submenú si el elemento tiene submenu y está activo */}
//                 {l.submenu && activeSubmenu === l.text && (
//                   <ul className="pl-4 mt-2 space-y-2">
//                     {l.submenu.map((sub) => (
//                       <li key={sub.text}>
//                         <Link
//                           className="text-lg text-[#1E4F64] hover:text-gray-500"
//                           to={sub.link}
//                         >
//                           {sub.text}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
