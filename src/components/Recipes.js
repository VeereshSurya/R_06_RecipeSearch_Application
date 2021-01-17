import React from "react";
import { Link } from "react-router-dom";

function Recipe(props) {
  return (
    <div className="container">
      <div className="row">
        {props.recipes.map((ele, index) => {
          return (
            <div
              key={index}
              className="col-md-4"
              style={{ marginBottom: "2rem" }}
            >
              <div className="recipes__box">
                <img
                  className="recipe__box-img"
                  src={ele.recipe.image}
                  alt=" "
                />
                <div className="recipe__text">
                  <h5 className="recipes__title">
                    {ele.recipe.label.length < 20
                      ? `${ele.recipe.label}`
                      : `${ele.recipe.label.substring(0, 28)}...`}
                  </h5>
                  <p className="recipes__subtitle">
                    Publisher : <span> {ele.recipe.source} </span>{" "}
                  </p>
                </div>
                <button className="recipe_buttons">
                  <Link
                    to={{
                      pathname: `/recipe/${ele.recipe.label}`,
                      state: { recipes: props.recipes[index] },
                    }}
                  >
                    View More
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recipe;
