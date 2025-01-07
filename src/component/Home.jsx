import { Link, useNavigate } from "react-router-dom";
export default function Home() {
  const navigation = useNavigate();
  function handleNavigate() {
    navigation("/products");
  }
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">List of products</Link>
      </p>
      <button onClick={handleNavigate}>Products</button>
    </>
  );
}
