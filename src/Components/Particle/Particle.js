import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from 'react';
import './Particle.css'

const Particle = () => {
	
	const particlesInit = async (main) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

	return (
			<div>
				<Particles className = 'animation'
					id='tsparticles'
						init={particlesInit}
						Loaded={particlesLoaded}

						options={
							{
		background: {
          color: {
            value: "linear-gradient(to right, rgb(255, 175, 189), rgb(131, 206, 221))",
          },
        },
        fpsLimit: 30,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
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
            value: "#FFFFFF",
          },
          links: {
            color: "#FFFFFF",
            distance: 150,
            enable: true,
            opacity: 0.3,
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
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "star",
          },
          size: {
            value: { min: 3, max: 5 },
          },
        },
        detectRetina: true,
							}
						}


				/>
			</div>
		);
}

export default Particle;