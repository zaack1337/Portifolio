import React, { useEffect } from "react";
import { PowerGlitch } from "powerglitch"

PowerGlitch.glitch(".imgGlitch")


const asciiName = `
__________                     __    ____________ _________________ 
\\____    /____  _____    ____ |  | _/_   \\_____  \\\\_____  \\______  \\
  /     /\\__  \\ \\__  \\ _/ ___\\|  |/ /|   | _(__  <  _(__  <   /    /
 /     /_ / __ \\_/ __ \\\\  \\___|    < |   |/       \\/       \\ /    / 
/_______ (____  (____  /\\___  >__|_ \\|___/______  /______  //____/  
        \\/    \\/     \\/     \\/     \\/           \\/       \\/         
`;


export default function Perfil() {
  useEffect(() => {
    PowerGlitch.glitch(
      ".imgGlitch",
      {        
        playMode: "hover",
        timing: {
          duration: 3950
        },
        glitchTimeSpan: false,
        shake: {
          velocity: 5
        }
      }
    );
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-8 space-y-6">
        <img
          src="/portifoliophoto.jpg"
          alt="Zaack"
          className="w-56 h-56 rounded-full border-2 imgGlitch"
        />
        <pre
          className="text-xs leading-none text-green-400 text-center
      text-[9px] sm:text-xs md:text-sm lg:text-base whitespace-pre-wrap"
        >
          {asciiName}
        </pre>
        <a href="/about" className="text-3xl text-blue-700 hover:text-blue-900 underline">本物のハッカー</a>
        <img src="/612d03a5fe2fdd00041d6f56.png" alt="" className="w-[400px]" />
      </div>
    </>
  )
}
