import React from 'react'

export default function RecipeCard(props) {
    console.log(props)
    const {recipeItem , onDelete}=props;
  return (
    <div className="card h-100">
      <img src={recipeItem.image} className="card-img-top" alt={recipeItem.name}/>
      <div className="card-body">
        <h5 className="card-title">{recipeItem.name}</h5>
        <p className="card-text">{recipeItem.instructions}.</p>
      </div>
      <div className="card-footer">
     <button onClick={() => onDelete(recipeItem.id)}>Delete</button>

      </div>
    </div>

  )
}
