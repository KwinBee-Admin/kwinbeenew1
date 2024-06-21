import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { MTLLoader, OBJLoader } from 'three-stdlib';

const Model = ({ objPath, mtlPath, texturePath, position, rotation }) => {
  const materials = useLoader(MTLLoader, mtlPath);
  const obj = useLoader(OBJLoader, objPath, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  const texture = useTexture(texturePath);
  obj.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture;
      child.material.needsUpdate = true;
    }
  });

  const group = useRef();

  return (
    <primitive
      ref={group}
      object={obj}
      position={position}
      rotation={rotation}
      scale={0.4}
    />
  );
};

const Scene = () => {
  const [rotation, setRotation] = useState([Math.PI / 2.08, 3.15, 5.08]);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const queenPaths = {
    obj: '12933_Wooden_Chess_Queen_side_b_v1_l3.obj',
    mtl: '12933_Wooden_Chess_Queen_side_b_v1_l3.mtl',
    texture: '12933_WoodenChessQueenSideB_diffuse.jpg',
  };

  // Update rotation based on pointer position
  useEffect(() => {
    const handlePointerMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setPointer({ x, y });

      const newRotationX = Math.PI / 2.08 + y * 0.2; // Adjust factor as needed
      const newRotationY = 3.15 + x * 0.2; // Adjust factor as needed
      setRotation([newRotationX, newRotationY, 5.08]);
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 50 }} style={{ width: '50%', height: '20vw' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 4, 5]} />
      <Model 
        objPath={queenPaths.obj} 
        mtlPath={queenPaths.mtl} 
        texturePath={queenPaths.texture} 
        position={[5, -1, 0]} 
        rotation={rotation}
      />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Scene;
