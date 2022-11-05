import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import MainScene from "../components/MainScene";

const Home: NextPage = (): JSX.Element => {
  return (
    <div className="h-screen">
      <Canvas>
        <MainScene />
      </Canvas>
    </div>
  );
};

export default Home;
