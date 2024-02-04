import { useState, useEffect } from "react";
import { Product } from '../../components/Product';
import '../../assets/styles/PageListProduct.css';


const PageListProduct = () => {
  // const initial_prod = [
  //   {
  //     id: 1,
  //     title: 'Apex Pro TKL',
  //     image: 'https://m.media-amazon.com/images/I/61Zwr6hCkmL._AC_SX679_.jpg',
  //     price: 179.99,
  //     category: 'Gaming',
  //     stock: 10
  //   },
  //   {
  //     id: 2,
  //     title: 'Wooting 60HE',
  //     image: 'https://cdn.shopify.com/s/files/1/0013/1383/3071/files/W60HE_ANSI_US_PBT_c5da3e11-45aa-43f1-95ee-500f7bb0968b.jpg?v=1703246873',
  //     price: 174,
  //     category: 'Gaming',
  //     stock: 5
  //   },
  //   {
  //     id: 3,
  //     title: 'Razer Huntsman Mini',
  //     image: 'https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/t/e/teclado_razer_huntsman_mini_1_.jpg',
  //     price: 99.99,
  //     category: 'Gamming',
  //     stock: 10
  //   },
  //   {
  //     id: 4,
  //     title: 'Logitech G Pro X Lightspeed TKL',
  //     image: 'https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/t/e/teclado_logitech_pro_x_tkl_negro_1_.jpg',
  //     price: 199,
  //     category: 'Gaming',
  //     stock: 40
  //   },
  //   {
  //     id: 5,
  //     title: 'Keychron K3 Ultra-slim Wireless Mechanical Keyboard V2',
  //     image: 'https://www.keychron.com/cdn/shop/products/Keychron-K3-ultra_slim-Hot_swappable-wireless-mechanical-keyboard-Mac-Windows-iOS-Android-75percent-layout-White-backlight-aluminum-frame-low-profile-Gateron-mechanical-switch-brown.jpg?v=1615858826&width=1000',
  //     price: 84,
  //     category: 'Programming',
  //     stock: 20
  //   },
  //   {
  //     id: 6,
  //     title: 'ASUS ROG Azoth 75% Wireless',
  //     image: 'https://m.media-amazon.com/images/I/817DZv8FCdL._AC_SL1500_.jpg',
  //     price: 344.98,
  //     category: 'Gaming',
  //     stock: 5
  //   },
  // ]; 

  const [producto, setProduct] = useState([])

  useEffect(() => {
    fetch('https://65bee8a7dcfcce42a6f2fc77.mockapi.io/api/keyboard/keyboards/')
      .then(response => response.json())
      .then(res_json => setProduct(res_json))
  }, [])

  console.log(producto)

  return (
    <main>
      <section className="featured-products">
        <div className="container">
          <h2>
            Listado de productos
          </h2>
          <div className="row">
            {
              producto.map( product => <Product key={product.id} product={product}></Product> )
            }
          </div>
        </div>
      </section>
    </main>
  )

}

export default PageListProduct;