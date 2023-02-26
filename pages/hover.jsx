import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="px-8">
      <div className="max-w-6xl mx-auto mt-20">
        {/* <h1 className='sticky top-3 shadow-xl shadow-white text-5xl font-bold text-gray-300 mb-10'>November 2021</h1>
        {[1,2,3,4,5].map((e,i) => {
            return (
            <div className='border-l-8 border-gray-200 pb-16 mt-3 ml-4 space-y-5 pl-10 relative '>
            <div className='w-6 h-6 bg-red-400 rounded-full absolute -left-[0.9rem] -bottom-3 '></div>
            <p className='text-sm font-bold text-gray-400'>13 DECEMBER 2023</p>
            <h1 className='text-3xl font-bold  text-gray-600'>EVENT 1</h1>
            <p className='text-xl text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci unde dolore reiciendis amet impedit. Ex cupiditate necessitatibus tenetur asperiores, ratione sit quisquam commodi, impedit dicta, iusto excepturi esse maiores aliquam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        </div>
            )
        })} */}
        {/* <div className='relative'>
            <p  className="text-3xl:after:text-lg text-green-500 font-bold hover:after:bg-red-500 hover:after:absolute hover:after:left-20 hover:after:top-16 cursor-pointer hover:after:content-['_Content_here'] hover:after:py-3 hover:after:px-10 hover:after:transition-all  hover:after:duration-700 hover:after:delay-200 hover:after:rounded-full hover:after:text-white" >This will work</p>
        </div> */}
        <div className="flex justify-between cursor-pointer mb-20">
          {["Home", "Contact", "About", "Services"].map((e, i) => {
            return (
              <Link
                className="text-3xl relative before:duration-300 before:delay-50 before:opacity-0 before:w-0 hover:before:opacity-100 hover:before:w-full before:block before:absolute before:top-10 before:bg-red-500 before:h-[0.4rem] "
                href="#"
              >
                {e}
              </Link>
            );
          })}
        </div>
        <button className="px-10 relative before:absolute before:text-white before:z-50  before:inset-0 before:rounded-full before:w-0 before:delay-150 before:duration-500  hover:before:w-full hover:before:block before:font-semibold hover:before:bg-red-700 before:py-4 py-4 bg-red-500 text-white font-semibold rounded-full">
          {" "}
          <span className="z-50 relative">Login with Us</span>{" "}
        </button>
      </div>
    </div>
  );
}
