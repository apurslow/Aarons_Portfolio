/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/crash/untitled.glb -k 
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Crash(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/crash/untitled.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['A_CP3701_Run'].play()
  }, [actions])
  

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="SK_CP3701_Crashao" scale={10}>
          <primitive object={nodes.root} />
          <group name="SK_CP3701_Crashmo">
            <skinnedMesh name="SK_CP3701_Crashmd" geometry={nodes.SK_CP3701_Crashmd.geometry} material={materials.MI_CP3701_Crash_Fur} skeleton={nodes.SK_CP3701_Crashmd.skeleton} />
            <skinnedMesh name="SK_CP3701_Crashmd_1" geometry={nodes.SK_CP3701_Crashmd_1.geometry} material={materials.MI_CP3701_Crash} skeleton={nodes.SK_CP3701_Crashmd_1.skeleton} />
            <skinnedMesh name="SK_CP3701_Crashmd_2" geometry={nodes.SK_CP3701_Crashmd_2.geometry} material={materials.MI_CP3701_Crash_Eyes} skeleton={nodes.SK_CP3701_Crashmd_2.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
} 

useGLTF.preload('/untitled.glb')