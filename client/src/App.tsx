import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { LoadingSpinner } from "./Сommon";
import { useApplicationRouter } from "./Hooks";

const Root: React.FC = (): JSX.Element => {

  const { router } = useApplicationRouter();

  return <Suspense children={<RouterProvider router={router} />} fallback={<LoadingSpinner size="large" />} />
};

export default Root;
