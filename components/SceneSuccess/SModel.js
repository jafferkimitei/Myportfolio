import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'

export default function Model() {
    const { nodes } = useGLTF("/musc/torrus.glb");
    const { viewport } = useThree()
    const torus = useRef(null);
    
    useFrame( () => {
        torus.current.rotation.x += 0.02
    })

    const scaleFactor = viewport.width / 3.75;
    
    return (
        <group scale={[scaleFactor, scaleFactor, scaleFactor]}>
            <Text font={'/fonts/PPNeueMontreal-Bold.otf'} position={[0, 0, -1]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
                Thank you for your submission!
            </Text>
            <Text font={'/fonts/PPNeueMontreal-Bold.otf'} position={[0, -1, -2]} fontSize={0.1} color="white" anchorX="center" anchorY="middle">
            We will get back to you soon!
            </Text>
            <Text font={'/fonts/Brushstrike.ttf'} position={[0, -2, -2]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
            Yung Havy
            </Text>
        
            <mesh ref={torus} {...nodes.Torus002}>
                <MeshTransmissionMaterial roughness={0} thickness={0.2} transmission={1} ior={1.2} chromaticAberration={0.02} backside={true}/>
            </mesh>
        </group>
    )
}