import React, { useEffect, useState } from "react";
import { axiosInstance } from "../apis/config"; // ← صح كده
import { useNavigate } from "react-router-dom";

export default function AddRecipe() {
  const navigate = useNavigate();

  const [recipeForm, setRecipeForm] = useState({
    recipeName: "",
    recipeDescription: "",
  });

  const [recipeFormErrors, setRecipeFormErrors] = useState({
    recipeName: null,
    recipeDescription: null,
  });

  useEffect(() => {
    console.log(recipeForm);
  }, [recipeForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRecipeForm({
      ...recipeForm,
      [name]: value,
    });

    if (name === "recipeName") {
      setRecipeFormErrors({
        ...recipeFormErrors,
        recipeName:
          value.length === 0
            ? "Required"
            : value.length < 3
            ? "Min length is 3"
            : null,
      });
    }

    if (name === "recipeDescription") {
      setRecipeFormErrors({
        ...recipeFormErrors,
        recipeDescription:
          value.length === 0
            ? "Required"
            : value.length < 10
            ? "Min length is 10"
            : value.length > 200
            ? "Max length is 200"
            : null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance
      .post("/users", {
        name: recipeForm.recipeName,
        job: recipeForm.recipeDescription,
      })
      .then((res) => {
        console.log("Success:", res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("Error:", err);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <h3>Add Recipe:</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="recipeName" className="form-label">
            Recipe name
          </label>
          <input
            type="text"
            className={`form-control ${
              recipeFormErrors.recipeName ? "border-danger" : ""
            }`}
            id="recipeName"
            name="recipeName"
            onChange={handleChange}
            value={recipeForm.recipeName}
          />
          {recipeFormErrors.recipeName && (
            <div className="form-text text-danger">
              {recipeFormErrors.recipeName}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="recipeDescription" className="form-label">
            Recipe description
          </label>
          <textarea
            className="form-control"
            id="recipeDescription"
            name="recipeDescription"
            rows={5}
            onChange={handleChange}
            value={recipeForm.recipeDescription}
          ></textarea>
          {recipeFormErrors.recipeDescription && (
            <div className="form-text text-danger">
              {recipeFormErrors.recipeDescription}
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
