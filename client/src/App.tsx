import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { LoadingSpinner } from "./Сommon";
import { useApplicationRouter } from "./Hooks";
import './index.css';

const Root: React.FC = (): JSX.Element => {

  const { router } = useApplicationRouter();

  return (
    <Suspense fallback={<LoadingSpinner size="large" />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Root;
