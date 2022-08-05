// import styles from './App.module.css';
// import { createContext, useContext } from "react";
// import user from '../../Data/user.json';
// import {user} from '../../components';
import Loader from '../Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState, Suspense, lazy } from 'react';
import { UserContext, data } from '../../data';
// const MyContext = createContext();
const HomePage = lazy(() =>
  import('../../page/HomePage' /* webpackChunkName: "home" */)
);
const EditPage = lazy(() =>
  import('../../page/EditPage' /* webpackChunkName: "edit" */)
);

export const App = () => {
  // const [user, setUser] = useState(data);
  // data.setUser = setUser;
  // useEffect(() => {

  //   setUser(data);
  //   console.log('user change', user);
  //   data.flag = false;

  // }, [data]);
  // const user = useUserContext();
  // const value  = useContext(MyContext);
  // console.log(value);
  // data.flag = false;
  return (
    // <UserContext.Provider value={data}>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage user={data} />} />
        <Route path="edit" element={<EditPage user={data} />} />
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
    // </UserContext.Provider>
  );
};
