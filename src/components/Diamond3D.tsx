import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

interface DiamondMeshProps {
  scrollProgress: number;
}

function RealisticDiamond({ scrollProgress }: DiamondMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const indices: number[] = [];
    let idx = 0;

    const addVertex = (x: number, y: number, z: number) => {
      vertices.push(x, y, z);
      return idx++;
    };

    const addFace = (a: number, b: number, c: number) => {
      indices.push(a, b, c);
    };

    // ROUGH DIAMOND - Natural crystalline rock structure
    // Creates an octahedral diamond crystal with jagged surfaces
    
    // Main octahedral vertices
    const top = addVertex(0, 0.6, 0);
    const bottom = addVertex(0, -0.6, 0);
    const front = addVertex(0.5, 0, 0.5);
    const back = addVertex(-0.5, 0, -0.5);
    const right = addVertex(0.5, 0, -0.5);
    const left = addVertex(-0.5, 0, 0.5);

    // Secondary crystalline vertices - jagged details
    const t1 = addVertex(0.15, 0.35, 0.15);
    const t2 = addVertex(-0.15, 0.35, 0.15);
    const t3 = addVertex(-0.15, 0.35, -0.15);
    const t4 = addVertex(0.15, 0.35, -0.15);
    
    const b1 = addVertex(0.15, -0.35, 0.15);
    const b2 = addVertex(-0.15, -0.35, 0.15);
    const b3 = addVertex(-0.15, -0.35, -0.15);
    const b4 = addVertex(0.15, -0.35, -0.15);

    // Tertiary crystalline vertices - more roughness
    const m1 = addVertex(0.35, 0.1, 0.35);
    const m2 = addVertex(-0.35, 0.1, 0.35);
    const m3 = addVertex(-0.35, 0.1, -0.35);
    const m4 = addVertex(0.35, 0.1, -0.35);
    
    const m5 = addVertex(0.4, -0.05, 0.3);
    const m6 = addVertex(-0.4, -0.05, 0.3);
    const m7 = addVertex(-0.4, -0.05, -0.3);
    const m8 = addVertex(0.4, -0.05, -0.3);

    // Irregular edge vertices for roughness
    const e1 = addVertex(0.28, 0.22, 0.42);
    const e2 = addVertex(0.18, -0.15, 0.48);
    const e3 = addVertex(-0.25, 0.25, 0.45);
    const e4 = addVertex(-0.3, -0.2, 0.4);
    
    const e5 = addVertex(0.32, 0.18, -0.38);
    const e6 = addVertex(0.2, -0.22, -0.45);
    const e7 = addVertex(-0.28, 0.2, -0.4);
    const e8 = addVertex(-0.32, -0.18, -0.42);

    // TOP PYRAMID - main triangular faces
    addFace(top, t1, t2);
    addFace(top, t2, t3);
    addFace(top, t3, t4);
    addFace(top, t4, t1);

    // Connect top secondary vertices
    addFace(t1, e1, m1);
    addFace(t2, m2, e3);
    addFace(t3, e7, m3);
    addFace(t4, m4, e5);

    // Top to middle transitions
    addFace(t1, m1, front);
    addFace(t2, left, m2);
    addFace(t3, back, m3);
    addFace(t4, right, m4);

    // UPPER MIDDLE BAND - irregular crystalline facets
    addFace(m1, e1, m5);
    addFace(m1, m5, m4);
    addFace(m2, m6, e3);
    addFace(m2, e3, m3);
    addFace(m3, m7, e7);
    addFace(m3, e7, m4);
    addFace(m4, e5, m8);
    addFace(m4, m8, m1);

    // SIDE FACES - octahedral planes with roughness
    addFace(front, e1, e2);
    addFace(front, e2, m5);
    addFace(front, m5, m1);
    addFace(front, m1, e1);

    addFace(left, e3, e4);
    addFace(left, e4, m6);
    addFace(left, m6, m2);
    addFace(left, m2, e3);

    addFace(back, e7, e8);
    addFace(back, e8, m7);
    addFace(back, m7, m3);
    addFace(back, m3, e7);

    addFace(right, e5, e6);
    addFace(right, e6, m8);
    addFace(right, m8, m4);
    addFace(right, m4, e5);

    // LOWER MIDDLE BAND - rough crystalline
    addFace(b1, m5, e2);
    addFace(b1, e2, b2);
    addFace(b2, e4, m6);
    addFace(b2, m6, b1);

    addFace(b3, m7, e8);
    addFace(b3, e8, b4);
    addFace(b4, e6, m8);
    addFace(b4, m8, b3);

    // BOTTOM PYRAMID - main triangular faces
    addFace(bottom, b1, b2);
    addFace(bottom, b2, b3);
    addFace(bottom, b3, b4);
    addFace(bottom, b4, b1);

    // Connect bottom secondary to primary
    addFace(b1, front, e2);
    addFace(b2, left, e4);
    addFace(b3, back, e8);
    addFace(b4, right, e6);

    // Additional rough crystalline faces for more detail
    addFace(e1, e2, m5);
    addFace(e3, e4, m6);
    addFace(e7, e8, m7);
    addFace(e5, e6, m8);

    // Extra small facets for crystalline structure
    addFace(t1, front, e1);
    addFace(t2, left, e3);
    addFace(t3, back, e7);
    addFace(t4, right, e5);

    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();

    return geo;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = scrollProgress * Math.PI * 4 + state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.x = Math.sin(scrollProgress * Math.PI) * 0.45 + Math.sin(state.clock.elapsedTime * 0.5) * 0.18;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.35) * 0.12;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.22;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.07} floatIntensity={0.23}>
      <mesh ref={meshRef} geometry={geometry} scale={1.5}>
        <MeshTransmissionMaterial
          backside
          backsideThickness={1.2}
          samples={280}
          resolution={2048}
          transmission={0.92}
          roughness={0.08}
          thickness={2.5}
          ior={2.417}
          chromaticAberration={0.42}
          anisotropy={0.85}
          distortion={0.4}
          distortionScale={0.6}
          temporalDistortion={0.4}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
          attenuationDistance={1.5}
          attenuationColor="#e8e8e8"
          color="#f5f5f0"
          reflectivity={0.95}
          envMapIntensity={5.8}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

