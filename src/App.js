import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";
import RootLayout from "./component/RootLayout";
import Error from "./component/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Product /> },
    ],
    errorElement: <Error />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
