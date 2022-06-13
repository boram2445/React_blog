import './category.css';

function Category({category}){
  return(
    <dl className="category">
      <dt className="a11y-hidden">Category</dt>
      {category.map((value)=>{
        return(<dd>{value}</dd>);
      })}
    </dl>
  );
}

export default Category;