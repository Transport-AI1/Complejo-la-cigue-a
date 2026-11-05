"use client";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
function Cabin({styleName}:{styleName:string}) {
  const palette:Record<string,string>={andalus:"#c58a52",zen:"#b5a98b",safari:"#a9794c",bauhaus:"#b65e45",imperial:"#a88a68",ibiza:"#e7dfd0"};
  const accent=palette[styleName]||"#bd956a";
  return <group position={[0,-.15,0]}>
    <mesh position={[0,0.95,0]} castShadow><boxGeometry args={[2.9,1.85,2.1]}/><meshStandardMaterial color="#d6c7ae" roughness={.82}/></mesh>
    <mesh position={[0,1.95,0]} rotation={[0,0,Math.PI/2]} castShadow><coneGeometry args={[1.72,1.25,4]}/><meshStandardMaterial color={accent} roughness={.8}/></mesh>
    <mesh position={[0,.58,1.065]}><boxGeometry args={[1.2,1.1,.035]}/><meshStandardMaterial color="#5a6d68" roughness={.3}/></mesh>
    <mesh position={[-.95,.6,1.08]}><boxGeometry args={[.55,.85,.04]}/><meshStandardMaterial color="#46534b"/></mesh>
    <mesh position={[.72,.42,-.2]}><boxGeometry args={[.9,.48,.65]}/><meshStandardMaterial color={accent}/></mesh>
    <mesh position={[0,.08,0]}><boxGeometry args={[3.15,.16,2.35]}/><meshStandardMaterial color="#655a4d"/></mesh>
    <mesh position={[0,2.65,0]}><boxGeometry args={[3.2,.08,2.4]}/><meshStandardMaterial color="#5c5145"/></mesh>
    <mesh position={[0,.18,1.65]}><boxGeometry args={[3.6,.12,1.05]}/><meshStandardMaterial color="#a99a82"/></mesh>
    <mesh position={[-1.05,.36,1.6]}><boxGeometry args={[.12,.36,.12]}/><meshStandardMaterial color="#514c40"/></mesh>
    <mesh position={[1.05,.36,1.6]}><boxGeometry args={[.12,.36,.12]}/><meshStandardMaterial color="#514c40"/></mesh>
  </group>;
}
export default function BungalowViewer({styleName}:{styleName:string}) {
  return <div className="viewer-canvas"><Canvas camera={{position:[4,3.2,5],fov:42}} dpr={[1,1.5]} shadows><color attach="background" args={["#e7e2d8"]}/><ambientLight intensity={1.25}/><directionalLight position={[4,7,5]} intensity={2} castShadow/><Suspense fallback={null}><Cabin styleName={styleName}/><Environment preset="city"/><ContactShadows position={[0,-.08,0]} opacity={.32} scale={8} blur={2.5}/></Suspense><OrbitControls enablePan={false} minDistance={3.8} maxDistance={8} maxPolarAngle={Math.PI/2.05}/></Canvas><span className="viewer-hint">ARRASTRA PARA GIRAR · SCROLL PARA ZOOM</span></div>;
}