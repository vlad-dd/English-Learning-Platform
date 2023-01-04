import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoadingSpinner } from './Сommon';

const LazyLayoutPage = lazy(() => import('./Main/presentational'));
const LazyRegistration = lazy(() => import('./authentification/Registration/presentational'));
const LazyLogin = lazy(() => import('./authentification/Login/presentational'));

const App: React.FC = (): JSX.Element => {
  return (
    <React.Suspense fallback={<LoadingSpinner size='large' />}>
      <Routes>
        <Route path='/' element={<LazyLayoutPage />} />
        <Route path='/registration' element={<LazyRegistration />} />
        <Route path='/login' element={<LazyLogin />} />
      </Routes>
    </React.Suspense>
  );
};

export default App;
