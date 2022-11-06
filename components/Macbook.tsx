import { useGLTF } from "@react-three/drei";
import { PrimitiveProps } from "@react-three/fiber";

export default function Macbook(props: PrimitiveProps): JSX.Element {
  const macbook = useGLTF("./models/macbook/model.gltf");

  return (
    <>
      <primitive {...props} object={macbook.scene} />
    </>
  );
}
