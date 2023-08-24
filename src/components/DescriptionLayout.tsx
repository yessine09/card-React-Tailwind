import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const DescriptionLayout = () => {
  const [user, setUser] = useState(["Yessine akaichi"]);
  const [user2, setUser2] = useState("test user");
  return (
    <div>
      {/* //context to send props from parent to child */}
      <Outlet context={[user2, user]} />
    </div>
  );
};

export default DescriptionLayout;
