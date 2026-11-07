"use client";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Suspense, useMemo, useState } from "react";

type Model = "standard" | "deluxe" | "suite";
type Props = { styleName: string; model?: Model };

const palettes: Record<string, string> = {
  andalus: "#bd895b", zen: "#b7ad94", safari: "#a9794c",
  bauhaus: "#b65e45", imperial: "#a88a68", ibiza: "#e7dfd0"
};

function Furnishings({ model, accent }: { model: Model; accent: string }) {
  const isStandard = model === "standard";
  const isSuite = model === "suite";
  const width = isStandard ? 5 : isSuite ? 5.5 : 6;
  const depth = isStandard ? 5 : isSuite ? 9 : 7.5;
  const bedW = isStandard ? 1.5 : isSuite ? 1.8 : 1.8;
  const bedD = isStandard ? 1.9 : 2;
  const bedZ = isSuite ? -2.25 : -1.25;
  const bedX = isStandard ? -0.8 : 0;
  const bathW = isStandard ? 2 : isSuite ? 2.4 : 2.5;
  const bathD = isStandard ? 1.5 : isSuite ? 2.5 : 2;
  const bathX = width/2 - bathW/2;
  const bathZ = -depth/2 + bathD/2;
  return <group>
    {/* Open-plan sleeping / living zone */}
    <mesh position={[bedX,.16,bedZ]} castShadow><boxGeometry args={[bedW+.18,.28,bedD+.18]}/><meshStandardMaterial color="#806b57"/></mesh>
    <mesh position={[bedX,.34,bedZ]} castShadow><boxGeometry args={[bedW,.16,bedD]}/><meshStandardMaterial color="#f4f0e8"/></mesh>
    <mesh position={[bedX-bedW*.25,.45,bedZ-bedD*.28]}><boxGeometry args={[.52,.12,.42]}/><meshStandardMaterial color="#fffdf8"/></mesh>
    <mesh position={[bedX+bedW*.25,.45,bedZ-bedD*.28]}><boxGeometry args={[.52,.12,.42]}/><meshStandardMaterial color="#fffdf8"/></mesh>
    <mesh position={[bedX,.95,bedZ-bedD/2-.08]}><boxGeometry args={[bedW+.18,1.15,.12]}/><meshStandardMaterial color={accent}/></mesh>
    <mesh position={[-width/2+.42,.28,bedZ-bedD/2]}><boxGeometry args={[.48,.5,.48]}/><meshStandardMaterial color="#9b8064"/></mesh>
    <mesh position={[width/2-.42,.28,bedZ-bedD/2]}><boxGeometry args={[.48,.5,.48]}/><meshStandardMaterial color="#9b8064"/></mesh>
    {/* Standard has a compact entrance / TV / minibar zone */}
    <mesh position={[isSuite?-.9:0,.48,depth/2-.85]}><boxGeometry args={[isSuite?1.8:1.35,.12,.48]}/><meshStandardMaterial color="#a9815d"/></mesh>
    <mesh position={[isSuite?-.9:0,.25,depth/2-.85]}><boxGeometry args={[.1,.5,.1]}/><meshStandardMaterial color="#70583f"/></mesh>
    <mesh position={[width/2-.22,1.3,0]}><boxGeometry args={[.06,.85,1.2]}/><meshStandardMaterial color="#202927" metalness={.25}/></mesh>
    {!isStandard && <group>
      <mesh position={[-width/2+.75,.38,.95]}><boxGeometry args={[1.1,.72,1.05]}/><meshStandardMaterial color={isSuite?"#b7a18a":"#c3b6a2"}/></mesh>
      <mesh position={[-width/2+.75,.76,.95]}><boxGeometry args={[1.1,.12,1.05]}/><meshStandardMaterial color="#e5ddd0"/></mesh>
      <mesh position={[width/2-.85,.42,1.55]}><boxGeometry args={[1.15,.08,.55]}/><meshStandardMaterial color="#9b7959"/></mesh>
      <mesh position={[width/2-.85,.22,1.55]}><boxGeometry args={[.08,.42,.08]}/><meshStandardMaterial color="#70583f"/></mesh>
    </group>}
    {isSuite && <group>
      {/* Family lounge and sofa-bed */}
      <mesh position={[0,.35,3.05]}><boxGeometry args={[2.5,.65,.85]}/><meshStandardMaterial color="#b5a18c"/></mesh>
      <mesh position={[0,.72,3.05]}><boxGeometry args={[2.5,.18,.85]}/><meshStandardMaterial color="#e8dfd2"/></mesh>
      <mesh position={[0,.08,2.1]}><boxGeometry args={[.95,.12,.55]}/><meshStandardMaterial color="#806b57"/></mesh>
      {/* Open divider / screen separating bedroom */}
      <mesh position={[-1.1,1.15,-.55]}><boxGeometry args={[.08,2.3,1.65]}/><meshStandardMaterial color="#987451"/></mesh>
    </group>}
    {/* Bathroom module in the rear corner; partial glass in Deluxe */}
    <mesh position={[bathX,.04,bathZ]}><boxGeometry args={[bathW,.08,bathD]}/><meshStandardMaterial color="#d7d5ce"/></mesh>
    <mesh position={[bathX+bathW*.22,.35,bathZ+bathD*.2]}><boxGeometry args={[.58,.65,.48]}/><meshStandardMaterial color="#faf9f4"/></mesh>
    <mesh position={[bathX-bathW*.23,.48,bathZ-bathD*.2]}><cylinderGeometry args={[.22,.22,.8,24]}/><meshStandardMaterial color="#f7f4ed"/></mesh>
    <mesh position={[bathX,.06,bathZ-bathD*.28]}><boxGeometry args={[Math.min(1.2,bathW*.55),.06,.8]}/><meshStandardMaterial color="#b8c5c1" transparent opacity={.8}/></mesh>
    {model === "deluxe" && <mesh position={[bathX-bathW/2,.95,bathZ]}><boxGeometry args={[.035,1.8,bathD]}/><meshStandardMaterial color="#9db1ad" transparent opacity={.28}/></mesh>}
    {/* Front porch / terrace */}
    <mesh position={[0,-.02,depth/2+.9]} receiveShadow><boxGeometry args={[width,.12,1.8]}/><meshStandardMaterial color="#b69c7b"/></mesh>
    {[-1,1].map(side=><group key={side}>
      <mesh position={[side*(width/2-.15),.85,depth/2+1.65]}><boxGeometry args={[.16,1.7,.16]}/><meshStandardMaterial color="#77583d"/></mesh>
      <mesh position={[side*(width/2-.15),.5,depth/2+.9]}><boxGeometry args={[.12,.9,1.6]}/><meshStandardMaterial color="#77583d"/></mesh>
    </group>)}
    <mesh position={[0,1.35,depth/2-.08]}><boxGeometry args={[1.5,2.35,.035]}/><meshStandardMaterial color="#8da59d" transparent opacity={.34} roughness={.15}/></mesh>
  </group>;
}

