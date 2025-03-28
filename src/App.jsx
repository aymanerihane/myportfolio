import React, { useState, useEffect, Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, ParticlesComponent, Preloader,FindMe } from "./components";

const App = () => {
  const [load, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HashRouter>
      <Preloader load={load} />
      <div className="App bg-[#070312]" id={load ? "no-scroll" : "scroll"}>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <ParticlesComponent />
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />

        <div className='relative z-0'>
          {/* <FindMe /> */}
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;