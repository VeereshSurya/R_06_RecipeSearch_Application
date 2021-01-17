import React, { Component } from "react";
import Form from "./components/Form";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Recipe from "./components/Recipes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  getRecipe = async (e) => {
    const app_id = "38a1ee24";
    const app_key = "79f2afe92ec6a8e6525f4d31e527b172	";
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await axios.get(
      `https://api.edamam.com/search?q=${recipeName}&app_id=${app_id}&app_key=${app_key}`
    );
    this.setState({
      recipes: api_call.data.hits,
    });
    console.log(this.state.recipes);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <div>
          <Form getRecipe={this.getRecipe} />
        </div>
        <div>
          <Recipe recipes={this.state.recipes} />
        </div>
      </div>
    );
  }
}

export default App;
