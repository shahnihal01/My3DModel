import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';
import BreakDanceModel from './BreakDance';
import BrooklynUprockModel from './BrooklynUprock';

export default function App() {
   const [dance, setDance] = useState("");
   function danceMoves(){
      // if(dance =="Freeze"){
      //    return(<FreezeModel position={[0.025, -0.9, 0]}/>)
      // }
      if(dance ==="BrooklynUprock"){
         return(<BrooklynUprockModel position={[0.55, -0.9, 0]}/>)
      }
      if(dance ==="BreakDance"){
         return(<BreakDanceModel position={[-0.5, -0.9, 0]}/>)
      }
      if(dance === ""){
         return(<Model position={[0.025, -0.9, 0]}/>)
      }
   }
   return (
      <>
      <Canvas
         camera={{ position: [2, 0, 12.25], fov: 15 }}
         style={{
            backgroundColor: '#111a21',
            width: '100vw',
            height: '95vh',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            {danceMoves()}
         </Suspense>
         <OrbitControls />
      </Canvas>
      <div
      style={{
         display: 'flex',
         flexDirection: 'row',
         justifyContent:'space-evenly',
         backgroundColor: '#111a21',
         width: '100vw',
         height: '5vh',
      }}>
         <button onClick={()=>{setDance("Freeze")}}>Freeze</button>
         <button onClick={()=>{setDance("BrooklynUprock")}}>BrooklynUprock</button>
         <button onClick={()=>{setDance("BreakDance")}}>BreakDance</button>
      </div>
      </>
   );
}