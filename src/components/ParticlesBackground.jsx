import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles Loaded", container);
  };

  if (!init) return null;

  return (
    
    <div className="fixed inset-0 -z-10">
      <Particles id="tsparticles" url="/particles.json" particlesLoaded={particlesLoaded} />
    </div>
  );
};

export default ParticlesBackground;
