import React from "react";
import Layouts from "../layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "../lib/posts";
import { getSortedProjectsData } from "../lib/projects";

import PartnersSection from "../components/sections/Partners";
import ServicesSection from "../components/sections/Services";
import HowItWorksSection from "../components/sections/HowItWorks";
import SkillsSection from "../components/sections/Skills";
import ContactSection from "../components/sections/Contact";
import Divider from "../components/sections/Divider";

const LatestProjectsSlider = dynamic( () => import("../components/sliders/LatestProjects"), { ssr: false } );
const LatestPostsSlider = dynamic( () => import("../components/sliders/LatestPosts"), { ssr: false } );
const HeroSlideshowSlider = dynamic( () => import("../components/sliders/HeroSlideshow"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("../components/sliders/Testimonial"), { ssr: false } );

const Home1 = (props) => {
  return (
    <Layouts transparent>
      <HeroSlideshowSlider />
    
      <Divider />
      {/* <ServicesSection /> */}

<div className="container">
<div className="feature">
        <div className="row">
<div className="col-lg-4">

<div class="mil-hover-card"><h4 class="mil-mb-30">Hardware</h4>
<p class="mil-mb-50">Built for dedicated functions, optimized for performance, reliability, compact design, and low energy usage
</p>
<div class="mil-divider mil-divider-left mil-mb-50"></div>
<ul class="mil-simple-list mil-mb-50">
  <li>Microcontroller Unit (MCU)
</li>
  <li>Digital & Analog Interfaces</li>
  <li>Embedded Memory
</li>
  <li>Cloud Integration</li></ul>
  </div>



          </div>

<div className="col-lg-4">

<div class="mil-hover-card"><h4 class="mil-mb-30">Firmware</h4>
<p class="mil-mb-50">Dedicated code managing device-level tasks like scheduling, I/O, and network communication

</p>
<div class="mil-divider mil-divider-left mil-mb-50"></div>
<ul class="mil-simple-list mil-mb-50">
  <li>Optimized Resource Usage
</li>
  <li>Real-Time Execution
</li>
  <li>Rapid Responsiveness
</li>
  <li>Secure Operation
</li></ul>
  </div>

</div>

         
<div className="col-lg-4">

<div class="mil-hover-card"><h4 class="mil-mb-30">Software</h4>
<p class="mil-mb-50">Interface between user and device enabling live monitoring, control, and analysis

</p>
<div class="mil-divider mil-divider-left mil-mb-50"></div>
<ul class="mil-simple-list mil-mb-50">
  <li>Human-Machine Interface

</li>
  <li>Data Storage & Access</li>
  <li>Processing Algorithms

</li>
  <li>Remote Management</li></ul>
  </div>

</div>

          </div>
</div>
</div>
      <Divider />
       
      {/* <TestimonialSlider /> */}
     
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const allProjects = getSortedProjectsData();

  return {
    props: {
      posts: allPosts,
      projects: allProjects
    }
  }
}
