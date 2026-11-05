"use client";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";

function Room({ styleName }: { styleName: string }) {
  const palette: Record<string, string> = { andalus: "#bd895b", zen: "#b7ad94", safari: "#a9794c", bauhaus: "#b65e45", imperial: "#a88a68", ibiza: "#e7dfd0" };
  const accent = palette[styleName] || "#bd956a";
  return <group>
    <mesh position={[0,-.12,0]} receiveShadow><boxGeometry args={[5.8,.2,4.8]}/><meshStandardMaterial color="#b9a88f" roughness={.9}/></mesh>
    {/* low perimeter walls keep the floor plan readable from above */}
    <mesh position={[0,1.35,-2.35]}><boxGeometry args={[5.8,2.7,.14]}/><meshStandardMaterial color="#e8e0d2"/></mesh>
    <mesh position={[-2.85,1.35,0]}><boxGeometry args={[.14,2.7,4.8]}/><meshStandardMaterial color="#e8e0d2"/></mesh>
    <mesh position={[2.85,1.35,0]}><boxGeometry args={[.14,2.7,4.8]}/><meshStandardMaterial color="#e8e0d2"/></mesh>
    <mesh position={[-1.65,1.35,2.35]}><boxGeometry args={[2.5,2.7,.14]}/><meshStandardMaterial color="#e8e0d2"/></mesh>
    <mesh position={[2.0,1.35,2.35]}><boxGeometry args={[1.7,2.7,.14]}/><meshStandardMaterial color="#e8e0d2"/></mesh>
    {/* glazed patio doors */}
    <mesh position={[.35,1.2,2.34]}><boxGeometry args={[2.2,2.35,.035]}/><meshStandardMaterial color="#8da59d" transparent opacity={.42} metalness={.15} roughness={.15}/></mesh>
    {/* double bed and headboard */}
    <mesh position={[-.85,.18,-.45]}><boxGeometry args={[2.15,.25,2.65]}/><meshStandardMaterial color="#705a48"/></mesh>
    <mesh position={[-.85,.38,-.45]}><boxGeometry args={[2.05,.22,2.5]}/><meshStandardMaterial color="#f0ece3"/></mesh>
    <mesh position={[-.85,.55,-1.3]}><boxGeometry args={[2.05,.22,.72]}/><meshStandardMaterial color="#faf8f1"/></mesh>
    <mesh position={[-.85,.75,-1.78]}><boxGeometry args={[2.25,1.25,.12]}/><meshStandardMaterial color={accent}/></mesh>
    <mesh position={[-2.1,.3,-1.5]}><boxGeometry args={[.48,.55,.48]}/><meshStandardMaterial color="#8a7158"/></mesh>
    {/* desk, chair and television */}
    <mesh position={[1.95,.52,-.7]}><boxGeometry args={[.55,.12,2.05]}/><meshStandardMaterial color="#b68d62"/></mesh>
    <mesh position={[1.95,.25,-.7]}><boxGeometry args={[.12,.5,.12]}/><meshStandardMaterial color="#70583f"/></mesh>
    <mesh position={[1.55,.25,.35]}><boxGeometry args={[.65,.45,.65]}/><meshStandardMaterial color="#d9d1c3"/></mesh>
    <mesh position={[2.76,1.35,-.55]}><boxGeometry args={[.035,.8,1.25]}/><meshStandardMaterial color="#202927" metalness={.3}/></mesh>
    {/* bathroom zone */}
    <mesh position={[1.95,.02,-1.88]}><boxGeometry args={[1.35,.05,.82]}/><meshStandardMaterial color="#d6d3ca"/></mesh>
    <mesh position={[2.15,.25,-1.85]}><boxGeometry args={[.68,.45,.48]}/><meshStandardMaterial color="#f8f7f2"/></mesh>
    <mesh position={[1.35,.35,-1.85]}><cylinderGeometry args={[.25,.25,.6,24]}/><meshStandardMaterial color="#f7f4ed"/></mesh>
    <mesh position={[0,.02,2.85]}><boxGeometry args={[5.5,.08,.85]}/><meshStandardMaterial color="#b9a98f"/></mesh>
    <mesh position={[-2.15,.35,2.85]}><cylinderGeometry args={[.23,.23,.7,20]}/><meshStandardMaterial color="#586d59"/></mesh>
    <mesh position={[2.1,.35,2.85]}><cylinderGeometry args={[.23,.23,.7,20]}/><meshStandardMaterial color="#586d59"/></mesh>
  </group>;
}
export default function BungalowViewer({ styleName }: { styleName: string }) {
  const [view,setView] = useState<"top"|"first">("top");
  const camera = view === "top" ? [0,8,0.01] as [number,number,number] : [0,1.58,1.95] as [number,number,number];
  const target = view === "top" ? [0,0,0] as [number,number,number] : [0,1.45,-1] as [number,number,number];
  return <div className="viewer-canvas bungalow-tour">
    <div className="tour-controls"><button className={view==="top"?"tour-active":""} onClick={()=>setView("top")}>PLANO SUPERIOR</button><button className={view==="first"?"tour-active":""} onClick={()=>setView("first")}>PRIMERA PERSONA</button></div>
    <Canvas key={view} camera={{position:camera,fov:view==="top"?43:72}} dpr={[1,1.5]} shadows>
      <color attach="background" args={["#e7e2d8"]}/><ambientLight intensity={1.35}/><directionalLight position={[4,7,5]} intensity={2} castShadow/>
      <Suspense fallback={null}><Room styleName={styleName}/><Environment preset="city"/><ContactShadows position={[0,-.03,0]} opacity={.28} scale={9} blur={2.5}/></Suspense>
      <OrbitControls target={target} enablePan={false} minDistance={view==="top"?6:1.2} maxDistance={view==="top"?11:4.5} minPolarAngle={view==="top"?0:Math.PI/2.8} maxPolarAngle={view==="top"?Math.PI/2.2:Math.PI/1.85}/>
    </Canvas>
    <span className="viewer-hint">{view==="top"?"VISTA SUPERIOR · ARRASTRA PARA GIRAR":"VISTA A NIVEL DE LOS OJOS · ARRASTRA PARA MIRAR"}</span>
  </div>;
}