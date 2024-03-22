import { useGLTF, Text, Float, MeshTransmissionMaterial } from '@react-three/drei'
import React, { useMemo } from 'react'
import { useThree } from '@react-three/fiber'

export default function Model() {
    const { viewport } = useThree()
    const { nodes } = useGLTF('/musc/shards.glb')

    const scaleFactor = useMemo(() => {
        const aspect = viewport.width / viewport.height;
        // You can adjust this scale factor according to your needs
        return aspect > 1 ? 1 : 0.5;
    }, [viewport.width, viewport.height]);
    
    return (
        <group scale={[scaleFactor, scaleFactor, scaleFactor]}>
        {
            nodes.Scene.children.map((mesh, i) => {
                return <Mesh data={mesh} key={i} />;
            })
        }
        <Font />
    </group>
    )
}

function Font() {
    const src = '/fonts/PPNeueMontreal-Bold.otf'
    const textOption = {
        color: "white",
        anchorX: "center",
        anchorY: "middle"
    }
    return (
        <group>
            <Text font={src} position={[0, 0, -.1]} fontSize={0.4} {...textOption}>
            500
            </Text>
            <Text font={src} position={[0, -.15, -.1]} fontSize={0.03} {...textOption}>
            Internal Server Error
            </Text>
        </group>
    )
}

function Mesh({data}) {

    return (
        <Float>
            <mesh {...data}>
                <MeshTransmissionMaterial roughness={0} transmission={0.99}  resolution={300} chromaticAberration={1.8} ior={1.8} thickness={0.275}/>
            </mesh>
        </Float>
    )
}