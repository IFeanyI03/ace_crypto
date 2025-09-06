import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-5 gap-8">
        {/* Reach Us */}
        <div className="col-span-1">
          <h4 className="font-bold mb-4">REACH US</h4>
          <p className="mb-2">📞 08120694955</p>
          <p>📧 anamelechiemmanuel2@gmail.com</p>
        </div>
        
        {/* Company */}
        <div className="col-span-1">
          <h4 className="font-bold mb-4">COMPANY</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Blogs</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="col-span-1">
          <h4 className="font-bold mb-4">LEGAL</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Terms & Services</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Terms of Use</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Refund Policy</a></li>
          </ul>
        </div>
        
        {/* Quick Links */}
        <div className="col-span-1">
          <h4 className="font-bold mb-4">QUICK LINKS</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Techblaz Keybox</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Downloads</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Forum</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-span-1">
          <h4 className="font-bold mb-4">JOIN OUR NEWSLETTER</h4>
          <form>
            <input type="email" placeholder="your email address" className="w-full p-2 rounded bg-gray-700 border border-gray-600 mb-2 text-white" />
            <button type="submit" className="w-full bg-primary p-2 rounded">Subscribe</button>
          </form>
          <p className="text-xs text-gray-400 mt-2">We will send you weekly updates for your better tool management.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;