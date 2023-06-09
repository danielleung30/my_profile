import { Canvas } from "@react-three/fiber";
import { Loader, PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import Lights from "../components/lights.js";
import Floor from "../components/floor.js";

const BasicScene = ({ children }) => {
  return (
    <div>
      <Canvas shadows camera={{ fov: 50 }}>
        <Lights />

        <Physics gravity={[0, -12.8, 0]}>
          {children}

          <Floor rotation={[Math.PI / -2, 0, 0]} color="white" />
        </Physics>

        <PointerLockControls />
      </Canvas>
      <Loader />
    </div>
  );
};

export default BasicScene;
