import { useEffect, useRef } from "react";
import * as THREE from "three";

const BubbleBackground: React.FC = () => {
  // The ref to hold the container for the three.js scene
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    if (containerRef.current) {
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);
    }

    // Create a bubble material and sphere geometry
    const bubbleGeometry = new THREE.SphereGeometry(1, 32, 32);
    const bubbleMaterial = new THREE.MeshBasicMaterial({
      color: 0x00bcd4,
      opacity: 0.5,
      transparent: true,
    });

    const bubbles: THREE.Mesh[] = [];

    // Create multiple bubbles
    for (let i = 0; i < 30; i++) {
      const bubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial);
      bubble.position.set(
        Math.random() * 30 - 15,
        Math.random() * 20 - 10,
        Math.random() * -30 - 10
      );
      bubble.scale.set(Math.random() * 2 + 0.5, Math.random() * 2 + 0.5, Math.random() * 2 + 0.5);
      scene.add(bubble);
      bubbles.push(bubble);
    }

    camera.position.z = 25;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Move each bubble upwards and reset its position
      bubbles.forEach((bubble) => {
        bubble.position.y += 0.05;
        if (bubble.position.y > 10) {
          bubble.position.y = -10;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Adjust camera and renderer on window resize
    const handleResize = () => {
      if (containerRef.current) {
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Clean up the scene on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      // Clean up all objects in the scene
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default BubbleBackground;
