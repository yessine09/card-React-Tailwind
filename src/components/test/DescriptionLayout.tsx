import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const DescriptionLayout = () => {
  // how to use context to send props from parent to child : route imbriqué-template partage
  const [user, setUser] = useState(["Yessine akaichi"]);
  const [user2, setUser2] = useState("test user");
  return (
    <div>
      {/* //n7otou context eli bch nab3thouh f outlet , consomation saret f newDescription avec useContext.. */}
      <Outlet context={[user2, user]} />
    </div>
  );
};

export default DescriptionLayout;
