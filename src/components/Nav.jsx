//Navbar
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { PhotoIcon } from '@heroicons/react/20/solid';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { Bars3Icon, HomeIcon, UsersIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-white text-primary font-mainFont font-bold top-0 left-0 w-full sticky z-10">
            <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-primary  hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-10">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden z-30" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block z-10" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start text-xl">
                        <div className="flex flex-shrink-0 -translate-x-12 font-extrabold z-10">
                            Memerium
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0 ">

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3 lg:text-primary text-white flex text-sm md:ml-6 md:block md:bg-white ">
                            <div className="flex space-x-12">
                                <HashLink smooth to="/#home">Inicio</HashLink>
                                <MenuButton className="relative">
                                    <span>Galerias</span>
                                </MenuButton>
                                <HashLink smooth to="/#aboutUs">Sobre Nosotros</HashLink>
                                <HashLink smooth to="#contact">Contacto</HashLink>
                            </div>
                            <MenuItems
                                transition
                                className="absolute -translate-x-44 translate-y-6 right-0 z-10 w-50"
                            >

                                <Link to={`/gallerywork`}>
                                    <MenuItem>
                                        <a href="#" className="text-white bg-primary block px-4 py-3 text-center">
                                            memes de trabajo
                                        </a>
                                    </MenuItem>
                                </Link>

                                <Link to={`/galleryprogram`}>
                                    <MenuItem>
                                        <a href="#" className="text-primary bg-white block px-4 py-3 text-center ">
                                            memes de programación
                                        </a>
                                    </MenuItem>
                                </Link>

                                <Link to={`/gallerystudent`}>
                                    <MenuItem>
                                        <a href="#" className="text-white bg-secondary block px-4 py-3 text-center">
                                            memes de estudiante
                                        </a>
                                    </MenuItem>
                                </Link>


                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="md:hidden bg-primary text-white w-full h-screen place-content-evenly">
                <div className="flex flex-col items-center text-center space-y-16">
                    <DisclosureButton as="a" href="/#home">
                        <HomeIcon className="size-14 group-data-[open]:block" ></HomeIcon>Inicio
                    </DisclosureButton>
                    <DisclosureButton as="a" href="/#contact">
                        <PhotoIcon className="size-14 group-data-[open]:block" ></PhotoIcon>Galerias
                    </DisclosureButton>
                    <DisclosureButton as="a" href="#aboutUs" className="flex flex-col items-center">
                        <UsersIcon className='size-14 group-data-[open]:block'></UsersIcon>Sobre Nosotros
                    </DisclosureButton>
                    <DisclosureButton as="a" href="#contact">
                        <EnvelopeIcon className='size-14 group-data-[open]:block'></EnvelopeIcon>Contacto
                    </DisclosureButton>
                </div>
            </DisclosurePanel>

        </Disclosure >
    )
}

