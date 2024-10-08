import { Link } from "react-router-dom";


const CategoryItem = (props) => {
  const {  
    strCategory, 
    strCategoryThumb, 
    strCategoryDescription 
  } = props;
  
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 100)}...</p>
      </div>
      <div className='card-action'>
        <Link
          to={`/category/${strCategory}`}
          className='btn #4527a0 deep-purple darken-3'
        >
          Watch
        </Link>
      </div>
    </div>
  );
};
export { CategoryItem };
