import * as THREE from "three";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import './carousel.css';

import img1 from '../../assets/maisonchalon.webp';
import img2 from '../../assets/skate.webp';
import img3 from '../../assets/thetrace.webp';
import img4 from '../../assets/vortex.webp';
import img6 from '../../assets/magazineFichier_2Design_3d_illustrator_cover_the_trace.webp';
import videoSrc from '../../assets/animation_sphere_bleu_Vadims.mp4';

export default function ThreeJsCarousel() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, 500);

    if (mountRef.current) {
      mountRef.current.innerHTML = '';
      mountRef.current.appendChild(renderer.domElement);
    }

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.5;

    const panelSize = 150;
    const panelSpacing = 220; // radius from center
    const numberOfPanels = 6;

    const geometry = new THREE.PlaneGeometry(panelSize, panelSize);

    const loader = new THREE.TextureLoader();

    const media = [
      img1,
      img2,
      img3,
      img4,
      img6,
    ];

    // Create video texture
    const video = document.createElement('video');
    video.src = videoSrc;
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.play();

    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBFormat;

    const materials = media.map(img => new THREE.MeshBasicMaterial({
      map: loader.load(img),
      side: THREE.DoubleSide
    }));

    // Add video material to the end
    materials.push(new THREE.MeshBasicMaterial({ map: videoTexture, side: THREE.DoubleSide }));

    for (let i = 0; i < numberOfPanels; i++) {
      const angle = (i / numberOfPanels) * Math.PI * 2;
      const x = Math.sin(angle) * panelSpacing;
      const z = Math.cos(angle) * panelSpacing;

      const panel = new THREE.Mesh(geometry, materials[i]);
      panel.position.set(x, 0, z);
      panel.lookAt(new THREE.Vector3(0, 0, 0));
      scene.add(panel);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = mountRef.current?.clientWidth || window.innerWidth;
      camera.aspect = width / 500;
      camera.updateProjectionMatrix();
      renderer.setSize(width, 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return (
    <div className="w-full h-[500px] bg-white" ref={mountRef}></div>
  );
}
