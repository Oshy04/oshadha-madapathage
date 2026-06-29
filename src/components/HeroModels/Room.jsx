import {useGLTF, useTexture} from '@react-three/drei'
import * as THREE from 'three';
import { asset } from "../../utils/paths.js";

export function Room(props) {
    const matcapTexture = useTexture(asset('/images/textures/mat1.png'));
    const { nodes, materials } = useGLTF(asset('/models/low_poly_-_sci-fi_storage_room_free_download.glb'));
    useGLTF.preload(asset('/models/low_poly_-_sci-fi_storage_room_free_download.glb'));

    const curtainMaterials = new THREE.MeshPhongMaterial({color:'#00FFF7'})

  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.313, 0]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.WALL} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.TEXTURE} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.LIGHT_GREY} />
        <mesh geometry={nodes.Object_7.geometry} material={curtainMaterials} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.DARK_GREY} />
        <mesh geometry={nodes.Object_9.geometry} material={curtainMaterials} />
      </group>
      <group position={[0, 0.122, 0.705]} rotation={[-Math.PI / 2, 0, 0]} scale={0.105}>
        <mesh geometry={nodes.Object_16.geometry} material={materials.FLOOR} />
        <mesh geometry={nodes.Object_17.geometry} material={curtainMaterials} />
        <mesh geometry={nodes.Object_18.geometry} material={curtainMaterials} />
      </group>
      <mesh geometry={nodes.Object_11.geometry} material={materials.WALL} />
      <mesh geometry={nodes.Object_12.geometry} material={curtainMaterials} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.LIGHT_GREY} />
      <mesh geometry={nodes.Object_14.geometry} material={curtainMaterials} />
    </group>
  )
}

useGLTF.preload(asset('/models/low_poly_-_sci-fi_storage_room_free_download.glb'));
