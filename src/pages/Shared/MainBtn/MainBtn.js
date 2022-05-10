import React from "react";

const MainBtn = ({ children }) => {
  return (
    <button className="btn text-white border-0 bg-gradient-to-r from-secondary to-primary">
      {children}
    </button>
  );
};

export default MainBtn;
