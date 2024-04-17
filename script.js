import gsap from "gsap-trial";
import ScrambleTextPlugin from "gsap/dist/ScrambleTextPlugin";

export function scramble() {
    const tls = gsap.timeline({ defaults: { duration: 2 } });
    // const nom = document.getElementById(val);
    tls.to("#jo", {
        duration: 1,
        scrambleText: {
            text: "Johnny",
            chars: "0100",
            revealDelay: 0.5,
            speed: 0.3
        }
    });

}



gsap.registerPlugin(ScrambleTextPlugin);