import type { NextPage } from "next";
import React from "react";
import styles from "../styles/Home.module.css";
import { Login } from "./components/Login";

import { Logout } from "./components/Logout";
import { useAuth } from "./context/AuthContext";

const Home: NextPage = () => {
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <h1>Api Context</h1>
      <hr />

      {user ? "User logged in" : "User unauthenticated"}
      {user ? <Logout /> : <Login />}
    </div>
  );
};

export default Home;
