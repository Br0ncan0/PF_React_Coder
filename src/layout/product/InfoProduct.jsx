import { useParams } from "react-router-dom";
import '../../assets/styles/InfoProduct.css';
import { useEffect, useState } from "react";

const InfoProduct = () => {

  const [data, setData] = useState({});

  const [num, setNum] = useState(0);

  const [error, setError] = useState(false);

  const { product_id } = useParams();
  //console.log(product_id, 'ID')
  useEffect(() => {
    fetch('https://65bee8a7dcfcce42a6f2fc77.mockapi.io/api/keyboard/keyboards/' + product_id)
      .then(response => response.json())
      .then(res_json => {
        setData(res_json);
      })
  }, [data])

  const sumar = () => {
    if (data.stock > num) {
      setNum(num + 100);
      if (num + 100 > data.stock) {
        setNum(data.stock);
      }
      setError(false);
    }else {
      setError(true);
    }
  }
  const restar = () => {
    if (num < 0) {
      setError(true);
    }else {
      setNum(num - 100);
      if (num - 100 < 0) {
        setNum(0);
      }
      setError(false);
    }
  }
  return (
    <main>
      <div className="principal">
        <div className="imagen_producto">
          <img src={data.image} alt="" />
        </div>
        <div className="container_producto">
          <div className="info_producto">
            <p>{ data.name }</p>
            <p>{ data.category }</p>
            <p>${ data.precio }</p>
            <p>Stock: { data.stock }</p>
            <button>Comprar</button>
          </div>
          <div className="stock">
            <button onClick={ restar }> - </button>
            <span>{ num }</span>
            <button onClick={ sumar }> + </button>
          </div>
          {error && <span>Solo tenemos {data.stock} productos en stock</span>}
        </div>
      </div>
    </main>
  )
}

export default InfoProduct;