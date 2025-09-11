// src/components/ContactUs.jsx
import React from 'react';
import { PhoneIcon, EmailIcon, TwitterIcon, InstagramIcon, SocialIcon } from '../assets/ContactIcons';

const ContactUs = () => {
    return (
        <section className="py-16 px-4 sm:px-8 md:px-16 bg-gray-50">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold">Contact Us</h2>
                <p className="text-gray-600 mt-2">Any question or remarks? Just write us a message!</p>
            </div>
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
                {/* Left Side: Contact Info */}
                <div className="w-full md:w-1/3 bg-blue-700 flex flex-col justify-between text-white p-8 rounded-t-lg md:rounded-l-lg md:rounded-t-none">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                        <p className="mb-8">Say something to start a live chat!</p>
                    </div>
                    <div className="space-y-6">
                        <p className="flex items-center"><PhoneIcon className="w-6 h-6 mr-3" /> 08120694955</p>
                        <p className="flex items-center"><EmailIcon className="w-6 h-6 mr-3" /> anamelechiemmanuel2@gmail.com</p>
                    </div>
                    <div className="flex space-x-4 mt-12">
                        <SocialIcon><TwitterIcon className="w-5 h-5" /></SocialIcon>
                        <SocialIcon><InstagramIcon className="w-5 h-5" /></SocialIcon>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-2/3 p-8">
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-gray-700">First Name</label>
                                <input type="text" className="w-full mt-2 p-2 border-b border-b-gray-300 outline-none" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Last Name</label>
                                <input type="text" className="w-full mt-2 p-2 border-b border-b-gray-300 outline-none" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Email</label>
                                <input type="email" className="w-full mt-2 p-2 border-b border-b-gray-300 outline-none" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Phone Number</label>
                                <input type="tel" className="w-full mt-2 p-2 border-b border-b-gray-300 outline-none" />
                            </div>
                        </div>
                        <div className="mb-6">
                            <h4 className="text-gray-700 font-semibold">Select Subject?</h4>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <label className="flex items-center"><input type="radio" name="subject" className="mr-2" /> General Inquiry</label>
                                <label className="flex items-center"><input type="radio" name="subject" className="mr-2" /> General Inquiry</label>
                                <label className="flex items-center"><input type="radio" name="subject" className="mr-2" /> General Inquiry</label>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700">Message</label>
                            <textarea placeholder="Write your message.." className="w-full mt-2 p-2 border-b border-b-gray-300 outline-none rounded-md h-28"></textarea>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="bg-[#011C2A] text-white font-bold py-3 px-6 rounded-md hover:bg-blue-900">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;