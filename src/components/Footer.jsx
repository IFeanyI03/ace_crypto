import React from 'react';
import phone from '../assets/bxs_phone-call.svg'
import mail from '../assets/ic_sharp-email.svg'

const Footer = () => {
  return (
    <footer className="bg-[#011C2A] text-white py-12 px-4 sm:px-8 md:px-[121px] pt-8 md:pt-[169px]">
      <div className="border-t-[1px] border-[#FFFFFF] container pt-6 flex flex-wrap justify-between">
        {/* Reach Us */}
        <div className="w-full sm:w-1/2 md:w-fit mt-4 flex flex-col gap-4 mb-8 md:mb-0">
          <h4 className="font-bold ">REACH US</h4>
          <p className="flex gap-4 items-center"><img className="w-6 h-6 object-contain" src={phone} /> 08120694955</p>
          <p className='flex gap-4 items-center'><img className="w-6 h-6 object-contain" src={mail} /> anamelechiemmanuel2@gmail.com</p>
        </div>

        {/* Company */}
        <div className="w-full sm:w-1/2 md:w-fit mt-4 flex flex-col gap-4 mb-8 md:mb-0">
          <h4 className="font-bold">COMPANY</h4>
          <ul className='flex flex-col gap-4'>
            <li className=""><a href="#" className="hover:underline">About</a></li>
            <li className=""><a href="#" className="hover:underline">Contact</a></li>
            <li className=""><a href="#" className="hover:underline">Blogs</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="w-full sm:w-1/2 md:w-fit mt-4 flex flex-col gap-4 mb-8 md:mb-0">
          <h4 className="font-bold ">LEGAL</h4>
          <ul className='flex flex-col gap-4'>
            <li className=""><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li className=""><a href="#" className="hover:underline">Terms & Services</a></li>
            <li className=""><a href="#" className="hover:underline">Terms of Use</a></li>
            <li className=""><a href="#" className="hover:underline">Refund Policy</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="w-full sm:w-1/2 md:w-fit mt-4 flex flex-col gap-4 mb-8 md:mb-0">
          <h4 className="font-bold ">QUICK LINKS</h4>
          <ul className='flex flex-col gap-4'>
            <li className=""><a href="#" className="hover:underline">Techblaz Keybox</a></li>
            <li className=""><a href="#" className="hover:underline">Downloads</a></li>
            <li className=""><a href="#" className="hover:underline">Forum</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-fit bg-[#011621] flex gap-4 flex-col p-4 rounded-[10px] mt-8 md:mt-0">
          <h4 className="font-bold">Join Our Newsletter</h4>
          <form className='flex w-full sm:w-fit bg-[#02273A]'>
            <input type="email" placeholder="your email address" className="w-full sm:w-[172px] p-2 bg-gray-700 text-white" />
            <button type="submit" className="w-[105px] bg-primary h-full bg-[#000E15] p-2">Subscribe</button>
          </form>
          <p className="text-xs w-full sm:w-[277px] text-gray-400">* We will send you weekly updates for your better tool management.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;