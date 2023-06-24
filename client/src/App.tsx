import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import { RouterProvider } from "react-router-dom";
import { LoadingSpinner } from "./Сommon";
import { useApplicationRouter } from "./Hooks";
import { TRANSLATIONS } from "./translations";
import * as selectors from "./store/selectors/index";

const Root: React.FC = (): JSX.Element => {

  const { language } = useSelector(selectors.languageTranslations);

  const { router } = useApplicationRouter();

  return (
    <IntlProvider locale={language} messages={TRANSLATIONS[language]}>
        <Suspense children={<RouterProvider router={router} />} fallback={<LoadingSpinner size="large" />} />
    </IntlProvider>
  )
};

export default Root;
