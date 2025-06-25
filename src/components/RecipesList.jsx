import React, { useState } from 'react'
import { recipesData } from '../utils/data';
import RecipeCard from './RecipeCard';

const RecipesList = () => {
  const [recipes, setRecipes]= useState(recipesData)
  
  const handleDeleteRecipe = (id) => {
    console.log(id)
    // implement delete functionality
    const newRecipesArr = recipes.filter(recipe => recipe.id !== id);
    setRecipes(newRecipesArr);
  }

  return (
    <>
        <div className='px-3'>
        <h2  >RecipesList</h2>
        <hr/>
        <div className="row row-cols-1 row-cols-md-3 g-4 px-3">
          {recipes.map((recipe)=>{
          return( <div className="col" key={recipe.id}>
            <RecipeCard recipeItem={recipe} onDelete={(id) => handleDeleteRecipe(id)}/>
            </div>
            );

            })}
        </div>
      </div>
     </>
  );
};
export default RecipesList;