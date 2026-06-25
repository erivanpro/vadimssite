"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, RoundedBox } from "@react-three/drei";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type Metric = [string, string];

const storyBeats = [
  {
    count: "01",
    eyebrow: "Comfort",
    title: "The long-wheelbase cabin becomes a quiet private suite.",
    text: "The scroll turns the car from arrival silhouette to passenger-first profile, emphasizing rear space, deep glass, and calm proportions.",
  },
  {
    count: "02",
    eyebrow: "Craftsmanship",
    title: "Gloss black paint, chrome lines, and precise surfaces catch the light.",
    text: "Studio reflections move across the bodywork as the model rotates, replacing low-resolution static exterior imagery with a controlled premium reveal.",
  },
  {
    count: "03",
    eyebrow: "Technology",
    title: "A discreet digital cockpit sits inside the glass volume.",
    text: "Interior screens and ambient light are hinted through tinted glass, keeping the focus on chauffeur-grade refinement rather than dashboard clutter.",
  },
  {
    count: "04",
    eyebrow: "Performance",
    title: "The stance stays composed, heavy, and ready for private arrivals.",
    text: "The final angle settles into a confident three-quarter view with low reflections, illuminated details, and a planted S-Class presence.",
  },
];

function StudioLights() {
  return (
    <>
      <ambientLight intensity={0.58} />
      <hemisphereLight args={["#f3f8ff", "#050505", 0.42]} />
      <directionalLight position={[-7, 8, 5]} intensity={2} />
      <spotLight
        position={[6, 7, 7.5]}
        angle={0.46}
        penumbra={0.78}
        intensity={4.2}
      />
      <spotLight
        position={[-5, 4, -4]}
        angle={0.36}
        penumbra={0.72}
        intensity={2.1}
        color="#bce8ef"
      />
      <pointLight position={[-4, 2.2, -3]} intensity={2.1} color="#bce8ef" />
      <pointLight position={[4, 1.6, 2.4]} intensity={1.8} color="#c9a86a" />
    </>
  );
}

function CameraRig({ progress }: { progress: number }) {
  const { camera, size } = useThree();
  const positionRef = useRef(new THREE.Vector3());
  const targetRef = useRef(new THREE.Vector3());

  useFrame(() => {
    const eased = THREE.MathUtils.smoothstep(progress, 0, 1);
    const isCompact = size.width < 720;

    positionRef.current.set(
      isCompact ? 4.9 - eased * 0.85 : 5.95 - eased * 1.35,
      isCompact ? 2.12 + eased * 0.2 : 2.32 + eased * 0.16,
      isCompact ? 8.2 - eased * 0.92 : 7.65 - eased * 0.86,
    );
    targetRef.current.set(isCompact ? 0.42 : 0.02, -0.14, 0);

    camera.position.lerp(positionRef.current, 0.08);
    camera.lookAt(targetRef.current);
  });

  return null;
}

function Wheel({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, -0.55, z]} rotation={[0, 0, Math.PI / 2]}>
      <mesh>
        <cylinderGeometry args={[0.48, 0.48, 0.36, 48]} />
        <meshStandardMaterial color="#050505" roughness={0.58} metalness={0.3} />
      </mesh>
      <mesh position={[0, 0.19, 0]}>
        <cylinderGeometry args={[0.29, 0.29, 0.045, 40]} />
        <meshStandardMaterial color="#c7c3b8" roughness={0.28} metalness={0.86} />
      </mesh>
      <mesh position={[0, 0.225, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.2, 0.014, 10, 36]} />
        <meshStandardMaterial color="#f0eee7" roughness={0.2} metalness={0.9} />
      </mesh>
      {Array.from({ length: 8 }).map((_, index) => (
        <mesh
          key={index}
          position={[0, 0.245, 0]}
          rotation={[0, Math.PI / 2, (index * Math.PI) / 4]}
        >
          <boxGeometry args={[0.026, 0.24, 0.026]} />
          <meshStandardMaterial color="#d9d7cf" roughness={0.23} metalness={0.92} />
        </mesh>
      ))}
    </group>
  );
}

