import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function RecipeCard(props) {
    console.log(props)
    const {recipeItem , onDelete}=props;
    const navigate = useNavigate();

    const redirectToDetails = (recipeID, name) => {
    console.log("ID", recipeID);
    navigate(`/recipe.details/${recipeID}?name=${name}`);
  };
  return (
    <div className="card h-100">
      <img src={recipeItem.image} className="card-img-top" alt={recipeItem.name}/>
      <div className="card-body">
        <h5 className="card-title">{recipeItem.name}</h5>
        <p className="card-text">{recipeItem.instructions}.</p>
      </div>
     <div className="card-footer">
        <button
          onClick={() => redirectToDetails(recipeItem.id, recipeItem.name)}
        >
          View
        </button>
        <button className="mx-2" onClick={() => onDelete(recipeItem.id)}>
          Delete
        </button>
      </div>
    </div>

  )
}
