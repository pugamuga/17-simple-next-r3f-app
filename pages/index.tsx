import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import MainScene from "../components/MainScene";

const Home: NextPage = (): JSX.Element => {
  const [userWidth, setUserWidth] = useState<number>(0);

 

  useEffect(() => {
    const resizeHandler = () => {
      setUserWidth(window.innerWidth);
    };
    setUserWidth(window.innerWidth);
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [userWidth]);

  return (
    <div className="h-screen md:w-full ">
      <Canvas>
        <MainScene scale={userWidth>600?1:.6} />
      </Canvas>
    </div>
  );
};

export default Home;
