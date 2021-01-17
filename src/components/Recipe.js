import React, { Component } from "react";
import Ingredients from "./Ingredients";
import { Link } from "react-router-dom";

class Recipe extends Component {
  render() {
    console.log(this.props.location.state.recipes);
    const { recipe } = this.props.location.state.recipes;
    return (
      <div className="container">
        <div className="active-recipe">
          <img className="active-recipe__img" src={recipe.image} alt=" " />
          <h3 className="active-recipe__title">{recipe.label}</h3>
          <p className="active-recipe__publisher">
            Publisher : <span> {recipe.source} </span>
          </p>
          <p className="active-recipe__website">
            Website :
            <span>
              <a href={recipe.url}>{recipe.url.substring(0, 30)}</a>
            </span>
          </p>
          <Ingredients
            title={"Requird Ingredients"}
            Ingredients={recipe.ingredientLines}
          />
          <Ingredients
            title={"Health Labels"}
            Ingredients={recipe.healthLabels}
          />
          <button className="active-recipe__button">
            <Link to="/">Go Home</Link>
          </button>
        </div>
      </div>
    );
  }
}
export default Recipe;
