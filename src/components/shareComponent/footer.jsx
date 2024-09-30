import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='footer bg-gray-800 text-white p-10  flex items-center justify-center'>
        <link/>
      <p>&copy; 2024 Job Board.MK All rights reserved.</p>
      <div className=' ml-12 '>
      <div className='flex items-end space-x-6'>
        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className=' text-black-800 hover:text-black h-8 w-8 transition duration-300 ease-in-out hover:scale-125'>
        <FaFacebook size={24} /></a>
     
        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-black-800 hover:text-black h-8 w-8 transition duration-300 ease-in-out hover:scale-125'><FaInstagram size={24} />
        </a>

        <a href='https://Twitter.com' target='_blank' rel='noopener noreferrer' className='text-black-800 hover:text-black h-8 w-8 transition duration-300 ease-in-out hover:scale-125'>< FaTwitter size={24} />
        </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
