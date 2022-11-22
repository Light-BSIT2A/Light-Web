/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {NavLink} from 'react-router-dom'

const navigation = [
  { name: 'Dashboard', href: '/'},
  { name: 'Games', href: '/games'},
  { name: 'Team', href: '/team'},
]

export default function Header(props) {
  return (
    <>
      <Disclosure as="nav" className="bg-pink">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-12 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-peach hover:bg-light-pink hover:text-light-peach focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src={require("./ref/light banner.png")}
                      alt="Peachy Core"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src={require("./ref/light banner.png")}
                      alt="Peachy Core"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({isActive})=>{
                              return 'no-underline px-3 py-2 rounded-md text-sm font-medium ' +
                              (isActive ?
                                'bg-light-pink text-white'
                                :
                                'text-light-peach hover:bg-light-pink hover:text-white')
                          }}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({isActive})=>{
                        return 'no-underline bg-pink text-peach ' +
                        (isActive ?
                          'px-3 text-white hover:bg-light-pink hover:text-light-peach'
                          :
                          'block px-3 py-2 rounded-md text-base font-medium')
                    }}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="bg-blue">
        <div className='max-w-7xl mx-auto bg-light-peach min-h-screen px-2 py-2'>
          {props.children}
        </div>
      </div>
    </>
  )
}
