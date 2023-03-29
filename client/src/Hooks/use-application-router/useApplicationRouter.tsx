import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "../../WelcomePage/presentational";
import DictionaryContext from "../../Dictionary/Context";
import Dictionary from "../../Dictionary/presentational";
import GrammarLevels from "../../GrammarLevels/presentational";
import Releases from "../../Releases/presentational";
import TenseContextRoot from "../../Tenses/Context";
import TenseContent from "../../Tenses/Main/presentational";
import TestApplicationContext from "../../Tests/Context";
import TestApplication from "../../Tests/presentational";

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
            <WelcomePage />
        ),
        errorElement: <div>Error</div>,
      },
      {
        path: "/Tenses/:type/:tense",
        element: (
            <TenseContextRoot>
              <TenseContent />
            </TenseContextRoot>
        ),
      },
      {
        path: "/Grammar-Levels/:level/:theme",
        element: (
           <GrammarLevels />
        ),
      },
      {
        path: "/Dictionary",
        element: (
          <DictionaryContext>
           <Dictionary />
          </DictionaryContext>
        ),
      },
      {
        path: "/Releases",
        element: (
            <Releases />
        ),
      },
      {
        path: "/Tests/:theme/:test",
        element: (
          <TestApplicationContext>
            <TestApplication />
          </TestApplicationContext>
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
