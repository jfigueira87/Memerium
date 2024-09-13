//Navbar
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'



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
                                <a href="#">Inicio</a>
                                <MenuButton className="relative">
                                    <span>Galerias</span>
                                </MenuButton>
                                <a href="#">Sobre Nosotros</a>
                                <a href="#">Contacto</a>
                            </div>
                            <MenuItems
                                transition
                                className="absolute -translate-x-44 translate-y-6 right-0 z-10 w-50"
                            >
                                <MenuItem>
                                    <a href="#" className="text-white bg-secondary block px-4 py-3 text-center">
                                        memes de trabajo
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="text-primary bg-white block px-4 py-3 text-center">
                                        memes de programación
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="text-white bg-primary block px-4 py-3 text-center">
                                        memes de estudiante
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="md:hidden">
                <div className="flex z-[500]" >
                    <DisclosureButton>
                        <Menu as="div" className="absolute text-white text-2xl md:block bg-primary h-screen w-full z-50 overflow-hidden top-16">
                            <div className="space-y-10 px-20 py-20">

                                <div className="flex flex-col items-center text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                    <a href="#">Inicio</a>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                    <MenuButton className="relative">
                                        <span>Galerias</span>
                                    </MenuButton>
                                </div>

                                <div className="flex flex-col items-center text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                    </svg>
                                    <a href="#">Sobre Nosotros</a>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                    <a href="#">Contacto</a>
                                </div>
                            </div>

                        </Menu>


                    </DisclosureButton>

                </div>
            </DisclosurePanel>

        </Disclosure >
    )
}
