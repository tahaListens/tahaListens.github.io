import React from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Import the slim version

const ParticlesBackground = () => {
    const particlesInit = async (engine) => {
        await loadSlim(engine); // Load the slim version
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "#000", // Background color
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff", // Particle color
                    },
                    links: {
                        color: "#ffffff", // Link color between particles
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2, // Speed of particles
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80, // Number of particles
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle", // Particle shape
                    },
                    size: {
                        value: { min: 1, max: 5 }, // Particle size
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground;