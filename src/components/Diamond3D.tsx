import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function RoundBrilliantDiamond({ scrollProgress }: { scrollProgress: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Rotate based on scroll
  useFrame((_, delta) => {
    if (meshRef.current) {
      const targetY = scrollProgress * Math.PI * 0.8;
      const targetX = Math.sin(scrollProgress * Math.PI) * 0.1;
      meshRef.current.rotation.y = THREE.MathUtils.damp(
        meshRef.current.rotation.y,
        targetY,
        4,
        delta
      );
      meshRef.current.rotation.x = THREE.MathUtils.damp(
        meshRef.current.rotation.x,
        targetX,
        4,
        delta
      );
    }
  });

  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const indices: number[] = [];
    const seg = 16; // 16 segments for circular symmetry

    // Helper function to add a circle of vertices
    const addCircle = (y: number, r: number, segments: number, offset: number = 0) => {
      const start = vertices.length / 3;
      for (let i = 0; i < segments; i++) {
        const angle = (i / segments) * Math.PI * 2 + offset;
        vertices.push(Math.cos(angle) * r, y, Math.sin(angle) * r);
      }
      return start;
    };

    // Create diamond structure from bottom to top
    const culet = vertices.length / 3; 
    vertices.push(0, -1.2, 0); // Culet (bottom point)
    
    const lg = addCircle(-0.1, 1.1, seg); // Lower Girdle
    const ug = addCircle(0.05, 1.1, seg);  // Upper Girdle
    const cr = addCircle(0.4, 0.8, seg);  // Crown (top)

    // Create facets by connecting vertices
    for (let i = 0; i < seg; i++) {
      const n = (i + 1) % seg;
      
      // Pavilion facets (bottom)
      indices.push(culet, lg + n, lg + i);
      
      // Girdle facets
      indices.push(lg + i, lg + n, ug + i);
      indices.push(lg + n, ug + n, ug + i);
      
      // Crown facets (top surface)
      indices.push(ug + i, ug + n, cr + i);
      indices.push(ug + n, cr + n, cr + i);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    
    return geometry;
  }, []);

  return (
    <mesh ref={meshRef} geometry={geometry} scale={1.0}>
      <meshPhysicalMaterial
        color="#ffffff"
        metalness={0}
        roughness={0.005}
        transmission={1.0}
        thickness={2.2}
        ior={2.417}
        clearcoat={1.0}
        clearcoatRoughness={0.002}
        envMapIntensity={8}
        attenuationColor={new THREE.Color('#f8fbff')}
        attenuationDistance={1.6}
        transparent={true}
        opacity={1}
        dispersion={0.2}
        flatShading={true}
        side={THREE.DoubleSide}
        specularIntensity={3.0}
        specularColor={new THREE.Color('#ffffff')}
        reflectivity={1}
      />
    </mesh>
  );
}

interface Diamond3DProps {
  scrollProgress: number;
}

export default function Diamond3D({ scrollProgress }: Diamond3DProps) {
  const controlsRef = useRef<any>(null);

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          precision: 'highp',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Very subtle ambient */}
          {/* <ambientLight intensity={0.25} color="#ffffff" /> */}

          {/* Main key light */}
          <directionalLight
            position={[5, 8, 3]}
            intensity={4}
            color="#ffffff"
          />

          {/* Fill light */}
          <directionalLight
            position={[-6, 5, -4]}
            intensity={2}
            color="#fff8f0"
          />

          {/* Back light */}
          <directionalLight
            position={[0, -8, -5]}
            intensity={2}
            color="#f0f5ff"
          />

          {/* ===== CROWN LIGHTS ===== */}
          {/* Top center - table light */}
          <pointLight
            position={[0, 8, 0]}
            intensity={6}
            color="#ffffff"
            distance={25}
          />

          {/* Crown corners */}
          <pointLight
            position={[6, 6, 2]}
            intensity={5}
            color="#ffffff"
            distance={20}
          />
          <pointLight
            position={[-6, 6, 2]}
            intensity={4}
            color="#ffe8cc"
            distance={18}
          />

          {/* ===== GIRDLE LIGHTS ===== */}
          <pointLight
            position={[8, 1, 0]}
            intensity={4}
            color="#ffffff"
            distance={16}
          />
          <pointLight
            position={[-8, 1, 0]}
            intensity={3.5}
            color="#f0e0ff"
            distance={15}
          />
          <pointLight
            position={[0, 1, 8]}
            intensity={3.5}
            color="#ffffff"
            distance={15}
          />
          <pointLight
            position={[0, 1, -8]}
            intensity={3}
            color="#ffe8e0"
            distance={14}
          />

          {/* ===== PAVILION LIGHTS ===== */}
          <pointLight
            position={[5, -6, 2]}
            intensity={5}
            color="#e0e8ff"
            distance={18}
          />
          <pointLight
            position={[-5, -6, 2]}
            intensity={4}
            color="#ffe8f0"
            distance={16}
          />

          {/* Front light */}
          <pointLight
            position={[0, 0, 6]}
            intensity={3}
            color="#ffffff"
            distance={14}
          />

          {/* The diamond */}
          <RoundBrilliantDiamond scrollProgress={scrollProgress} />

          {/* Environment */}
          <Environment
            preset="studio"
            environmentIntensity={2}
            blur={0.01}
          />

          {/* Interactive Orbit Controls - Free rotation, no zoom */}
          <OrbitControls
            ref={controlsRef}
            enableRotate={true}
            enableZoom={false}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.8}
            rotateSpeed={0.6}
            enableDamping={true}
            dampingFactor={0.12}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI * 3 / 4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
