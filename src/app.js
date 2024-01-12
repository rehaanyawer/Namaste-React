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
    <UserContext.Provider value={{ newUser: userName, setUsername }}>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </UserContext.Provider>
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
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('title'));

root.render(<RouterProvider router={appRouter} />);
