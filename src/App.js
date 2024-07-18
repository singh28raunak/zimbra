import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Error from "./component/Error";
import ProductDetail from "./component/ProductDetail";
import MainNavigation from "./component/MainNavigation";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainNavigation />,
      errorElement: <Error />,
    },
    { path: "/products/:id", element: <ProductDetail /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