interface Diamond3DProps {
  scrollProgress: number;
}

export default function Diamond3D({ scrollProgress }: Diamond3DProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0.12, 6.0], fov: 40 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          precision: "highp",
        }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Professional jewelry store lighting for realistic diamond */}
          <ambientLight intensity={0.1} />
          
          {/* Main directional key light */}
          <directionalLight 
            position={[8, 12, 8]} 
            intensity={3.8} 
            color="#ffffff"
          />
          
          {/* Fill light - warm tone */}
          <directionalLight 
            position={[-9, 9, -9]} 
            intensity={3.0} 
            color="#fff5f0"
          />
          
          {/* Back light */}
          <directionalLight 
            position={[0, -9, 0]} 
            intensity={2.4} 
            color="#e8f0ff"
          />
          
          {/* Crown side lights - top illumination */}
          <pointLight position={[10, 8, 0]} intensity={3.8} color="#ffffff" distance={65} />
          <pointLight position={[-10, 8, 0]} intensity={3.2} color="#ffe6d0" distance={60} />
          <pointLight position={[0, 8, 10]} intensity={4.2} color="#fff8f2" distance={68} />
          <pointLight position={[0, 8, -10]} intensity={3.4} color="#fff0e8" distance={62} />
          
          {/* Mid-crown accent lights */}
          <pointLight position={[7, 5, 7]} intensity={2.8} color="#ffe8d8" decay={1.08} />
          <pointLight position={[-7, 5, -7]} intensity={2.6} color="#e2ecff" decay={1.08} />
          <pointLight position={[7, 4, -7]} intensity={2.7} color="#fff2e8" decay={1.08} />
          <pointLight position={[-7, 5, 7]} intensity={2.5} color="#e6f0ff" decay={1.08} />
          
          {/* Pavilion bottom lights */}
          <pointLight position={[12, 4, 0]} intensity={3.2} color="#ffffff" distance={52} />
          <pointLight position={[-12, 4, 0]} intensity={3.2} color="#fff0e6" distance={52} />
          <pointLight position={[0, 4, 12]} intensity={3.3} color="#ffffff" distance={54} />
          <pointLight position={[0, 4, -12]} intensity={3.0} color="#ffe8d8" distance={50} />
          
          {/* Deep pavilion accents */}
          <pointLight position={[5, 1, -5]} intensity={1.9} color="#f0e8ff" decay={1.18} />
          <pointLight position={[-5, 0, 5]} intensity={1.8} color="#fff0c8" decay={1.18} />
          
          {/* Top spotlight - maximum brilliance */}
          <spotLight 
            position={[0, 14, 0]} 
            angle={0.95} 
            penumbra={0.9} 
            intensity={5.2} 
            color="#ffffff"
          />
          
          {/* Bottom spotlight - pavilion depth */}
          <spotLight 
            position={[0, -6, 6]} 
            angle={0.8} 
            penumbra={0.8} 
            intensity={3.6} 
            color="#f0f8ff"
          />
          
          {/* Realistic round brilliant diamond */}
          <RealisticDiamond scrollProgress={scrollProgress} />
          
          {/* High-quality studio environment */}
          <Environment preset="studio" environmentIntensity={3.4} blur={0.01} />
        </Suspense>
      </Canvas>
    </div>
  );
}
