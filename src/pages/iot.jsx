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
            <h2 >IoT (INTERNET of THINGS)
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
              <div class="mil-project-cover-service"><img src="img/projects/iot.jpg" alt="IoT"/></div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Overview
              </span>
              <h3 className="mil-mb-30">What is IoT?

</h3>
              <p className="mil-mb-60">
             IoT (Internet of Things) devices are crucial for gathering, transmitting, and analyzing real-time data from physical objects, systems, and environments. By enabling seamless connectivity between sensors, devices, and cloud platforms, IoT solutions enhance automation, improve operational efficiency, and support data-driven decision-making across industries. This connectivity allows for remote monitoring, predictive maintenance, and intelligent control, ultimately leading to cost savings, reduced downtime, enhanced safety, and improved operational insights.
<br/>
We provide end-to-end IoT solutions, including consultation, design, hardware development, firmware engineering, connectivity integration (Wi-Fi, LoRa, NB-IoT, 4G/5G), cloud integration, and data analytics dashboards. Our solutions are tailored to meet client-specific needs, ensuring scalability, security, and reliability. 
<br/>
And have provided end to end IoT solutions in the field of energy monitoring and environment monitoring including temperature and humidity monitoring.

              </p>
              <h3 className="mil-mb-30">The Entesla Advantage
</h3>
              <p className="mil-mb-60">
         End-to-end, future-ready IoT solutions that blend custom hardware, intelligent software, and 24x7 support — all under one roof.


              </p>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-check-icon-list mil-mb-15">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                  Tailor-made IoT devices designed to meet specific operational needs


                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                 Robust cloud integration for seamless data access and analytics


                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                    Energy-efficient designs that lower power consumption


                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                    Advanced security protocols to protect data at every stage


                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <ul className="mil-check-icon-list">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                     Scalable architecture to support future expansions


                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                       Real-time alerts and reporting for proactive decision-making

                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                     Multi-protocol connectivity (Wi-Fi, LoRa, NB-IoT, 4G/5G) for flexibility


                      </span>
                    </li>
                      <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                     Comprehensive support — from R&D to deployment and maintenance


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
          <Link href="project" className="mil-slider-nav">
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
            <Link href="project" className="mil-slider-btn-next mil-blog-next">
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
