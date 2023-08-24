import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      route imbrique: About
      <Outlet />
    </div>
  );
};

export default About;
