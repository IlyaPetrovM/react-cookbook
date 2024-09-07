import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getFilteredCategory } from "../api";
import Preloader from "../components/Preloader";
import { MealsList } from "../components/MealsList";

function Category(){
  const [meals, setMeals] = useState([])
  const {name} = useParams();
  let navigate = useNavigate()

  useEffect(() => {
    getFilteredCategory(name).then(data => setMeals(data.meals))
  }, [name])

  return <>
      <button className="btn deep-purple" onClick={()=> navigate(-1)}>Go back</button>
    { !meals.length ? <Preloader /> : <MealsList meals={meals} /> }
  </>
}
export {Category};