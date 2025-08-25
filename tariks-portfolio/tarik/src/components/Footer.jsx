"use client";

// components/Footer.js

import {
  IconBrandLinkedinFilled,
  IconBrandGithubFilled,
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconBrandXFilled,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-10 px-4 md:px-8 lg:px-16 relative">
      <div className="container mx-auto">
        {/* Back to Top */}
        <div className="flex justify-end mb-5">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center text-sm text-gray-300 hover:text-gray-200 transition-colors"
          >
            BACK TO TOP
            <div className="ml-2 bg-gray-800 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center md:justify-center gap-4">
          <a href="https://www.linkedin.com/in/md-tariqul-islam-05221a25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="cursor-pointer" target="_blank">
            {" "}
            <IconBrandLinkedinFilled className="text-slate-300 w-8 h-8 hover:text-slate-100" />
          </a>
          <a href="https://github.com/Tarik0011" target="_blank">
            <IconBrandGithubFilled className="text-slate-300 w-8 h-8  hover:text-slate-100" />
          </a>
          <a href="https://web.facebook.com/tarikul.islam.168639" target="_blank">
            <IconBrandFacebookFilled className="text-slate-300 w-8 h-8  hover:text-slate-100" />
          </a>
          <a href="" target="_blank">
            <IconBrandInstagramFilled className="text-slate-300 w-8 h-8  hidden hover:text-slate-100" />
          </a>
          <a href="" target="_blank">
            <IconBrandXFilled className="text-slate-300 hidden w-8 h-8  hover:text-slate-100" />
          </a>
        </div>
        <p className="text-center text-sm mt-4 tracking-wide text-gray-300 hover:text-gray-200">
          Developed By Tarik 
          <span className="text-xs">{" "}(v 1.1.1.0)</span>
        </p>
      </div>
    </footer>
  );
}
