import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "../../WelcomePage/presentational";
import DictionaryContext from "../../Dictionary/Context";
import Dictionary from "../../Dictionary/presentational";
import GrammarLevels from "../../GrammarLevels/presentational";
import Releases from "../../Releases/presentational";
import TenseContent from "../../Tenses/Main/presentational";
import TestApplicationContext from "../../Tests/Context";
import TestApplication from "../../Tests/presentational";
import AdminPage from "../../admin-panel/presentational";
import { ELP_USER_EXPERIENCE_ERRORS } from "../../Сommon/error-handler-page/constants";

export const LazyTenseApplicationRoot = lazy(() => import("../../app-root/presentational"));
const LazyRegistration = lazy(() => import("../../authentification/Registration/presentational"));
const LazyLogin = lazy(() => import("../../authentification/Login/presentational"));
const LazyErrorPage = lazy(() => import("../../Сommon/error-handler-page/not-found-url"));

const useApplicationRouter = () => {
  const router = createBrowserRouter([
    {
      element: <LazyTenseApplicationRoot />,
      errorElement: <LazyErrorPage error={ELP_USER_EXPERIENCE_ERRORS.UNEXPECTED_BREAK} />,
      children: [{
        path: "/",
        element: (
            <WelcomePage />
        ),
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
        path: "/Tests/:part/:theme",
        element: (
          <TestApplicationContext>
            <TestApplication />
          </TestApplicationContext>
        ),
      },
      {
        path: "/admin-panel",
        element: (
          <AdminPage />
        ),
      },
    ]
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
      path: "*",
      element: <LazyErrorPage error={ELP_USER_EXPERIENCE_ERRORS.BAD_URL} />
    },
  ]);

  return { router };
};

export default useApplicationRouter;
