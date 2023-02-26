import React from "react";

export default function capgamini() {
  return (
    <section className="mt-32 ml-20">
      <div className="grid max-w-[85rem]  mx-auto items-center gap-7 cursor-pointer relative group">
      <div className="absolute top-0 bottom-0 flex items-center gap-5 z-50">
       <div className="bg-[#0070AC] text-white space-y-40 p-6">
          <div>
            <p>Capgemini Research Institute</p>
            <p className="max-w-sm font-semibold text-[1.6rem] tracking-wide  mt-3">
              A world in balance: Why sustainability ambition is not translating
              into action
            </p>
          </div>
          <div>
            <img
              src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/capgemini-research-institute-white.svg"
              alt=""
            />
          </div>
        </div>
        {/* white div */}
        <div className="bg-white pt-6 pb-24 px-7 group">
          <p className="text-sm">Capgemini Research Institute</p>
          <p className="max-w-sm selection:bg-yellow-400 font-semibold text-[1.6rem] tracking-wide  mt-3">
            Total immersion: How immersive experiences and the metaverse benefit
            customer experience and operations
          </p>
        </div>
       </div>
       <div className="h-[24rem] group ml-auto overflow-hidden">
       <img
          src="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/12/Immersive-experiences-banner_2800x1800.jpg?w=800&quality=90"
          className="aspect-video object-cover h-full object-center duration-500 group-hover:-z-10 hover:transform hover:scale-125 "
          alt=""
        />
       </div>
      </div>
    </section>
  );
}
