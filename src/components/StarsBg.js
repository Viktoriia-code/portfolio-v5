"use client";

import React, { useState, useRef, Suspense, useEffect } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, type PointsProps, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import type { Points as PointsType } from "three";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePause, faCirclePlay } from '@fortawesome/free-solid-svg-icons'

export const StarBackground = (props: PointsProps) => {
  const ref = useRef<PointsType | null>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(6000), { radius: 1.2 })
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={new Float32Array(sphere)}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem("starsBg");
    const value = storedValue ? JSON.parse(storedValue) : false;
    setIsVisible(value);
  }, [])

  const toggleVisibility = () => {
    const newValue = !isVisible;
    setIsVisible(newValue);
    localStorage.setItem("starsBg", JSON.stringify(newValue));
  };

  return (
    <>
      {isVisible ? 
        <button onClick={toggleVisibility} className="cursor-pointer z-[1000] fixed bottom-3 left-3 text-lightBg hover:text-heading transition-all text-2xl" title="Pause">
          <FontAwesomeIcon icon={faCirclePause} />
        </button> 
        : 
        <button onClick={toggleVisibility} className="cursor-pointer z-[1000] fixed bottom-3 left-3 text-lightBg hover:text-heading transition-all text-2xl" title="Play">
          <FontAwesomeIcon icon={faCirclePlay} />
        </button> 
      }
      <div className={` ${isVisible ? 'block' : 'hidden'} w-full h-auto fixed inset-0 z-[20]`}>
          <Canvas camera={{position: [0, 0, 1]}}>
            <Suspense fallback={null}>
              <StarBackground />
            </Suspense>
          </Canvas>
      </div>
    </>
  )
}


export default StarsCanvas;