import {
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
  Text3D,
  useMatcapTexture,
} from "@react-three/drei";
import Macbook from "./Macbook";

export default function MainScene(): JSX.Element {
  const [matCap] = useMatcapTexture("8A3DA1_D77CE4_C263D4_B75AC9", 128);
  return (
    <>
      <Environment preset="city" />
      <color args={["#531a82"]} attach="background" />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.25, 0.2]}
        azimuth={[-0.4, 0.2]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 2, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={3.5}
            height={2.65}
            intensity={65}
            color={"#9760fa"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 1.55, -1.15]}
          />
          <Macbook
            scale={1.4}
            object={undefined}
            position-y={-1.2}
            rotation={[(Math.PI * 1) / 16, (Math.PI * 1) / 6, 0]}
          />
          <Text3D
          position={[1.5,1.5,-2]}
          rotation={[0,Math.PI*-1/4,0]}
          letterSpacing={-0.025}
            font={"./fonts/fun3d.json"}
            size={0.55}
            height={0.1} // depth
            curveSegments={12} //???
            bevelEnabled={true} // bevels
            bevelThickness={0.1} // bevels depth
            bevelSize={0.03} // size
            bevelOffset={0}
            bevelSegments={15} // quality
          >
            {`PugaMuga\nCMC redesign`}
            <meshMatcapMaterial matcap={matCap} />
          </Text3D>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.9} opacity={0.4} blur={2.4} scale={7} />
    </>
  );
}
