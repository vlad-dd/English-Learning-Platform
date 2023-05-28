import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { LoadingSpinner } from "./Сommon";
import { useApplicationRouter } from "./Hooks";
import { IntlProvider } from "react-intl";
import { TRANSLATIONS } from "./translations";
import { useSelector } from "react-redux";

const Root: React.FC = (): JSX.Element => {
  //@ts-ignore
  const { language } = useSelector(state => state.translation);

  const { router } = useApplicationRouter();
  //@ts-ignore
  return <IntlProvider locale="fr" messages={TRANSLATIONS[language]}><Suspense children={<RouterProvider router={router} />} fallback={<LoadingSpinner size="large" />} /></IntlProvider>
};

export default Root;
