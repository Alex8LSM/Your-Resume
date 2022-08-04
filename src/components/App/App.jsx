// import styles from './App.module.css';
// import { createContext, useContext } from "react";
// import user from '../../Data/user.json';
// import {user} from '../../components';
import Loader from '../Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { 
  // useEffect, 
  Suspense, lazy } from 'react';
  import {useUserContext} from '../../data'
// const MyContext = createContext();
const HomePage = lazy(() =>
import('../../page/HomePage' /* webpackChunkName: "home" */)
);
const EditPage = lazy(() =>
import('../../page/EditPage' /* webpackChunkName: "edit" */)
);

export const App = () => {
  const user = useUserContext()
  // const value  = useContext(MyContext);
  // console.log(value);
  return (
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<HomePage user={user}/>} />
      <Route path="edit" element={<EditPage user={user}/>} />
      {/* <Route
        path="/register"
        element={!isLoggedIn ? <AuthPage /> : <Navigate to="/contacts" />}
      />

      <Route
        path="/login"
        element={
          !isLoggedIn ? <LoginPage /> : <Navigate to="/contacts" />
        }
      />

      <Route
        path="/contacts"
        element={isLoggedIn ? <ContactsPage /> : <Navigate to="/login" />}
      />
      <Route
        path="*"
        element={
          !isLoggedIn ? (
            <Navigate to="/login" />
            ) : (
            <Navigate to="/contacts" />
          )
        }
      /> */}
    </Routes>
  </Suspense>
  );
};
