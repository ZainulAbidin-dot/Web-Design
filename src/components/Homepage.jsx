import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className=" flex flex-col h-screen align-center justify-center my-16 text-black">
        <div className="p-8 mt-8 ">
          <h1 className=" top-8 text-white text-6xl font-extrabold text-center">
            HomePage
          </h1>
        </div>
        <Link
          to="/addboard"
          className="py-4 w-80 mx-auto text-center rounded m-8 bg-white text-xl text-black">
          Add a Board
        </Link>
        <Link
          to="/viewboard"
          className="py-4 w-80 mx-auto text-center rounded my-8 bg-white text-xl text-black">
          View Boards
        </Link>
      </div>
    </>
  );
};

export default Homepage;
