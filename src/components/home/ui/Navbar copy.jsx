import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import AnimationWraper from '../../animation/AnimationWraper'
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Pricing', href: '#', current: false },
  { name: 'Twitter', href: '#', current: false },
  { name: 'Telegram', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" style={{ backgroundColor: "#0f172a" }}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl w-full px-5 md:px-10 lg:px-28">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-start">
                <h1 className=" logoClass text-white font-semibold text-2xl cursor-pointer">
                  REO
                </h1>
              </div>
              <div className=" inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className=" relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden sm:flex sm:ml-6">
                <div className="flex space-x-4 ">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? " text-white border-b-2 "
                          : "text-gray-300 hover:text-white",
                        "px-3 py-2 mt-1 text-sm font-medium  hover:border-b-2 border-[#d55399]"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              {/* <div className="box">
                <div className="box-inner">
                  <button className=" ">DAPP</button>
                </div>
              </div> */}
              {/* <div className=" animated-button1 ">DAPP</div> */}
              <div className="animated-button1">
                <div className="animated-bg"></div>
                <div className="animated-content ">DAPP</div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <AnimationWraper transition={{ delay: 0.2, duration: 1 }}>
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-white border-b-2 "
                        : "text-gray-300 hover:text-white",
                      "block px-3 py-2 text-base font-medium border-[#d55399]"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </AnimationWraper>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
