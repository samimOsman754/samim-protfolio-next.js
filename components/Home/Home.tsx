"use client";
import { useEffect } from "react";
import Blog from "./Blog/Blog"
import ClientReview from "./ClientReview/ClientReview"
import Contact from "./Contact/Contact"
import Hero from "./Hero/Hero"
import Projects from "./Projects/Projects"
import Resume from "./Resume/Resume"
import Services from "./Services/Services"
import Skills from "./Skills/Skills"
import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      })
    }
    initAOS();
  }, [])

  return (
    <div className="overflow-hidden ">
      <div id="home">
        <Hero/>
      </div>
      <div id="services">
        <Services/>
      </div>
      <div id="resume">
        <Resume/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id="skills">
        <Skills/>
      </div>
      <div id="testimonials">
        <ClientReview/>
      </div>
      <div id="blog">
        <Blog/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </div>
  )
}

export default Home