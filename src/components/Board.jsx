import React from "react";
import { Link } from "react-router-dom";

let Links = [
  { title: "To Do", task: "This is a Board task" },
  { title: "To Do", task: "This is a Board task" },
  { title: "Doing", task: "This is a Board task" },
  { title: "Doing", task: "This is a Board task" },
  { title: "Done", task: "This is a Board task" },
];

const Board = () => {
  return (
    <div className="flex justify-around ">
      <div className="flex flex-col justify-between my-12 py-12">
        <div className="px-12 m-12 py-4 rounded bg-indigo-200 w-90">
          {Links.map((link) => {})}
          <h2 className="text-2xl">To Do</h2>
          <p className="mr-2 my-4 bg-white p-2 w-full">
            This is task A <ion-icon name="pencil-outline"></ion-icon>
          </p>
          <Link to="/addtask" className="bg-gray-200 p-2 w-full rounded">
            <ion-icon name="add-outline" color="white"></ion-icon> Add a card
          </Link>
        </div>

        <div className="px-12 m-12 py-4 rounded bg-indigo-200 w-90">
          <h2 className="text-2xl">Progress</h2>
          <p className="mr-2 my-4 bg-white p-2 w-full">
            This is task B <ion-icon name="pencil-outline"></ion-icon>
          </p>
          <Link to="/addtask" className="bg-gray-200 p-2 w-full rounded">
            <ion-icon name="add-outline" color="white"></ion-icon> Add a card
          </Link>{" "}
        </div>

        <div className="px-12 m-12 py-4 rounded bg-indigo-200 w-90">
          <h2 className="text-2xl">Code Review</h2>
          <p className="mr-2 my-4 bg-white p-2 w-full">
            This is task C <ion-icon name="pencil-outline"></ion-icon>
          </p>
          <Link to="/addtask" className="bg-gray-200 p-2 w-full rounded">
            <ion-icon name="add-outline" color="white"></ion-icon> Add a card
          </Link>{" "}
        </div>

        <div className="px-12 m-12 py-4 rounded bg-indigo-200 w-90">
          <h2 className="text-2xl">Done</h2>
          <p className="mr-2 my-4 bg-white p-2 w-full">
            This is task D <ion-icon name="pencil-outline"></ion-icon>
          </p>
          <Link to="/addtask" className="bg-gray-200 p-2 w-full rounded">
            <ion-icon name="add-outline" color="white"></ion-icon> Add a card
          </Link>{" "}
        </div>
      </div>
      <div className=" flex flex-col  mt-24 h-full rounded ">
        <button className="p-4 mt-16 bg-indigo-200">
          <ion-icon name="person-add-outline"></ion-icon> Invite
        </button>
        <button className="p-4 my-12 bg-indigo-200">
          <ion-icon name="time-outline"></ion-icon> Set a Time
        </button>
        <div className="flex bg-white justify-center items-center">
          <span className="ml-2">
            <ion-icon name="search-outline"></ion-icon>
          </span>
          <input
            className="px-4 py-2 focus:outline-none"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="flex bg-white my-12 justify-center items-center">
          <span className="ml-2">
            <ion-icon name="filter-outline"></ion-icon>
          </span>
          <input
            className="px-4 py-2 focus:outline-none"
            type="text"
            placeholder="Filter..."
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
