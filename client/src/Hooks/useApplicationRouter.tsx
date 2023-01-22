import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import TenseContent from '../Tenses/Main/presentational';

const LazyTenseApplicationRoot = lazy(() => import("../app-root/presentational"));
const LazyRegistration = lazy(() => import("../authentification/Registration/presentational"));
const LazyLogin = lazy(() => import("../authentification/Login/presentational"));

const useApplicationRouter = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <LazyTenseApplicationRoot>
          <div>Default App</div>
        </LazyTenseApplicationRoot>
      ),
      errorElement: <div>Error</div>,
    },
    {
      path: "/login",
      element: <LazyLogin />,
    },
    {
      path: "/registration",
      element: <LazyRegistration />,
    },
    {
      path: "/Tenses/:type/:tense",
      element: (
        <LazyTenseApplicationRoot>
          <TenseContent />
        </LazyTenseApplicationRoot>
      ),
    },
  ]);

  return { router };
};

export default useApplicationRouter;