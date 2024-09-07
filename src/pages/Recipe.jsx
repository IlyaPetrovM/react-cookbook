import { useNavigate, useParams } from "react-router-dom"
import { getMealById } from "../api"
import { useEffect, useState } from "react"
import Preloader from "../components/Preloader"

const Recipe = () => {
  const { id } = useParams()
  const [ recipe, setRecipe ] = useState({})
  const navigate = useNavigate();

  useEffect(()=>{
    getMealById(id).then(data => setRecipe(data.meals[0]))
  }, [id])

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className='recipe'>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          
          <h1>{recipe.strMeal}</h1>
          <h6>Category: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6>Area: {recipe.strArea} </h6> : null}
          


          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map(key => {
                if(key.includes('Ingredient') && recipe[key]){
                  return (
                    <tr key={key}>
                      <td>{ recipe[key] }</td>
                      <td>{
                        recipe[`strMeasure${key.slice(13)}`]
                      }</td>
                    </tr>
                  )
                }
                return null;
              })}
            </tbody>
          </table>

          <p>{recipe.strInstructions}</p>

          {recipe.strYoutube ? (

            <div className='row'>
              <h5>Video Instructions</h5>
              <iframe
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                allowFullScreen
                title={recipe.strMeal}
              />
            </div>
          ) : null}
        </div>
      )}
      <button
        className='btn'
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </>
  );
}
export {Recipe}