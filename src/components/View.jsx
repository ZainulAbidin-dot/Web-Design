import React from "react";

const View = (props) => {
  console.log(props);

  return (
    <div className="my-12 py-12">
      <h3 className="text-2xl">{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default View;
