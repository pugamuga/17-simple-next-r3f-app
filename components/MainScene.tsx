import { Environment, Float, PresentationControls } from "@react-three/drei";
import Macbook from "./Macbook";

export default function MainScene(): JSX.Element {
  return (
    <>
      <Environment preset="city" />
      <color args={["#654c69"]} attach="background" />
      <PresentationControls global>
        <Float rotationIntensity={0.4}>
          <Macbook scale={1.4} object={undefined} position-y={-1.2} />
        </Float>
      </PresentationControls>
    </>
  );
}
