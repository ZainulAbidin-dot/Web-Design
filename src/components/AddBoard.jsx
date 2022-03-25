import React from "react";
import { Link } from "react-router-dom";

const AddBoard = () => {
  return (
    <div className=" my-12 p-12 mx-auto">
      <div className="flex flex-col w-1/2 mx-auto rounded bg-white p-12 my-12">
        <label className=" py-2 bg-white rounded text-xl mt-4">Title</label>
        <input
          className="border-solid hover:border-dotted focus:outline-none border-2 rounded border-indigo-600 py-2 md-4"
          placeholder="Enter a Title..."
        />
        <label className=" py-2 bg-white rounded text-xl mt-4">
          Description
        </label>
        <textarea
          name="description"
          className="border-solid hover:border-dotted focus:outline-none border-2 rounded border-indigo-600 py-2 md-4"
          cols="30"
          rows="10">
          Enter Description...
        </textarea>
        <Link
          to="/createdboard"
          className="w-2/3 mx-auto text-center bg-indigo-600 hover:bg-indigo-400 ease-in-out duration-700 rounded px-3 py-2 mt-12 text-white">
          Add a Board
        </Link>
      </div>
    </div>
  );
};

export default AddBoard;
