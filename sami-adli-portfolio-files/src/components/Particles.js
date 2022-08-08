import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";




const ParticlesComponent = () => {


    const options = useMemo(() => {

        return{
            pauseOnBlur: true,
            fpsLimit: 60,
            interactivity:{
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                },
            },
            particles:{
                color:{
                    value: "#FF6F59"

                },
                density: {
                    enable: true,
                    value_area: 600 ,
                },
                move: {
                    enable: true,
                    speed: {min: 1, max: 2},
                },
                opacity: {
                    value: {min: 0.3, max: 0.9},
                },
                size: {
                    value: {min: 1, max: 3},

                },
            },
            number: {
               value:  10,
               limit: 10,
               density:{
                enable: false,
                area: 200,
               }
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