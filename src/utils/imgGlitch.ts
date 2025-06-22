import { PowerGlitch } from "powerglitch";

export function setupGlitch() {
    PowerGlitch.glitch(".imgGlitch", { 
        playMode: "hover",
        timing: {
          duration: 3950
        },
        glitchTimeSpan: false,
        shake: {
          velocity: 5
        }
      }
    )
}

document.addEventListener('DOMContentLoaded', setupGlitch)
document.addEventListener('astro:page-load', setupGlitch)