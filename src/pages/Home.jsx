import React, { Suspense, lazy } from 'react';
const Navbar = lazy(() =>
  import('../components/layout/Navbar/Navbar')
);
const Hero = lazy(() =>
  import('../components/sections/Hero/Hero')
);

const About = lazy(() =>
  import('../components/sections/About/About')
);

const Skills = lazy(() =>
  import('../components/sections/Skills/Skills')
);

const Projects = lazy(() =>
  import('../components/sections/Projects/Projects')
);

const RoadTimeline = lazy(() =>
  import('../components/timeline/RoadTimeline/RoadTimeline')
);

const Contact = lazy(() =>
  import('../components/sections/Contact/Contact')
);

const Footer = lazy(() =>
  import('../components/layout/Footer/Footer')
);

const Home = () => {
  return (
    <Suspense fallback={<div style={{textAlign:'center'}}>Loading...</div>}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <RoadTimeline />
      <Contact />
      <Footer />
    </Suspense>
  );
};

export default Home;