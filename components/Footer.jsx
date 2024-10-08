import React from "react";

const Footer = () => {
  return (
    <>
      <section className="bg-[#ced3ca] py-5 lg:py-16">
        <div className="w-10/12 lg:w-4/12 mx-auto">
          <h1 className="italic text-xl lg:text-3xl font-serif my-5 text-center">
            Get the inside scoop
          </h1>
          <p className="text-center text-sm lg:text-base">
            Sign up for new product drops, behind-the-scenes content, and
            monthly "5 Things I'm Digging" emails
          </p>
          <form action="#" className="mb-5">
            <input
              type="text"
              className="p-3 mt-10 border border-black focus:outline-none w-full"
              placeholder="Enter your email"
            />
            <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-2 mt-2 text-white">
              See what we're doing
            </button>
          </form>
        </div>
      </section>
      <footer className="w-11/12 lg:w-10/12 max-w-7xl mx-auto flex flex-wrap items-center justify-between py-10 lg:py-16">
        <div className="w-6/12 lg:w-3/12">
          <p>Customer Service</p>
          <button className="block mt-2">Help/FAQ</button>
          <button className="block mt-2">Returns & Exchanges</button>
          <button className="block mt-2">Sizing</button>
          <button className="block mt-2">Gift Cards</button>
          <button className="block mt-2">Contact Us</button>
        </div>
        <div className="w-6/12 lg:w-3/12">
          <p>Customer Service</p>
          <button className="block mt-2">Help/FAQ</button>
          <button className="block mt-2">Returns & Exchanges</button>
          <button className="block mt-2">Sizing</button>
          <button className="block mt-2">Gift Cards</button>
          <button className="block mt-2">Contact Us</button>
        </div>
        <div className="w-full lg:w-6/12 mt-10 lg:mt-1">
          <div className="flex justify-end items-center gap-5">
            <div className="lg:w-[250px]">
              <span className="block text-center lg:text-right">
                © LWS Shop Center 2024
              </span>
              <p className="text-center lg:text-right mt-2">
                All images and content may not be used without permission
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
