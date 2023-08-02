import React from 'react'
function Footer() {
  const footerNavs = [
    {
      href: 'javascript:void()',
      name: 'About'
    },
    {
      href: 'javascript:void()',
      name: 'Blog'
    },
    {
      href: 'javascript:void()',
      name: ''
    },
    {
      href: 'javascript:void()',
      name: 'Team'
    },
    {
      href: 'javascript:void()',
      name: 'Careers'
    },

    {
      href: 'javascript:void()',
      name: 'Suuport'
    }
  ]
  return (
    <footer className="w-full px-4 py-5 mx-auto text-gray-500 bg-white md:px-8">
      <ul className="mt-8 space-y-5 items-left justify-left sm:flex sm:space-x-4 sm:space-y-0">
        {
          footerNavs.map((item, idx) => (
            <li className=" hover:text-gray-800">
              <a key={idx} href={item.href}>
                {item.name}
              </a>
            </li>
          ))
        }
      </ul>
    </footer>
  )
}

export default Footer