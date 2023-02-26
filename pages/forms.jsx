import React from "react";

export default function Forms() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2">
        <div className="col-start-2">
          <div className="space-y-5">
            <h4 className="text-5xl font-bold">Get In Touch</h4>
            <p className="max-w-lg tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <form action="#" className="py-6 max-w-lg">
            <div className="space-y-3">
              <label htmlFor="name" className="font-semibold text-sm">
                Name
              </label>
              <input
                className="w-full border-2 border-gray-200 rounded-xl focus:outline-none py-2 px-4"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="name" className="font-semibold text-sm">
                Email
              </label>
              <input
                className="w-full border-2 border-gray-200 rounded-xl focus:outline-none py-2 px-4"
                type="text"
                placeholder="Enter your Emai"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="name" className="font-semibold text-sm">
                Subject
              </label>
              <input
                className="w-full border-2 border-gray-200 rounded-xl focus:outline-none py-2 px-4"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="name" className="font-semibold text-sm">
                Message
              </label>
              <textarea
                className="w-full border-2 border-gray-200 rounded-xl focus:outline-none py-2 px-4"
                type="text"
                rows={6}
                color={6}
                placeholder="Messagee"
              ></textarea>
            </div>
            <button className="py-4 w-full font-semibold text-white rounded-full bg-[#CE8356] mt-4 hover:opacity-90">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
