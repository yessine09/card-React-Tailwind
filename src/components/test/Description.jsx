import React from "react";
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <div>
      <b> Route imbrique : template partagé</b>
      <br />
      <Link
        className="underline decoration-sky-600 md:decoration-blue-400 text-rose-600"
        to="home"
      >
        home
      </Link>
      <br />
      <a
        className="underline decoration-sky-600 md:decoration-blue-400 text-rose-600"
        href="about"
        reloadDocument={true}
      >
        about
      </a>
      <br />
      <Link
        className="underline decoration-sky-600 md:decoration-blue-400 text-rose-600"
        to="/"
      >
        Home Page
      </Link>
      <br />
      <Link
        className="underline decoration-sky-600 md:decoration-blue-400 text-rose-600"
        to="about/childabout"
        // replace bch k tarja3 b flesh lteli bch yarj3 url awel path eli heya /
        replace={true}
      >
        about bch traj3 path parent
      </Link>
      <br />
      <Link
        className="underline decoration-sky-600 md:decoration-blue-400 text-rose-600"
        to="contact"
        state={{ numero: "01" }}
      >
        bch tchouf state
      </Link>
    </div>
  );
};

export default Description;
