import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
//import About from './components/About.js';
import Contact from './components/Contact.js';
import Error from './components/Error.js';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import Cart from './components/Cart.js';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext.js';

const About = lazy(() => import('./components/About'));
const AppLayout = () => {
  const [userName, setUsername] = useState();
  useEffect(() => {
    const data = {
      name: 'yawar',
    };
    setUsername(data.user);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ newUser: userName, setUsername }}>
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/About',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('title'));

root.render(<RouterProvider router={appRouter} />);
