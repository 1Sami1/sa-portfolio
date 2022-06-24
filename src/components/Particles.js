import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
// import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";


const ParticlesComponent = () => {
    const options = useMemo(() => {
        return{
            fpsLimit: 120,
            interactivity:{
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
                        quantity: 5,
                    },
                    repulse: {
                        distance: 100,
                    },
                },
            },
            particles:{
                color:{
                    value: "#FF6F59"

                },
                links: {
                    enable: true,
                    color : "#E0E0E2",
                    opacity: 0.3,
                },
                move: {
                    enable: true,
                    speed: {min: 1, max: 3},
                },
                opacity: {
                    value: {min: 0.3, max: 0.9},
                },
                size: {
                    value: {min: 1, max: 3},

                },
            }
        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine)
    }, []);

    return(
        <Particles className="bg-particles" init={particlesInit} options={options} />
    )

};

export default ParticlesComponent;