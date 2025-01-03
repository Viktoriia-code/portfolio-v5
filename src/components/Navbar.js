"use client"

import React from "react";

const Navbar = () => {
  /*const nav_ind = 'nav-indicator mr-4 h-[1px] w-8 bg-gray-500 transition-all group-hover:w-12 group-hover:bg-slate-100 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none';
  const nav_text = 'nav-text text-sm font-medium uppercase tracking-widest group-hover:text-slate-100 group-focus-visible:text-slate-200';
  const active = 'text-slate-100';

  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }*/

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' }
  ]; 
  
  return (
    <div className="nav hidden lg:block">
      <ul className="w-max flex flex-col gap-3">
        {navItems.map((item) => (
            <li key={item.id}>
              <div
                className={`cursor-pointer group flex items-center `}
              >
                <span className={`nav-indicator  'bg-navText w-8' mr-4 h-[1px] transition-all group-hover:w-12 group-hover:bg-slate-100 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}></span>
                <span className={`nav-text text-gray-400 text-sm font-medium uppercase tracking-widest  group-hover:text-slate-100 group-focus-visible:text-slate-200`}>{item.label}</span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Navbar;