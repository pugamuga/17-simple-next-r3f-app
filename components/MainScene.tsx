import { OrbitControls } from "@react-three/drei";

export default function MainScene(): JSX.Element {
  return (
    <>

      <color args={["ivory"]} attach="background" />
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
