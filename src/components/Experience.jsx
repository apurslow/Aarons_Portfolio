import { OrbitControls } from "@react-three/drei";

import { Suspense } from "react";
import { Loader } from "./LoadingScreen";
import { Crash } from "./Crash";

export const Experience = () => {
  return (
    <>
      <Suspense fallback={<Loader />}></Suspense>
      <OrbitControls />
      <ambientLight intensity={1} />
      <mesh>
       
        <meshNormalMaterial />
        <Crash  />
      </mesh>
    </>
  );
};
