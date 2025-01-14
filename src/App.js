import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Products/Product";
import RootLayout from "./component/Root/RootLayout";
import Error from "./component/Root/Error";
import ProductDetail from "./component/Products/ProductsDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Product /> },
      { path: 'products/:productId', element: <ProductDetail /> },
    ],
    errorElement: <Error />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
