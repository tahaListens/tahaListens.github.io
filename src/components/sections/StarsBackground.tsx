import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useThemeStore } from "../../store/ThemeStore";

export const StarsBackground = () => {
  // Be explicit about the type
  const mountRef = useRef<HTMLDivElement>(null);
  const theme = useThemeStore((state) => state.theme);
  const sceneref = useRef<THREE.Scene | null>(null); // Initialize with null
  const starMaterialRef = useRef<THREE.PointsMaterial | null>(null);

  const starCount = 1000;
  const starVertices = [];

  for (let i = 0; i < starCount; i++) {
    const x = (Math.random() - 0.5) * 1000;
    const y = (Math.random() - 0.5) * 1000;
    const z = (Math.random() - 0.5) * 1000;
    starVertices.push(x, y, z);
  }

  useEffect(() => {
    // Early return if ref is not attached
    if (!mountRef.current) return;

    // === Set up scene ===
    const scene = new THREE.Scene();
    sceneref.current = scene; // Store the scene reference

    // Set background color based on theme
    scene.background =
      theme === "dark" ? new THREE.Color(0x000000) : new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // cameraRef.current = camera; // Store the camera reference
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    // rendererRef.current = renderer; // Store the renderer reference
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    //  === Set up background color ===
    // === Create stars ===
    const starGeometry = new THREE.BufferGeometry();

    const textureLoader = new THREE.TextureLoader();
    const circleTexture = textureLoader.load(
      "https://threejs.org/examples/textures/sprites/disc.png"
    );

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: theme === "dark" ? 0xffffff : 0x000000, // Change color based on theme
      size: 4,
      map: circleTexture,
      alphaTest: 0.9,
      transparent: true,
    });
    starMaterialRef.current = starMaterial; // Store the material reference

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

  useEffect(() => {
    if (sceneref.current) {
      sceneref.current.background =
        theme === "dark"
          ? new THREE.Color(0x000000)
          : new THREE.Color(0xffffff);
    }

    if (starMaterialRef.current) {
      starMaterialRef.current.color.set(theme === "dark" ? 0xffffff : 0x000000);
    }
  }, [theme]);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
};
