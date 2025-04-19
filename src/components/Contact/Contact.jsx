import React from 'react';

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-10">

        {/* Google Map */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.373143920216!2d77.12574074408558!3d13.32704926577623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02e826fb691ef%3A0xe78608813c36f380!2sSiddaganga%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1725982925575!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900 rounded-lg p-8">
          <h2 className="text-3xl mb-6 text-red-500">Contact Us</h2>
          <form className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="bg-white text-black p-3 rounded" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-white text-black p-3 rounded" 
            />
            <textarea 
              placeholder="Message" 
              className="bg-white text-black p-3 rounded h-32"
            ></textarea>
            <button 
              type="submit" 
              className="bg-red-600 text-white py-3 px-4 rounded hover:bg-red-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
