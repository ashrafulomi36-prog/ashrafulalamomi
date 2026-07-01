"use client";
/* eslint-disable react-hooks/immutability, react-hooks/purity, react-hooks/refs, react-hooks/set-state-in-effect --
   This component uses react-three-fiber's useFrame, which runs its callback outside React's render
   cycle on every animation frame. Mutating typed-array buffers and refs there is the standard,
   documented R3F pattern for 60fps imperative updates and is intentionally exempt from the
   React Compiler's purity assumptions, which target component render bodies, not the R3F frame loop. */

import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "next-themes";

const PARTICLE_COUNT = 90;

function ParticleField({ color }: { color: string }) {
  const pointsRef = React.useRef<THREE.Points>(null);
  const linesRef = React.useRef<THREE.LineSegments>(null);
  const { viewport } = useThree();
  const mouse = React.useRef({ x: 0, y: 0 });

  const { positions, velocities } = React.useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const velocities = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      velocities[i * 3] = (Math.random() - 0.5) * 0.004;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.004;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }
    return { positions, velocities };
  }, []);

  const lineGeometryRef = React.useRef<THREE.BufferGeometry>(new THREE.BufferGeometry());
  const linePositionsRef = React.useRef<Float32Array>(
    new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 3)
  );

  React.useEffect(() => {
    function handlePointerMove(e: PointerEvent) {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useFrame(() => {
    const points = pointsRef.current;
    const lines = linesRef.current;
    if (!points || !lines) return;

    const posAttr = points.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    const targetX = mouse.current.x * viewport.width * 0.15;
    const targetY = mouse.current.y * viewport.height * 0.15;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ix = i * 3;
      arr[ix] += velocities[ix];
      arr[ix + 1] += velocities[ix + 1];
      arr[ix + 2] += velocities[ix + 2];

      arr[ix] += (targetX - arr[ix]) * 0.0006;
      arr[ix + 1] += (targetY - arr[ix + 1]) * 0.0006;

      if (arr[ix] > 5.5 || arr[ix] < -5.5) velocities[ix] *= -1;
      if (arr[ix + 1] > 3.5 || arr[ix + 1] < -3.5) velocities[ix + 1] *= -1;
      if (arr[ix + 2] > 2.2 || arr[ix + 2] < -2.2) velocities[ix + 2] *= -1;
    }
    posAttr.needsUpdate = true;

    const linePositions = linePositionsRef.current;
    const lineGeometry = lineGeometryRef.current;

    let vertexCount = 0;
    const connectDist = 1.7;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = arr[i * 3] - arr[j * 3];
        const dy = arr[i * 3 + 1] - arr[j * 3 + 1];
        const dz = arr[i * 3 + 2] - arr[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < connectDist) {
          linePositions[vertexCount++] = arr[i * 3];
          linePositions[vertexCount++] = arr[i * 3 + 1];
          linePositions[vertexCount++] = arr[i * 3 + 2];
          linePositions[vertexCount++] = arr[j * 3];
          linePositions[vertexCount++] = arr[j * 3 + 1];
          linePositions[vertexCount++] = arr[j * 3 + 2];
        }
      }
    }
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions.subarray(0, vertexCount), 3)
    );
    lineGeometry.setDrawRange(0, vertexCount / 3);
    lineGeometry.attributes.position.needsUpdate = true;
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={PARTICLE_COUNT}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color={color} size={0.045} sizeAttenuation transparent opacity={0.85} />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometryRef.current}>
        <lineBasicMaterial color={color} transparent opacity={0.12} />
      </lineSegments>
    </group>
  );
}

export function HeroCanvas() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const color = mounted && resolvedTheme === "dark" ? "#34e0a1" : "#0f9d63";

  return (
    <div className="absolute inset-0 -z-10" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ParticleField color={color} />
      </Canvas>
    </div>
  );
}
