import React from "react";

export default function bgImage() {
  return (
    <section className="my-32 py-32 relative -z-10"  style={{
      backgroundImage:`url('https://kitpro.site/baketale/wp-content/uploads/sites/133/2022/12/toast-bread-2021-11-02-15-46-52-utc-copy.jpg')`,
      // backgroundPosition:'center',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'center'
    }}>
      <div className="absolute inset-0 bg-black opacity-20 -z-10"></div>
      <div className="z-30">
        <div className="space-y-4 grid">
          <h4 className="text-5xl font-bold text-white text-center">
            One Bread, Multiple Taste
          </h4>
          <p className="text-white text-center max-w-2xl text-lg mx-auto">
            Praesent interdum porttitor lacinia. Proin quis pulvinar orci.
            Quisque lacinia nunc at orci dictum, nec dictum orci suscipit. Duis
            fermentum nunc bibendum, finibus turpis a, rhoncus eros. Curabitur
            ut eleifend lorem.
          </p>
          <div className="flex gap-5 items-center mx-auto">
            <button className="py-3 font-semibold px-6 bg-white text-gray-800 rounded-full">
              Get our Jam
            </button>
            <div className="relative flex items-center ">
            <button className="bg-[#CE8356] relative z-50 transition duration-500 group hover:bg-white p-6 rounded-full">
              <svg
                className="stroke-white duration-500 group-hover:fill-[#CE8356] fill-white group-hover:stroke-[#CE8356] "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill=""
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </button>
           <div className="-p-2 duration-500 animate-ping overflow-hidden rounded-full absolute inset-0 border-8 border-white">
           <div className="-p-2 duration-500 overflow-hidden animate-ping rounded-full absolute inset-0 border-8 border-white">
           </div>
           </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
