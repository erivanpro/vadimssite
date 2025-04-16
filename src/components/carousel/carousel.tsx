import * as THREE from "three"; // Import the core THREE.js library for 3D rendering
import { useEffect, useRef } from "react"; // Import hooks from React to handle side effects and references
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; // Import OrbitControls for camera manipulation
import './carousel.css'; // Import CSS file for styling

// Import images and video for the carousel
import img1 from '../../assets/maisonchalon.webp';
import img2 from '../../assets/skate.webp';
import img3 from '../../assets/thetrace.webp';
import img4 from '../../assets/vortex.webp';
import img6 from '../../assets/magazineFichier_2Design_3d_illustrator_cover_the_trace.webp';
import videoSrc from '../../assets/animation_sphere_bleu_Vadims.mp4';

// This is the React component that renders the 3D carousel
export default function ThreeJsCarousel() {
  const mountRef = useRef<HTMLDivElement | null>(null); // Reference for the container element where the scene will be mounted
  const initializedRef = useRef(false); // Flag to ensure that the scene is initialized only once

  useEffect(() => {
    if (initializedRef.current) return; // Prevent reinitializing the scene if it's already initialized
    initializedRef.current = true; // Mark the initialization as completed

    const HEIGHT = 500; // Define the height of the canvas for the 3D scene

    const scene = new THREE.Scene(); // Create a new 3D scene
    scene.background = new THREE.Color(0x000000); // Set the background color of the scene to black

    // Create a camera for perspective projection, which defines the viewpoint for rendering
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / HEIGHT, 0.1, 1000);
    camera.position.z = 400; // Position the camera along the z-axis to capture the scene

    // Create a WebGLRenderer to render the 3D scene on the screen
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, HEIGHT); // Set the size of the renderer to fit the screen

    // Attach the renderer's DOM element to the mount reference in the DOM
    if (mountRef.current) {
      mountRef.current.innerHTML = '';
      mountRef.current.appendChild(renderer.domElement);
    }

    // Set up OrbitControls for interactive camera control (rotation, zoom, pan)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable smooth damping for rotation
    controls.dampingFactor = 0.05; // Define the strength of the damping
    controls.autoRotate = true; // Enable auto-rotation for the scene
    controls.autoRotateSpeed = 1.5; // Set the speed of auto-rotation
    controls.enableZoom = true; // Allow zooming in and out with mouse
    controls.enableRotate = true; // Allow rotating the camera around the scene
    controls.enablePan = false; // Disable panning (moving the camera sideways)

    const panelSize = 150; // Define the size of each panel in the carousel
    const panelSpacing = 130; // Define the spacing between panels
    const numberOfPanels = 6; // Set the number of panels in the carousel
    const geometry = new THREE.PlaneGeometry(panelSize, panelSize); // Define the geometry (shape) of the panels
    const loader = new THREE.TextureLoader(); // Create a texture loader to load image and video textures 
    const media = [
      img1, img2, img3, img4, img6, // An array holding image sources for the panels
    ];

    // Create a video element and set its properties
    const video = document.createElement('video');
    video.src = videoSrc; // Set the video source
    video.muted = true; // Mute the video for autoplay
    video.loop = true; // Set the video to loop continuously
    video.autoplay = true; // Autoplay the video when it loads
    video.playsInline = true; // Allow inline playback on mobile
    video.play(); // Start playing the video

    // Create a video texture from the video element
    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter; // Set the min filter for the video texture
    videoTexture.magFilter = THREE.LinearFilter; // Set the mag filter for the video texture
    videoTexture.format = THREE.RGBFormat; // Set the format of the video texture

    // Create an array of materials (each material corresponds to a panel in the carousel)
    const materials = media.map(img => new THREE.MeshBasicMaterial({
      map: loader.load(img), // Load the image texture
      side: THREE.DoubleSide // Display both sides of the panel
    }));

    // Add the video material to the end of the materials array
    materials.push(new THREE.MeshBasicMaterial({ map: videoTexture, side: THREE.DoubleSide }));

    // Create the panels and position them in a circle
    for (let i = 0; i < numberOfPanels; i++) {
      const angle = (i / numberOfPanels) * Math.PI * 2; // Calculate the angle for each panel
      const x = Math.sin(angle) * panelSpacing; // Set the x position based on the angle
      const z = Math.cos(angle) * panelSpacing; // Set the z position based on the angle

      // Create a panel mesh using the plane geometry and the corresponding material
      const panel = new THREE.Mesh(geometry, materials[i]);
      panel.position.set(x, 0, z); // Position the panel in 3D space
      panel.lookAt(new THREE.Vector3(0, 0, 0)); // Make the panel face the center of the scene
      scene.add(panel); // Add the panel to the scene
    }

    // Create the cube geometry and material
    const cubeGeometry = new THREE.BoxGeometry(100, 100, 100); // Create a cube geometry with size 100
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Create a green material for the cube
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial); // Create the cube mesh

    // Position the cube at the center
    cube.position.set(0, 0, 0);
    scene.add(cube); // Add the cube to the scene

    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Create ambient light to illuminate the scene
    scene.add(ambientLight); // Add the ambient light to the scene

    // Define the animation loop to render the scene continuously
    const animate = () => {
      requestAnimationFrame(animate); // Request the next frame to animate
      cube.rotation.x += 0.01; // Rotate the cube along the X-axis
      cube.rotation.y += 0.01; // Rotate the cube along the Y-axis
      controls.update(); // Update the controls to reflect changes (like camera movement)
      renderer.render(scene, camera); // Render the scene from the perspective of the camera
    };
    animate(); // Start the animation loop

    // Handle window resizing to adjust the canvas size and camera aspect ratio
    const handleResize = () => {
      const width = mountRef.current?.clientWidth || window.innerWidth; // Get the current width of the container
      camera.aspect = width / HEIGHT; // Update the camera's aspect ratio
      camera.updateProjectionMatrix(); // Update the camera's projection matrix
      renderer.setSize(width, HEIGHT); // Adjust the renderer's size based on the new width
    };

    window.addEventListener('resize', handleResize); // Add an event listener to handle window resizing

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
      renderer.dispose(); // Dispose of the renderer to free resources
      controls.dispose(); // Dispose of the controls to free resources
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div
      ref={mountRef} // Attach the mountRef to this div element
    />
  );
}
