import { Center, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
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
        <Suspense
          fallback={
            <Center>
              <Html>
                <p className=" text-white font-extrabold text-5xl w-[400px] text-center">
                  Loading model...
                </p>
              </Html>
            </Center>
          }
        >
          <MainScene scale={userWidth > 600 ? 1 : 0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
