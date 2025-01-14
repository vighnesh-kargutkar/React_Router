import { Link } from "react-router-dom";

export default function Product() {
  const products = [
    { productId: 1 ,name: "Product 1" },
    { productId: 2 ,name: "Product 2" },
    { productId: 3 ,name: "Product 3" },
    { productId: 4 ,name: "Product 4" },
    { productId: 5 ,name: "Product 5" },
  ]
  return (
    <>
      <h1>My Product Page</h1>
      <ul>
        {products.map(product => (
          <li key={product.productId}><Link to={`${product.productId}`}>{product.name}</Link></li>
        ))}
      </ul>
    </>
  );
}