function SedanModel({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    const eased = THREE.MathUtils.smoothstep(progress, 0, 1);
    const targetRotation = -0.72 + eased * 2.7;
    const idle = Math.sin(state.clock.elapsedTime * 0.72) * 0.018;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotation + idle,
      0.075,
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -0.055 + eased * 0.08,
      0.055,
    );
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.85) * 0.025;
  });

  const blackPaint = (
    <meshPhysicalMaterial
      color="#050506"
      roughness={0.16}
      metalness={0.78}
      clearcoat={1}
      clearcoatRoughness={0.08}
      reflectivity={0.94}
      emissive="#010101"
      emissiveIntensity={0.18}
    />
  );
  const chrome = (
    <meshStandardMaterial color="#d5d0c6" roughness={0.18} metalness={0.92} />
  );
  const glass = (
    <meshPhysicalMaterial
      color="#061015"
      roughness={0.05}
      metalness={0.08}
      transmission={0.18}
      transparent
      opacity={0.62}
      clearcoat={1}
    />
  );

  return (
    <group ref={groupRef} scale={0.78} position={[0.34, -0.2, 0]}>
      <RoundedBox args={[5.7, 0.82, 1.74]} radius={0.24} smoothness={8} position={[0, -0.15, 0]}>
        {blackPaint}
      </RoundedBox>

      <RoundedBox args={[2.78, 0.86, 1.5]} radius={0.22} smoothness={8} position={[-0.18, 0.46, 0]}>
        {glass}
      </RoundedBox>

      <RoundedBox args={[1.72, 0.46, 1.62]} radius={0.22} smoothness={8} position={[-1.95, 0.12, 0]}>
        {blackPaint}
      </RoundedBox>
      <RoundedBox args={[1.78, 0.36, 1.62]} radius={0.24} smoothness={8} position={[2.02, 0.02, 0]}>
        {blackPaint}
      </RoundedBox>

      <mesh position={[-2.85, -0.05, 0]}>
        <boxGeometry args={[0.08, 0.3, 1.38]} />
        <meshStandardMaterial color="#d9d4ca" roughness={0.2} metalness={0.95} />
      </mesh>

      <mesh position={[-2.92, 0.02, 0.52]}>
        <boxGeometry args={[0.06, 0.08, 0.58]} />
        <meshStandardMaterial color="#d9f8ff" emissive="#bce8ef" emissiveIntensity={1.4} />
      </mesh>
      <mesh position={[-2.92, 0.02, -0.52]}>
        <boxGeometry args={[0.06, 0.08, 0.58]} />
        <meshStandardMaterial color="#d9f8ff" emissive="#bce8ef" emissiveIntensity={1.4} />
      </mesh>
      <mesh position={[2.9, 0.02, 0.56]}>
        <boxGeometry args={[0.06, 0.11, 0.42]} />
        <meshStandardMaterial color="#4b0507" emissive="#ff1f2d" emissiveIntensity={1.2} />
      </mesh>
      <mesh position={[2.9, 0.02, -0.56]}>
        <boxGeometry args={[0.06, 0.11, 0.42]} />
        <meshStandardMaterial color="#4b0507" emissive="#ff1f2d" emissiveIntensity={1.2} />
      </mesh>

      <mesh position={[0.08, 0.06, 0.89]}>
        <boxGeometry args={[4.96, 0.04, 0.045]} />
        {chrome}
      </mesh>
      <mesh position={[0.08, 0.06, -0.89]}>
        <boxGeometry args={[4.96, 0.04, 0.045]} />
        {chrome}
      </mesh>
      <mesh position={[-0.4, 0.38, 0]}>
        <boxGeometry args={[0.045, 0.58, 1.54]} />
        <meshStandardMaterial color="#111" roughness={0.24} metalness={0.52} />
      </mesh>

      <mesh position={[-0.45, 0.52, 0.42]}>
        <boxGeometry args={[0.62, 0.22, 0.34]} />
        <meshStandardMaterial color="#141414" roughness={0.44} metalness={0.22} />
      </mesh>
      <mesh position={[0.55, 0.47, 0.42]}>
        <boxGeometry args={[0.72, 0.22, 0.34]} />
        <meshStandardMaterial color="#141414" roughness={0.44} metalness={0.22} />
      </mesh>
      <mesh position={[-0.9, 0.58, 0.08]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[0.5, 0.04, 0.34]} />
        <meshStandardMaterial color="#77cce6" emissive="#4aa7c0" emissiveIntensity={0.42} />
      </mesh>

      <Wheel x={-1.92} z={0.92} />
      <Wheel x={1.96} z={0.92} />
      <Wheel x={-1.92} z={-0.92} />
      <Wheel x={1.96} z={-0.92} />
    </group>
  );
}

function StudioFloor() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.05, 0]}>
        <planeGeometry args={[18, 18]} />
        <meshStandardMaterial color="#060707" roughness={0.42} metalness={0.24} />
      </mesh>
      <ContactShadows
        opacity={0.68}
        scale={9}
        blur={2.8}
        far={3.8}
        position={[0, -1.02, 0]}
        color="#000000"
      />
    </>
  );
}

function ThreeScene({ progress }: { progress: number }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [4.8, 2.2, 5.2], fov: 35 }}
      gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
    >
      <color attach="background" args={["#040506"]} />
      <fog attach="fog" args={["#040506", 8.5, 15]} />
      <CameraRig progress={progress} />
      <StudioLights />
      <SedanModel progress={progress} />
      <StudioFloor />
    </Canvas>
  );
}

function useScrollProgress() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const nextProgress = Math.min(1, Math.max(0, -rect.top / travel));

      setProgress(reduceMotion ? 0.58 : nextProgress);
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return { sectionRef, progress };
}

export function CarThreeExperience({ metrics }: { metrics: Metric[] }) {
  const { sectionRef, progress } = useScrollProgress();

  return (
    <section
      ref={sectionRef}
      className="car-three-experience"
      aria-label="3D Mercedes-Benz S-Class presentation"
    >
      <div className="car-three-stage" aria-hidden="true">
        <ThreeScene progress={progress} />
        <div className="car-three-vignette" />
      </div>

      <div className="car-three-intro" data-reveal>
        <p className="eyebrow">03 / Car / 3D presentation</p>
        <h2>A black S-Class revealed as a rotating studio object.</h2>
        <p>
          The car chapter now uses a Three.js model staged like a premium product
          reveal, with scroll controlling the rotation, reflections, and viewing
          angle instead of relying on low-resolution static images.
        </p>
      </div>

      <div className="car-three-metrics" data-reveal style={{ "--delay": "120ms" } as CSSProperties}>
        {metrics.map(([label, text]) => (
          <div className="metric-cell" key={label}>
            <span>{label}</span>
            <strong>{text}</strong>
          </div>
        ))}
      </div>

      <div className="car-three-beats">
        {storyBeats.map((beat, index) => (
          <article
            className={`car-three-beat${index % 2 === 1 ? " is-right" : ""}`}
            data-reveal
            key={beat.title}
          >
            <span className="story-count">{beat.count}</span>
            <p className="eyebrow">{beat.eyebrow}</p>
            <h3>{beat.title}</h3>
            <p>{beat.text}</p>
          </article>
        ))}
      </div>

      <div className="car-three-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
    </section>
  );
}
