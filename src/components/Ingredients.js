import React from "react";

const Ingredients = (props) => {
  return (
    <div className="indredients">
      <h4 className="ingredients__title">{props.title}</h4>
      {props.Ingredients.map((item, index) => {
        return (
          <ul key={index}>
            <li className="item">{item}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Ingredients;
