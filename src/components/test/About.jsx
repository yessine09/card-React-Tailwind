import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>
        <div className="flex flex-col min-h-screen">
          {/* Navigation */}
          {/* <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
              <a href="#" className="text-white text-lg font-bold">
                My store{" "}
              </a>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav> */}
          {/* Main Content */}
          {/* <main className="flex-grow container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to My store!</h1>
            <p className="text-gray-600">
              This is where your main content goes.
            </p>
          </main> */}
          {/* Footer */}
          {/* <footer className="bg-gray-200 py-4">
            <div className="container mx-auto text-center">
              <p className="text-gray-600">
                &copy; {new Date().getFullYear()} Your Company. All rights
                reserved.
              </p>
            </div>
          </footer> */}
          About page test
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default About;
