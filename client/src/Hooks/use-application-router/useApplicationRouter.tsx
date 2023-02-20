import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultPage from "../../DefaultPage/presentational";
import DictionaryContext from "../../Dictionary/Context";
import Dictionary from "../../Dictionary/presentational";
import GrammarLevels from "../../GrammarLevels/presentational";
import Releases from "../../Releases/presentational";
import TenseContent from "../../Tenses/Main/presentational";

export const LazyTenseApplicationRoot = lazy(() => import("../../app-root/presentational"));
const LazyRegistration = lazy(() => import("../../authentification/Registration/presentational"));
const LazyLogin = lazy(() => import("../../authentification/Login/presentational"));

const useApplicationRouter = () => {
  const router = createBrowserRouter([
    {
      element: <LazyTenseApplicationRoot />,
      children: [{
        path: "/",
        element: (
            <DefaultPage />
        ),
        errorElement: <div>Error</div>,
      },
      {
        path: "/Tenses/:type/:tense",
        element: (
            <TenseContent />
        ),
      },
      {
        path: "/Grammar-Levels/:level/:theme",
        element: (
           <GrammarLevels />
        ),
      },
      {
        path: "/Dictionary/Dictionary",
        element: (
          <DictionaryContext>
           <Dictionary />
          </DictionaryContext>
        ),
      },
      {
        path: "/Releases/Releases",
        element: (
            <Releases />
        ),
      },]
    },
    {
      path: "/login",
      element: <LazyLogin />,
    },
    {
      path: "/registration",
      element: <LazyRegistration />,
    },
  ]);

  return { router };
};

export default useApplicationRouter;
