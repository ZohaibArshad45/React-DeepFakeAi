import React from 'react'


const FooterLinks = ({title, links}) => {
    const linkList = links.map((item, index) => {
        return (
          <a
            key={index}
            href={item.link}
            className="text-sm text-gray-200-grey hover:text-[#7b2dbf] hover:underline"
          >
            {item.title}
          </a>
        );
    })
  return (
    <div className='space-y-5'>
        <div className='text-lg font-bold whitespace-nowrap '>
            {title}
        </div>
        <div className='flex flex-col gap-4'>
            {linkList}
        </div>
    </div>
  )
}

export default FooterLinks