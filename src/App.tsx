import React from "react";
import {
  Route,
  Routes,
  Link
} from "react-router-dom";
import Login from "./Auth/Login/presentational";
import Registration from "./Auth/Registration/presentational";
import LayoutPage from "./Layout/presentational";

const App: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
    <Routes>

    <Route path="/" element={<LayoutPage />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/login" element={<Login />} />

     </Routes>
    </React.Fragment>
  );
};

export default App;
