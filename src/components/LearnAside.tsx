import React from "react";
import { NavLink } from "react-router-dom";

const LearnAside = () => {
  return (
    <aside className="fixed top-0 left-0 z-40 mt-7 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full pb-4 overflow-y-auto">
        <nav className="my-7">
          <ul className="flex flex-col">
            <li className="hover:text-[#149eca] duration-200">
              <NavLink to="/learn" end>
                Quick Start
              </NavLink>
            </li>
            <li className="hover:text-[#149eca] duration-200">
              <NavLink to="/learn/thinking-in-react">Thinking in React</NavLink>
            </li>
            <li className="hover:text-[#149eca] duration-200">
              <NavLink to="/learn/installation">Installation</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default LearnAside;
