import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">List of products</Link>
      </p>
    </>
  );
}
