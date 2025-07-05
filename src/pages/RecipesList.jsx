import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard';
import { axiosInstance } from "../apis/config";

const RecipesList = () => {
  const [recipes, setRecipes]= useState([])
  const[isLoading,setisLoading]=useState(true)
  
 useEffect(() => {
    axiosInstance
      .get("/recipes", {
        params: {
          limit: 10,
        },
      })
      .then((res) => setRecipes(res.data.recipes))
      .catch((err) => console.log(err))
      .finally(() => setisLoading(false));
  }, []);
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
        {isLoading && <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>}
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