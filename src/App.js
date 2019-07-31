import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar";
import LandingPage from "./component/LandingPage";

function App() {
  return (
    <view>
      <NavBar />
      <main role="main" class="container ">
        <LandingPage />
      </main>
    </view>
  );
}

export default App;
