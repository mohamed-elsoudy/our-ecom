import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@layouts/index';
import Home from '@pages/Home';
import Products from '@pages/Products';
import Categories from '@pages/Categories';
import About from '@pages/About';
import Error from '@pages/Error';
import LoginPage from '@pages/LoginPage';
import RegisterPage from '@pages/RegisterPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "categories",
        element: <Categories />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "register",
        element: <RegisterPage />
      },
      {
        path: "*",
        element: <Error />
      },
    ]
  }
]);

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default AppRouter;
