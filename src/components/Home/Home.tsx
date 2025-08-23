import React from "react";
import Hero from "./Hero/Hero";
import Service from "./Services/Service";
import RevealOnScroll from "../Customer/RevealOnScroll";
import Resume from "./Resume/Resume";
import Project from "./Projects/Project";
import Skill from "./Skills/Skill";
import Contact from "./Contact/Contact";
import SectionWrapper from "../Customer/SectionWrapper";
const Home = () => {
  return (
    <div className="overflow-hidden ">
      <SectionWrapper>
        <div id="hero">
          <Hero />
        </div>
      </SectionWrapper>

      <div id="service">
        <Service />
      </div>

      <SectionWrapper>
        <div id="resume">
          <Resume />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div id="project">
          <Project />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div id="skill">
          <Skill />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Home;
