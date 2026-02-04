import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

interface DiamondMeshProps {
  scrollProgress: number;
}

function PrincessCutDiamond({ scrollProgress }: DiamondMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create realistic princess-cut diamond geometry with proper facets
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    
    const vertices: number[] = [];
    const indices: number[] = [];
    let vertexIndex = 0;
    
    const addVertex = (x: number, y: number, z: number) => {
      vertices.push(x, y, z);
      return vertexIndex++;
    };
    
    // Princess cut dimensions
    const tableSize = 0.65; // Table width (top flat surface)
    const crownHeight = 0.25;
    const girdleHeight = 0.0;
    const pavilionDepth = -0.85;
    const girdleSize = 1.0; // Full width at girdle
    const crownAngle = 0.15; // Crown facet angle
    
    // ============ TABLE (top flat square) ============
    const t1 = addVertex(-tableSize, crownHeight, -tableSize);
    const t2 = addVertex(tableSize, crownHeight, -tableSize);
    const t3 = addVertex(tableSize, crownHeight, tableSize);
    const t4 = addVertex(-tableSize, crownHeight, tableSize);
    
    // Table faces (2 triangles)
    indices.push(t1, t2, t3);
    indices.push(t1, t3, t4);
    
    // ============ CROWN FACETS ============
    // Star facets (chevrons from table corners to girdle corners)
    const starMid = crownHeight * 0.4;
    const starSize = (tableSize + girdleSize) / 2;
    
    // Corner star vertices
    const s1 = addVertex(-starSize, starMid, -starSize);
    const s2 = addVertex(starSize, starMid, -starSize);
    const s3 = addVertex(starSize, starMid, starSize);
    const s4 = addVertex(-starSize, starMid, starSize);
    
    // Edge midpoints for bezel facets
    const bezelHeight = crownHeight * 0.5;
    const bezelSize = (tableSize + girdleSize) / 2 + 0.05;
    
    const b1 = addVertex(0, bezelHeight, -bezelSize); // top edge
    const b2 = addVertex(bezelSize, bezelHeight, 0);  // right edge
    const b3 = addVertex(0, bezelHeight, bezelSize);  // bottom edge
    const b4 = addVertex(-bezelSize, bezelHeight, 0); // left edge
    
    // Girdle corners
    const g1 = addVertex(-girdleSize, girdleHeight, -girdleSize);
    const g2 = addVertex(girdleSize, girdleHeight, -girdleSize);
    const g3 = addVertex(girdleSize, girdleHeight, girdleSize);
    const g4 = addVertex(-girdleSize, girdleHeight, girdleSize);
    
    // Girdle edge midpoints
    const gm1 = addVertex(0, girdleHeight, -girdleSize);
    const gm2 = addVertex(girdleSize, girdleHeight, 0);
    const gm3 = addVertex(0, girdleHeight, girdleSize);
    const gm4 = addVertex(-girdleSize, girdleHeight, 0);
    
    // Crown facets - connecting table to girdle
    // Top side (between t1-t2 and g1-gm1-g2)
    indices.push(t1, b1, t2);
    indices.push(t1, s1, b1);
    indices.push(t2, b1, s2);
    indices.push(s1, g1, gm1);
    indices.push(s1, gm1, b1);
    indices.push(b1, gm1, s2);
    indices.push(s2, gm1, g2);
    
    // Right side (between t2-t3 and g2-gm2-g3)
    indices.push(t2, b2, t3);
    indices.push(t2, s2, b2);
    indices.push(t3, b2, s3);
    indices.push(s2, g2, gm2);
    indices.push(s2, gm2, b2);
    indices.push(b2, gm2, s3);
    indices.push(s3, gm2, g3);
    
    // Bottom side (between t3-t4 and g3-gm3-g4)
    indices.push(t3, b3, t4);
    indices.push(t3, s3, b3);
    indices.push(t4, b3, s4);
    indices.push(s3, g3, gm3);
    indices.push(s3, gm3, b3);
    indices.push(b3, gm3, s4);
    indices.push(s4, gm3, g4);
    
    // Left side (between t4-t1 and g4-gm4-g1)
    indices.push(t4, b4, t1);
    indices.push(t4, s4, b4);
    indices.push(t1, b4, s1);
    indices.push(s4, g4, gm4);
    indices.push(s4, gm4, b4);
    indices.push(b4, gm4, s1);
    indices.push(s1, gm4, g1);
    
    // ============ PAVILION FACETS ============
    // Culet (bottom point)
    const culet = addVertex(0, pavilionDepth, 0);
    
    // Pavilion main facets - V-shaped chevrons
    const pavHeight = pavilionDepth * 0.45;
    const pavSize = girdleSize * 0.5;
    
    // Pavilion break facet vertices
    const pb1 = addVertex(0, pavHeight, -pavSize);
    const pb2 = addVertex(pavSize, pavHeight, 0);
    const pb3 = addVertex(0, pavHeight, pavSize);
    const pb4 = addVertex(-pavSize, pavHeight, 0);
    
    // Corner pavilion vertices
    const pc1 = addVertex(-pavSize * 0.7, pavHeight * 0.8, -pavSize * 0.7);
    const pc2 = addVertex(pavSize * 0.7, pavHeight * 0.8, -pavSize * 0.7);
    const pc3 = addVertex(pavSize * 0.7, pavHeight * 0.8, pavSize * 0.7);
    const pc4 = addVertex(-pavSize * 0.7, pavHeight * 0.8, pavSize * 0.7);
    
    // Pavilion facets - top section (girdle to break)
    // Top edge
    indices.push(g1, pb1, gm1);
    indices.push(gm1, pb1, g2);
    indices.push(g1, pc1, pb1);
    indices.push(pb1, pc2, g2);
    
    // Right edge
    indices.push(g2, pb2, gm2);
    indices.push(gm2, pb2, g3);
    indices.push(g2, pc2, pb2);
    indices.push(pb2, pc3, g3);
    
    // Bottom edge
    indices.push(g3, pb3, gm3);
    indices.push(gm3, pb3, g4);
    indices.push(g3, pc3, pb3);
    indices.push(pb3, pc4, g4);
    
    // Left edge
    indices.push(g4, pb4, gm4);
    indices.push(gm4, pb4, g1);
    indices.push(g4, pc4, pb4);
    indices.push(pb4, pc1, g1);
    
    // Pavilion facets - bottom section (break to culet)
    indices.push(pb1, culet, pb2);
    indices.push(pb2, culet, pb3);
    indices.push(pb3, culet, pb4);
    indices.push(pb4, culet, pb1);
    
    // Corner pavilion facets to culet
    indices.push(pc1, pb1, culet);
    indices.push(pc1, culet, pb4);
    indices.push(pc2, pb2, culet);
    indices.push(pc2, culet, pb1);
    indices.push(pc3, pb3, culet);
    indices.push(pc3, culet, pb2);
    indices.push(pc4, pb4, culet);
    indices.push(pc4, culet, pb3);
    
    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    
    return geo;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Smooth rotation based on scroll
      meshRef.current.rotation.y = scrollProgress * Math.PI * 4;
      meshRef.current.rotation.x = Math.sin(scrollProgress * Math.PI) * 0.2;
      
      // Subtle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh ref={meshRef} geometry={geometry} scale={1.8}>
        <MeshTransmissionMaterial
          backside
          backsideThickness={0.3}
          samples={32}
          resolution={1024}
          transmission={0.98}
          roughness={0.0}
          thickness={0.8}
          ior={2.417} // Diamond's real IOR
          chromaticAberration={0.15}
          anisotropy={0.3}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.1}
          clearcoat={1}
          clearcoatRoughness={0}
          attenuationDistance={0.3}
          attenuationColor="#ffffff"
          color="#fcfcfc"
          reflectivity={1}
          envMapIntensity={3}
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
        camera={{ position: [0, 0.5, 5], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
        }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Multi-point lighting for maximum sparkle */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 10, 5]} intensity={2} color="#ffffff" />
          <directionalLight position={[-5, 10, -5]} intensity={1.5} color="#fff5e6" />
          <directionalLight position={[0, -5, 0]} intensity={0.5} color="#e6f0ff" />
          
          {/* Accent lights for fire effect */}
          <pointLight position={[3, 3, 3]} intensity={1.5} color="#ffe4c4" />
          <pointLight position={[-3, 2, -3]} intensity={1} color="#e6e6ff" />
          <pointLight position={[0, 5, 0]} intensity={2} color="#ffffff" />
          <spotLight 
            position={[0, 8, 0]} 
            angle={0.5} 
            penumbra={0.5} 
            intensity={3} 
            color="#fff8f0"
            castShadow={false}
          />
          
          <PrincessCutDiamond scrollProgress={scrollProgress} />
          
          {/* High quality environment for realistic reflections */}
          <Environment preset="studio" environmentIntensity={1.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}
