import React from "react";
import { Header, About, Footer, SignIn, SignUp } from "../components";
function HomePage() {
  return (
    <div className="home-page text-center m-2">
      <img className="img-fluid" src="/assets/images/home.jpg" alt="" />
      <Footer />
    </div>
  );
}

export default HomePage;
