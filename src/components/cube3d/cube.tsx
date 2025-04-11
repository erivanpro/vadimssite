import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDShapes = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Vérifier si la scène a déjà été créée pour éviter de créer une nouvelle scène plusieurs fois
    if (mountRef.current && !mountRef.current.childElementCount) {
      // Initialiser la scène, la caméra et le renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();

      // Définir la couleur du fond à blanc
      scene.background = new THREE.Color(0xffffff); // Fond blanc

      // Ajuster la taille du renderer
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2); // Taille réduite
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      // Créer un cube avec Electric Blue
      const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5); // Cube de taille 0.5x0.5x0.5
      const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x1E90FF }); // Electric Blue
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.x = -2; // Déplacer le cube à gauche
      scene.add(cube);

      // Créer une pyramide avec Vivid Pink
      const pyramidGeometry = new THREE.ConeGeometry(0.5, 1, 4); // Base radius = 0.5, height = 1, 4 faces
      const pyramidMaterial = new THREE.MeshBasicMaterial({ color: 0xFF1493 }); // Vivid Pink
      const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
      pyramid.position.x = 0; // Centrer la pyramide
      scene.add(pyramid);

      // Créer un cylindre avec Golden Yellow
      const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32); // Rayon de 0.5, hauteur 1
      const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 }); // Golden Yellow
      const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      cylinder.position.x = 2; // Déplacer le cylindre à droite
      scene.add(cylinder);

      // Positionner la caméra pour mieux centrer les objets
      camera.position.z = 3;

      // Fonction d'animation
      const animate = () => {
        requestAnimationFrame(animate);

        // Faire tourner les objets
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        pyramid.rotation.x += 0.01;
        pyramid.rotation.y += 0.01;
        cylinder.rotation.x += 0.01;
        cylinder.rotation.y += 0.01;

        // Rendre la scène
        renderer.render(scene, camera);
      };

      animate();

      // Nettoyage lorsque le composant est démonté
      return () => {
        renderer.dispose();
        if (mountRef.current) {
          mountRef.current.innerHTML = '';
        }
      };
    }
  }, []);

  return (
    <div 
      className="w-full h-[500px] bg-white" // Assure une taille visible pour la scène
      ref={mountRef} // On utilise la référence pour rendre le canvas
    />
  );
};

export default ThreeDShapes;
