import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { axiosInstance } from '../apis/config';

export default function RecipeDetails() {
  const [recipe, setRecipe] = useState();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    axiosInstance
      .get(`/recipes/${params.id}`)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <div className="container">
      <h2>Recipe Details</h2>

      <h3>{recipe?.name}</h3>
      <img src={recipe?.image} alt={recipe?.name} width="300" />
      
      <h4>Ingredients:</h4>
      <ul>
        {recipe?.ingredients?.map((ing, index) => (
          <li>{ing}</li>
        ))}
      </ul>
    </div>
  );
}

