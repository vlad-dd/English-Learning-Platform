import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultPage from "../../DefaultPage/presentational";
import DictionaryContext from "../../Dictionary/Context";
import Dictionary from "../../Dictionary/presentational";
import Releases from "../../Releases/presentational";
import TenseContent from "../../Tenses/Main/presentational";

export const LazyTenseApplicationRoot = lazy(() => import("../../app-root/presentational"));
const LazyRegistration = lazy(() => import("../../authentification/Registration/presentational"));
const LazyLogin = lazy(() => import("../../authentification/Login/presentational"));

const useApplicationRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <LazyTenseApplicationRoot>
          <DefaultPage />
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
    {
      path: "/Dictionary/Dictionary",
      element: (
        <DictionaryContext>
        <LazyTenseApplicationRoot>
         <Dictionary />
        </LazyTenseApplicationRoot>
        </DictionaryContext>
      ),
    },
    {
      path: "/Releases/Releases",
      element: (
        <LazyTenseApplicationRoot>
          <Releases />
        </LazyTenseApplicationRoot>
      ),
    },
  ]);

  return { router };
};

export default useApplicationRouter;
