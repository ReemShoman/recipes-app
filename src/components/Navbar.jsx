import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
   // TO READ REDUX STORE VALUE => useSelector
  const counterVal = useSelector(state => state.counter.counterVal)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"> 
            Recipes-App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/">Recipes List</Link>
              <Link className="nav-link" to="/add.recipe">Add Recipe</Link>
              <Link className="nav-link" to="/recipe.counter"> Recipe Counter : {counterVal}
              </Link>
              <Link className="nav-link" to="/setting">Settings</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
