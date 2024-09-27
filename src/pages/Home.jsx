import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomeBanner from '../components/HomeBanner';
import Navbar from '../components/Navbar';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Clients from './Clients';
import Footer from '../components/Footer';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useGSAP(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Horizontal scroll for large screens
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + (container.offsetWidth * (sections.length - 1)),
          invalidateOnRefresh: true
        }
      });
    });

    mm.add("(max-width: 1023px)", () => {
      
      gsap.set(sections, { xPercent: 0 });
      
      ScrollTrigger.getAll().forEach(st => st.kill());
      
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      mm.revert();
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-[2rem] md:top-[5rem] left-[3rem] md:left-[5rem] z-50 bg-white rounded-3xl">
        <Navbar />
      </div>
      <div 
        ref={containerRef} 
        className="lg:flex lg:overflow-x-hidden"
      >
        {[
          <HomeBanner key="home" />,
          <About key="about" />,
          <Services key="services" />,
          <Projects key="projects" />,
          <Clients key="clients" />,
          <Footer key="footer" />
        ].map((component, index) => (
          <div 
            key={index} 
            ref={el => sectionsRef.current[index] = el} 
            className="w-full min-h-screen lg:w-screen lg:h-screen lg:flex-shrink-0"
          >
            {component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;