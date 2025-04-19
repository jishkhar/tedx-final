import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const VRModelComponent = () => {
  const model = useGLTF("/models/vr_model.glb");
  const modelRef = useRef();
  const { viewport } = useThree(); // Get viewport size

  let rotationY = 0;
  let rotationX = 0;

  useFrame(({ mouse, clock }) => {
    if (modelRef.current) {
      // Cursor-controlled rotation
      const targetY = mouse.x * Math.PI * 0.3;
      const targetX = -mouse.y * Math.PI * 0.1;

      // Smooth transition
      rotationY += (targetY - rotationY) * 0.05;
      rotationX += (targetX - rotationX) * 0.05;

      modelRef.current.rotation.y = rotationY;
      modelRef.current.rotation.x = rotationX;

      // Idle oscillation (gentle circular movement when cursor isn't moving)
      const time = clock.getElapsedTime();
      modelRef.current.rotation.y += Math.sin(time * 0.5) * 0.002; // Small left-right oscillation
      modelRef.current.rotation.x += Math.cos(time * 0.5) * 0.001; // Small up-down oscillation
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={model.scene}
      scale={[viewport.height * 0.35, viewport.height * 0.35, viewport.height * 0.35]} // 70% of parent height
      position={[0, -viewport.height * 0.1, 0]} // Keep it centered properly
    />
  );
};

// Canvas Wrapper
const VRModel = () => {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}> 
      <Canvas camera={{ position: [0, 1.5, 5] }}> {/* Adjusted for better view */}
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <VRModelComponent />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default VRModel;
