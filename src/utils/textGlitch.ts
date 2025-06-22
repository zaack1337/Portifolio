import { PowerGlitch } from "powerglitch";

export function setupGlitch() {
    PowerGlitch.glitch(".textGlitch")
}

document.addEventListener('DOMContentLoaded', setupGlitch)
document.addEventListener('astro:page-load', setupGlitch)