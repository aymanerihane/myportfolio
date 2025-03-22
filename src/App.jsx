import { useEffect, useState } from "react";
import FirstSection from "./components/firstSection";
import ProjectCards from "./components/ProjectCards";
import myImage from './assets/myImage.png';
import Tilt from 'react-parallax-tilt';
import TechSection from "./components/TechSection";
import AboutSection from "./components/AboutSection";
import ParticleComponent from './components/particles';



export default function App() {
  const [isLoading, setIsLoading] = useState(true);


  // Handle page loading
  useEffect(() => {
    // Check if the document and all resources are fully loaded
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', () => setIsLoading(false));
      // Fallback in case load event doesn't fire
      setTimeout(() => setIsLoading(false), 3000);

      return () => window.removeEventListener('load', () => setIsLoading(false));
    }
  }, []);


  if (isLoading) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full  mb-4"></div>
        <h2 className="text-2xl font-semibold">Loading...</h2>
        <p className="text-gray-400 mt-2">Please wait while we prepare your experience</p>
      </div>
    );
  }

  return (
    <div className="z-50">
      <div className="w-screen h-screen ">
        <ParticleComponent id="particles" />

        <div
          className="w-full h-full transition-transform duration-700 ease-in-out will-change-transform"

        >

          <section className="w-screen h-screen bg-transparent flex-shrink-0">

            <FirstSection />
          </section>

          <section className="w-screen h-screen container flex justify-center items-center  bg-transparent  text-white relative">
            <div className="flex justify-around items-center flex-col w-10/12">
              <div className="flex w-full justify-around items-center gap-10">
                <Tilt>
                  <div className="w-[300px] h-[300px] bg-blue-950 rounded-full relative">
                    <img src={myImage} alt="myImage" className="h-[430px] w-[430px] object-cover  absolute bottom-0 rounded-full" />
                  </div>
                </Tilt>
                <div className="max-w-[700px] flex flex-col gap-10 justify-between items-center">
                  <h1 className="text-4xl font-bold">LET ME INTRODUCE MYSELF</h1>
                  <p className="text-[19px] font-bold leading-[29px] grow">I am currently pursuing a Master's degree in Artificial Intelligence and Data Science at the Faculty of Science and Technology in Tangier. Passionate about new technologies and data engineering, I am a curious and enthusiastic individual eager to contribute to innovative projects and shape the solutions of tomorrow. Through my academic journey and the diverse experiences I have undertaken, I have developed both technical expertise and strong interpersonal skills, making me a valuable asset to any future team...</p>
                </div>


              </div>
            </div>


            {/* <ProjectCards imgPath={myImage}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
              /> */}

          </section>

          <section className=" bg-transparent flex-shrink-0 flex justify-center items-center text-white  w-full h-full relative">
            <ParticleComponent id="particles" />
            <AboutSection />
          </section>

          <section className="w-screen h-screen bg-transparent flex-shrink-0 flex justify-center items-center text-white">
            <TechSection />
          </section>
        </div>

        {/* Section indicators */}
        {/* <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
        {Array.from({ length: totalSections }).map((_, index) => (
          <div
            key={index}
            className={`w-1 h-3 my-2 rounded-full cursor-pointer transition-colors ${
              currentSection === index ? "bg-white" : "bg-gray-400 bg-opacity-50 hover:bg-opacity-80"
            }`}
            onClick={() => {
              if (!isScrollingRef.current) {
                isScrollingRef.current = true;
                setCurrentSection(index);
                if (scrollTimeoutRef.current) {
                  clearTimeout(scrollTimeoutRef.current);
                }
                scrollTimeoutRef.current = setTimeout(() => {
                  isScrollingRef.current = false;
                }, 700);
              }
            }}
          />
        ))}
      </div> */}
      </div>

    </div>
  );
}