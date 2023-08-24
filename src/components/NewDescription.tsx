import React from "react";
import { useOutlet, useOutletContext } from "react-router-dom";

const NewDescription = () => {
  // pour route child accept context : useOutletContext()
  const [currentUser, user2]: any = useOutletContext();
  return (
    <div>
      <h1>welcome {`user 2 :${currentUser}` + " " + ` + ${user2}`}</h1>
      NewDescription
    </div>
  );
};

export default NewDescription;
