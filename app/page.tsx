import React from "react";

import Header from "@/components/Header";
import MainContainer from "@/components/main-container";

const HomePage = () => {
  return (
    <div className="bg-secondary-white">
      <main className="max-w-7xl mx-auto">
        <Header />

        {/* main container  */}
        <MainContainer />
      </main>
    </div>
  );
};

export default HomePage;
