import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import { useRef } from "react";

function EnergyCore() {
  const core = useRef();
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();
  const shards = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (core.current) {
      core.current.rotation.x = t * 0.18;
      core.current.rotation.y = t * 0.32;
      core.current.rotation.z = Math.sin(t * 0.4) * 0.15;
    }

    if (ring1.current) {
      ring1.current.rotation.x = t * 0.35;
      ring1.current.rotation.z = t * 0.5;
    }

    if (ring2.current) {
      ring2.current.rotation.y = t * -0.28;
      ring2.current.rotation.z = t * 0.4;
    }

    if (ring3.current) {
      ring3.current.rotation.x = t * -0.22;
      ring3.current.rotation.y = t * 0.3;
    }

    if (shards.current) {
      shards.current.rotation.y = t * 0.15;
      shards.current.rotation.x = Math.sin(t * 0.3) * 0.12;
    }

    // Mouse reaction
    if (core.current) {
      core.current.rotation.y +=
        (state.pointer.x * 0.25 - core.current.rotation.y) * 0.01;

      core.current.rotation.x +=
        (-state.pointer.y * 0.18 - core.current.rotation.x) * 0.01;
    }
  });

  return (
    <>
      {/* MAIN CORE */}
      <Float
        speed={1.5}
        rotationIntensity={0.15}
        floatIntensity={0.35}
      >
        <mesh ref={core} scale={1.45}>
          <icosahedronGeometry args={[1, 2]} />

          <meshStandardMaterial
            color="#080808"
            metalness={1}
            roughness={0.16}
            emissive="#420000"
            emissiveIntensity={1.4}
          />
        </mesh>
      </Float>

      {/* INNER RED ENERGY CORE */}
      <mesh scale={0.72}>
        <icosahedronGeometry args={[1, 2]} />

        <meshStandardMaterial
          color="#180000"
          metalness={0.7}
          roughness={0.2}
          emissive="#ff1010"
          emissiveIntensity={5}
        />
      </mesh>

      {/* ENERGY RINGS */}

      <mesh ref={ring1} rotation={[0.7, 0.2, 0]} scale={[2.25, 1, 1]}>
        <torusGeometry args={[1.45, 0.025, 12, 160]} />

        <meshStandardMaterial
          color="#ff1616"
          emissive="#ff0000"
          emissiveIntensity={8}
          metalness={1}
        />
      </mesh>

      <mesh ref={ring2} rotation={[1.3, 0.4, 0]} scale={[2.65, 1, 1]}>
        <torusGeometry args={[1.45, 0.014, 12, 160]} />

        <meshStandardMaterial
          color="#ffffff"
          emissive="#ff2020"
          emissiveIntensity={6}
          metalness={1}
        />
      </mesh>

      <mesh ref={ring3} rotation={[0.2, 1.1, 0]} scale={[3, 1, 1]}>
        <torusGeometry args={[1.45, 0.01, 12, 160]} />

        <meshStandardMaterial
          color="#ff3030"
          emissive="#ff0000"
          emissiveIntensity={5}
          metalness={1}
        />
      </mesh>

      {/* FLOATING ANGULAR SHARDS */}
      <group ref={shards}>
        <mesh position={[2.2, 0.8, 0]}>
          <octahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial
            color="#ff1515"
            emissive="#ff0000"
            emissiveIntensity={6}
            metalness={1}
          />
        </mesh>

        <mesh position={[-2.1, 0.4, 0.5]}>
          <octahedronGeometry args={[0.16, 0]} />
          <meshStandardMaterial
            color="#ff1515"
            emissive="#ff0000"
            emissiveIntensity={6}
            metalness={1}
          />
        </mesh>

        <mesh position={[0.8, -1.8, 0.3]}>
          <octahedronGeometry args={[0.14, 0]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ff2020"
            emissiveIntensity={5}
            metalness={1}
          />
        </mesh>

        <mesh position={[-1.3, -1.3, 0]}>
          <octahedronGeometry args={[0.18, 0]} />
          <meshStandardMaterial
            color="#ff2020"
            emissive="#ff0000"
            emissiveIntensity={6}
            metalness={1}
          />
        </mesh>
      </group>

      {/* PARTICLES */}
      <Sparkles
        count={90}
        scale={[5, 5, 5]}
        size={2}
        speed={0.35}
        color="#ff3030"
      />
    </>
  );
}

export default function EsportsOrb() {
  return (
    <div className="orb-3d">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 42,
        }}
      >
        <ambientLight intensity={0.18} />

        <pointLight
          position={[4, 3, 5]}
          intensity={20}
          color="#ff2020"
        />

        <pointLight
          position={[-4, -2, 3]}
          intensity={8}
          color="#330000"
        />

        <pointLight
          position={[0, 0, 5]}
          intensity={5}
          color="#ffffff"
        />

        <EnergyCore />

        <Environment preset="night" />
      </Canvas>
    </div>
  );
}