function Building({ model, styleName }: { model: Model; styleName: string }) {
  const dims = model === "standard" ? [5,5] : model === "deluxe" ? [6,7.5] : [5.5,9];
  const [w,d] = dims;
  const wall = .16;
  const accent = palettes[styleName] || "#bd956a";
  return <group>
    <mesh position={[0,-.12,0]} receiveShadow><boxGeometry args={[w,.22,d]}/><meshStandardMaterial color="#c5b49b" roughness={.9}/></mesh>
    {/* Cutaway walls: deliberately lowered so the complete plan remains visible */}
    <mesh position={[0,.8,-d/2]}><boxGeometry args={[w,1.6,wall]}/><meshStandardMaterial color="#e9e1d5"/></mesh>
    <mesh position={[-w/2,.8,0]}><boxGeometry args={[wall,1.6,d]}/><meshStandardMaterial color="#e9e1d5"/></mesh>
    <mesh position={[w/2,.8,0]}><boxGeometry args={[wall,1.6,d]}/><meshStandardMaterial color="#e9e1d5"/></mesh>
    <mesh position={[-w/2*.55,.8,d/2]}><boxGeometry args={[w*.42,1.6,wall]}/><meshStandardMaterial color="#e9e1d5"/></mesh>
    <mesh position={[w*.43,.8,d/2]}><boxGeometry args={[w*.14,1.6,wall]}/><meshStandardMaterial color="#e9e1d5"/></mesh>
    <Furnishings model={model} accent={accent}/>
    {/* Suggested gable roof is shown as a light wireframe canopy */}
    <mesh position={[0,2.65,0]} rotation={[0,0,0]}>
      <boxGeometry args={[w+.25,.08,d+.25]}/>
      <meshStandardMaterial color={accent} transparent opacity={.12} wireframe/>
    </mesh>
  </group>;
}

export default function BungalowViewer({ styleName, model = "deluxe" }: Props) {
  const [view,setView] = useState<"top"|"first">("top");
  const camera = view === "top" ? [0,Math.max(8,model==="suite"?12:9),.01] as [number,number,number] : [0,1.58,model==="suite"?3.1:2.1] as [number,number,number];
  const target = view === "top" ? [0,0,0] as [number,number,number] : [0,1.25,-1] as [number,number,number];
  const label = model === "standard" ? "STANDARD · 25 m² + PORCHE" : model === "deluxe" ? "DELUXE · 45 m² + PORCHE" : "SUITE · 33–55 m²";
  return <div className="viewer-canvas bungalow-tour">
    <div className="tour-controls">
      <button className={view==="top"?"tour-active":""} onClick={()=>setView("top")}>PLANO SUPERIOR</button>
      <button className={view==="first"?"tour-active":""} onClick={()=>setView("first")}>PRIMERA PERSONA</button>
    </div>
    <Canvas key={view+model} camera={{position:camera,fov:view==="top"?43:72}} dpr={[1,1.5]} shadows>
      <color attach="background" args={["#e7e2d8"]}/><ambientLight intensity={1.2}/><directionalLight position={[4,8,5]} intensity={2} castShadow/>
      <Suspense fallback={null}><Building model={model} styleName={styleName}/><ContactShadows position={[0,-.03,0]} opacity={.25} scale={12} blur={2.5}/></Suspense>
      <OrbitControls target={target} enablePan={false} minDistance={view==="top"?7:1.2} maxDistance={view==="top"?14:5} minPolarAngle={view==="top"?0:Math.PI/2.8} maxPolarAngle={view==="top"?Math.PI/2.2:Math.PI/1.85}/>
    </Canvas>
    <span className="viewer-hint">{label} · {view==="top"?"ARRASTRA PARA GIRAR":"MIRA A TU ALREDEDOR"}</span>
  </div>;
}
