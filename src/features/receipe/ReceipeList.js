import React from "react";
import { useSelector } from "react-redux";

export const ReceipeList = () => {
  const receipes = useSelector((state) => state.receipes);

  const renderedReceipes = receipes.map((receipe) => (
    <menu key={receipe.id}>
      <div>
        {receipe.id}. {receipe.title}
      </div>
    </menu>
  ));

  return (
    <>
      <div>{renderedReceipes}</div>
    </>
  );
};

export default ReceipeList;
