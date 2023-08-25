import React from "react";
import { StickyNavbar } from "./NavBar";

const AboutScreen = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <StickyNavbar />
        {/* Main Content */}
        <main className="flex-grow container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to My store!</h1>
          <p className="text-gray-600">This is where your main content goes.</p>
        </main>

        {/* Footer */}
        <footer className="bg-gray-200 py-4">
          <div className="container mx-auto text-center">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutScreen;
