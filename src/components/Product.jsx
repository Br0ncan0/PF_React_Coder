import placeholder from '../assets/images/placeholder.jpg';
import '../assets/styles/product.css';
import { Link } from 'react-router-dom';

export const Product = (props) => {
  const { name, image, precio, category, id } = props.product;
  
  return (
    <Link to={`/productos/${id}`} className="product">
      <figure>
        {
          image ? <img src={image} alt={ name } /> : <img src={placeholder} alt={name} />
        }

      </figure>
      <div className="data">
        <span className="category">{category}</span>
        <h3>{name}</h3>
        <span className="price">${precio}</span>
      </div>
    </Link>
  )
}