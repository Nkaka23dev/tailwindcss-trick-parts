import Link from "next/link";
import React from "react";

export default function video() {
  return (
    <>
      <nav className="bg-[#072140] py-4">
        <div className="max-w-[86rem] mx-auto flex items-center justify-between">
          <div className="text-white flex gap-4 items-center">
            <svg
              width="33"
              height="33"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="m14.5 18.717-2.5 2.88-2.5-2.88h5zM8.5 13v3h-3v-3h3zm5 0v3h-3v-3h3zm5 0v3h-3v-3h3zm-10-5v3h-3V8h3zm5 0v3h-3V8h3zm5 0v3h-3V8h3zm-10-5v3h-3V3h3zm5 0v3h-3V3h3zm5 0v3h-3V3h3z"
                fill="currentColor"
                fill-rule="nonzero"
              ></path>
            </svg>
            <svg
              width="80"
              height="42"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 73 38"
            >
              <path
                d="M28 0v31h8V0h37v38h-7V7h-8v31h-7V7h-8v31H21V7h-7v31H7V7H0V0h28z"
                fill="currentColor"
              ></path>
            </svg>
            <div>
              <p className="max-w-[6rem] text-xs">
                technical university of munich
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-center text-sm text-white font-semibold">
            {[
              { title: "NEWS AND EVENTS", link: "news" },
              { title: "STUDIES", link: "studies" },
              { title: "LIFELONG LEARNING", link: "lifelong" },
              { title: "RESEARCH", link: "research" },
              { title: "INNOVATION", link: "innovation" },
              { title: "COMMUNITY", link: "community" },
              { title: "ABOUT TUM", link: "about" },
            ].map((e, i) => {
              return (
                <Link key={i} href="#">
                  {e.title}
                </Link>
              );
            })}
          </div>
          <div className="text-white flex items-center font-bold">
            <p className="pr-4">D</p>
            <p className="border-l-2 border-white pl-2">E</p>
            <svg
              className="ml-6"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </nav>
      {/* // hero section is starting here */}
      <section className="relative py-16 pb-[28.5rem] overflow-hidden">
        <video
          muted
          loop
          playsInline
          autoPlay
          className="absolute inset-0 -z-10 w-full"
        >
          <source src="https://www.tum.de/fileadmin/w00bfo/www/Startseite/tum_startseite_header_010922.mp4" />
        </video>
        <div className="absolute z-20 bg-black inset-0 opacity-60 w-full"></div>
        <div className="max-w-7xl mx-auto text-white z-50 relative">
          <div>
            <h1 className="text-5xl font-bold max-w-2xl">
              TUM. The Entrepreneurial University
            </h1>
            <p className="text-xl font-semibold">
              Innovation through talent, excellence and responsibility
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
