import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { MTLLoader, OBJLoader } from 'three-stdlib';

const Model = ({ objPath, mtlPath, texturePath, position, rotation, visible }) => {
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
      scale={0.3} // Adjust scale to make the piece smaller
      visible={visible}
    />
  );
};

export default Model;
