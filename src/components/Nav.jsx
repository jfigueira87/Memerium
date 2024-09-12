//Navbar
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white text-primary font-mainFont  font-extrabold">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start text-xl">
            <div className="flex flex-shrink-0 -translate-x-12 font-extrabold">
                Memerium
            </div>

          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3 text-primary flex text-sm">
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
                className="absolute -translate-x-44 translate-y-10 right-0 z-10 w-50"
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

      <DisclosurePanel className="sm:hidden">

      </DisclosurePanel>
    </Disclosure>
  )
}
