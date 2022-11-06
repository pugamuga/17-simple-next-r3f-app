import { Html, Text, Text3D, useGLTF } from "@react-three/drei";
import { PrimitiveProps } from "@react-three/fiber";

export default function Macbook(props: PrimitiveProps): JSX.Element {
  const macbook = useGLTF("./models/macbook/model.gltf");

  return (
    <>
      <primitive {...props} object={macbook.scene}>
        <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={1.17}
          position={[0, 1.56, -1.4]}
          rotation-x={-0.256}
        >
          <iframe
            className="w-[1024px] h-[670px] border-none rounded-[20px] bg-black select-none"
            src="https://redesign-nine.vercel.app/"
          />
        </Html>
        
      </primitive>
    </>
  );
}
