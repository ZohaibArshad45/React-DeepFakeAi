import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import AnimationWraper from "../../animation/AnimationWraper";
import { motion } from "framer-motion";
import { useState } from "react";
import { Example } from "../mobileNav/Example";
const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Pricing", href: "#", current: false },
  { name: "Twitter", href: "#", current: false },
  { name: "Telegram", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = navigation.map((item) => (
    <a
      key={item.name}
      href={item.href}
      className={classNames(
        item.current
          ? "text-white border-b-2 "
          : "text-gray-300 hover:text-white",
        "px-3 py-2 mt-1 text-sm font-medium  hover:border-b-2 border-[#d55399]"
      )}
      // aria-current={item.current ? "page" : undefined}
    >
      {item.name}
    </a>
  ));

  return (
    <div>
      <div className="mx-auto max-w-7xl w-full px-5 md:px-10 lg:px-28">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-start">
            <h1 className="z-50 logoClass text-white font-semibold text-2xl cursor-pointer">
              REO
            </h1>
          </div>

          <div className="hidden md:flex sm:ml-6">
            <div className="flex space-x-4 ">{navLinks}</div>
          </div>
          <div className="animated-button1 mr-12 md:mr-0">
            <div className="animated-bg"></div>
            <div className="animated-content ">DAPP</div>
          </div>

          <div className="md:hidden">
            <Example />
          </div>
          {/* <motion.div
            animate={open ? "open" : "closed"}
            variants={variants}
            className=""
          >
            <div
              onClick={() => setOpen(!open)}
              className="rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </div>
            <div className="z-50 bg-[#0F172A] w-full inset-0  flex flex-col space-y-1 px-2 pb-3 pt-2">
              {navLinks}
            </div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}
