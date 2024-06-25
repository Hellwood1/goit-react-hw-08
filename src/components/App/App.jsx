import css from "./App.module.css"
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectisRefreshing } from "../../redux/auth/selectors";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Home = lazy(() => import("../../pages/Home/Home"));
const Registration = lazy(() =>
  import("../../pages/Registration/Registration")
);
const Login = lazy(() => import("../../pages/Login/Login"));
const Contacts = lazy(() => import("../../pages/Contacts/Contacts"));
const NotFound = lazy(() => import("../../pages/NotFound/NotFound"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectisRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <></>
  ) : (
    <>
      <Layout />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={<Registration />} path="/contacts" />
            }
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={<Login />} path="/contacts" />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<Contacts />} path="/login" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;