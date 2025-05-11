import { useEffect, useRef } from "react";
import * as THREE from "three";

export const StarsBackground = () => {
  // Be explicit about the type
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Early return if ref is not attached
    if (!mountRef.current) return;

    // === Set up scene ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // === Create stars ===
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const starVertices = [];

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 1000;
      const y = (Math.random() - 0.5) * 1000;
      const z = (Math.random() - 0.5) * 1000;
      starVertices.push(x, y, z);
    }

    const textureLoader = new THREE.TextureLoader();
    const circleTexture = textureLoader.load(
      "https://threejs.org/examples/textures/sprites/disc.png"
    );

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 4,
      map: circleTexture,
      alphaTest: 0.9,
      transparent: true,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    const starGroup = new THREE.Group();
    starGroup.position.z = -100; // Put it 50 units in front of the camera
    starGroup.add(stars);
    scene.add(starGroup);

    // === Animation ===
    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.z += 0.0009;
      stars.rotation.y -= 0.0009;
      renderer.render(scene, camera);
    };
    animate();

    // === Handle resize ===
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // === Cleanup ===
    return () => {
      window.removeEventListener("resize", handleResize);
      // Add null check here too
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
};

// import { Canvas } from "@react-three/fiber";
// import { useThemeStore } from "../store/themestore"; // update with correct path
// import { useEffect, useState } from "react";
// import * as THREE from "three";

// const Stars = ({ color }: { color: string }) => {
//   const starGeometry = new THREE.BufferGeometry();
//   const starMaterial = new THREE.PointsMaterial({ color });

//   const starCount = 500;
//   const positions = new Float32Array(starCount * 3);
//   for (let i = 0; i < starCount * 3; i++) {
//     positions[i] = (Math.random() - 0.5) * 100;
//   }
//   starGeometry.setAttribute(
//     "position",
//     new THREE.BufferAttribute(positions, 3)
//   );

//   return <points geometry={starGeometry} material={starMaterial} />;
// };

// const StarsBackground = () => {
//   const theme = useThemeStore((state) => state.theme);

//   return (
//     <Canvas
//       style={{ width: "100%", height: "100vh" }}
//       camera={{ position: [0, 0, 30], fov: 75 }}
//     >
//       <color
//         attach="background"
//         args={[theme === "dark" ? "black" : "white"]}
//       />
//       <Stars color={theme === "dark" ? "white" : "black"} />
//     </Canvas>
//   );
// };

// export default StarsBackground;
