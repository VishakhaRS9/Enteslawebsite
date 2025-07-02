import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Project = () => {
  return (
    <Layouts>
      {/* banner */}
      <div className="mil-banner-sm mil-deep-bg">
        <img
          src="img/deco/map.png"
          alt="background"
          className="mil-background-image"
        />
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}
        />
        <div className="mil-banner-content">
          <div className="container mil-relative">
            <Link href="services" className="mil-link link-left mil-mb-30">
              <i className="fas fa-arrow-left" />
              <span>Services</span>
            </Link>
            <h2 className="mil-uppercase">Customised Design Services
</h2>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* project */}
      <section className="mil-p-120-90">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between">
            <div className="col-lg-5 col-xl-4">
              <div class="mil-project-cover-info"><img src="img/projects/customDesign.jpg" alt="Customised Design"/></div>
            </div>
            <div className="col-lg-6 col-xl-7">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Overview
              </span>
              <h3 className="mil-mb-30">Design service expertise


</h3>
              <p className="mil-mb-60">
             We specialize in delivering state-of-the-art customised electronic systems engineered to meet the precise needs of each client. Our 360-degree design expertise spans concept development, advanced circuit and PCB architecture, embedded firmware, enclosure and thermal design, and intuitive human-machine interfaces. These bespoke solutions enable intelligent control, real-time monitoring, and process optimisation with exceptional precision and reliability. By integrating cutting-edge technologies—microcontrollers, Single Board Computers, sensors, and connectivity modules—we create scalable, robust, and future-ready systems. Our end-to-end approach ensures seamless integration with existing infrastructure, driving smarter operations, enhanced efficiency, and superior operational intelligence across industries.


              </p>
              <h3 className="mil-mb-30">The Entesla Advantage
</h3>
              <p className="mil-mb-60">
    Custom-engineered electronic systems designed from the ground up to deliver precision control, seamless monitoring, and future-proof performance.



              </p>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-check-icon-list mil-mb-15">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
             End-to-end customised hardware and system design tailored to client-specific requirements


                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
             Advanced circuit, PCB, and enclosure engineering optimised for performance, reliability, and durability



                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                 Embedded firmware and software development for intelligent system behaviour and automation



                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                   Integration of cutting-edge technologies including microcontrollers, SBCs, sensors, and connectivity modules



                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <ul className="mil-check-icon-list">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                    Scalable architecture to support future enhancements, feature expansion, and system upgrades


                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                      Compliance-focused design meeting industry standards for safety, EMC, and environmental resilience

                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                   Seamless interoperability with existing infrastructure, protocols, and third-party systems



                      </span>
                    </li>
                      <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                Comprehensive validation, testing, and support to ensure long-term operational excellence


                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* project end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
     
      <div className="container">
        <div className="mil-divider" />
      </div>
     
      <div className="container">
        <div className="mil-divider mil-mb-60" />
      </div>
      {/* pagination */}
      <div className="container mil-mb-120">
        <div className="mil-pagination mil-hidden-button">
          <Link href="iot" className="mil-slider-nav">
            <div className="mil-slider-btn-prev mil-button-sm mil-blog-prev">
              <i className="fas fa-arrow-left" />
              <span className="mil-h6">Prev</span>
            </div>
          </Link>
          <Link href="services" className="mil-button-all">
            <span>
              <i className="fas fa-list" />
            </span>
          </Link>
          <div className="mil-slider-nav">
            <Link href="monitoring" className="mil-slider-btn-next mil-blog-next">
              <span className="mil-h6">Next</span>
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
      {/* pagination end */}
    </Layouts>
  );
};
export default Project;
