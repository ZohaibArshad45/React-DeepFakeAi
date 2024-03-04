
// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-24">
//       <div className="container mx-auto px-10">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {/* First Row */}
//           <div className="md:col-span-1 text-center">
//             <h2 className=" logo2Class text-4xl font-bold">REO</h2>
//           </div>

//           {/* Second Row */}
//           <div className="md:col-span-1">
//             <p className="font-semibold text-lg">Resource</p>
//             <ul className="list-disc ml-4">
//               <li>Blog</li>
//               <li>Community</li>
//               <li>Contest</li>
//             </ul>
//           </div>

//          {/* Third Row */}
//          <div className="md:col-span-1">
//             <p className="font-semibold text-lg">Socials</p>
//             <ul className="list-disc ml-4">
//               <li>Telegram</li>
//               <li>Twitter</li>
//               <li>Discord</li>
//             </ul>
//           </div>

//           {/* Fourth Row */}
//           <div className="md:col-span-1">
//             <p className="font-semibold text-lg">Contact Info</p>
//             <ul className=" items
//             -center justify-between leading-loose
//             ">
//                 <a href="#" className="pr-
//                 6 text-white hover:text-blue-500">
//                     📧 Email
//                 </a>
//               <br />
//                 <a href="#" className="pr-
//                 6 text-white hover:text-blue-500">
//                      👨‍💻 +923402150300
//                 </a>
//                 <p>Dhaka, Bangladesh</p>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import FooterLinks from "../footer/footerLinks";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaRegCopyright,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { IoMap } from "react-icons/io5";
const footerLinks = [
  {
    title: "Company",
    links: [
      {
        title: "About Us",
        link: "#",
      },
      {
        title: "Careers",
        link: "#",
      },
      {
        title: "Blog",
        link: "#",
      },
    ],
  },
];
const Footer = () => {
  const socialLinks = [
    {
      link: "#",
      icon: <FaFacebookF />,
    },
    {
      link: "#",
      icon: <FaXTwitter />,
    },
    {
      link: "#",
      icon: <FaInstagram />,
    },
  ];

  const socialLinksList = socialLinks.map((item, index) => {
    return (
      <div
        key={index}
        className="p-2 rounded-full bg-[#7b2dbf] text-white hover:opacity-80 cursor-pointer"
      >
        {item.icon}
      </div>
    );
  });

  return (
    <footer className="px-5 md:px-10 lg:px-28 py-10 w-full">
      <div className="max-w-7xl mx-auto ">
        <div className="grid md:grid-cols-9 w-full gap-5 lg:gap-10">
          <div className="col-span-3 flex flex-col items-start space-y-5 w-full">
            <h1 className=" logoClass text-white font-semibold text-2xl cursor-pointer">
              REO
            </h1>
            <div className="text-sm text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              eligendi molestiae consectetur numquam. Quas perspiciatis adipisci
              quod blanditiis earum perferendis ratione quaerat, quidem vitae
              nesciunt quam vero quo aperiam esse.
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-2">
            <div className="">
              <FooterLinks
                title={footerLinks[0].title}
                links={footerLinks[0].links}
              />
            </div>
            <div className="">
              <FooterLinks
                title={'Legal'}
                links={footerLinks[0].links}
              />
            </div>
          </div>
          <div className="space-y-5 col-span-2">
            <div className="text-lg font-bold whitespace-nowrap">Follow Us</div>
            <div className="flex gap-2 items-center text-white hover:text-[#7b2dbf] cursor-pointer">
              <div className="">
                <IoMail />
              </div>
              <div className=" text-sm">contact@company.com</div>
            </div>
            <div className="flex gap-2 items-center text-white hover:text-[#7b2dbf] cursor-pointer">
              <div className=" ">
                <MdLocalPhone />
              </div>
              <div className=" text-sm">(425) 956 - 2412</div>
            </div>
            <div className="flex gap-2 items-center text-white hover:text-[#7b2dbf] cursor-pointer">
              <div className="">
                <IoMap />
              </div>
              <div className="  text-sm">St 20, Block-W</div>
            </div>
          </div>
        </div>
        <div>
          <hr className="my-5 border" />
        </div>
        <div className="flex justify-between text-xs text-gray-200">
          <div className="flex gap-1 items-center">
            Copyright
            <FaRegCopyright />
            {new Date().getFullYear()}
          </div>
          <div className="flex items-center gap-4 ">{socialLinksList}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;