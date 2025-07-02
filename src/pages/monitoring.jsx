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
            <h2 className="mil-uppercase">Monitoring</h2>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* project */}
      <section className="mil-p-120-90">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between">
            <div className="col-lg-5 col-xl-4">
              <div class="mil-project-cover-service"><img src="img/projects/monitoring.jpg" alt="Monitoring"/></div>
            </div>
            <div className="col-lg-6 col-xl-7">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Overview
              </span>
              <h3 className="mil-mb-30">Why Monitoring?
</h3>
              <p className="mil-mb-60">
               Monitoring solutions are essential for tracking, analyzing, and managing critical parameters of physical systems, assets, and environments in real time. Our state-of-the-art, customized monitoring systems empower clients with continuous visibility and actionable insights, enabling smarter operations and faster responses. By integrating advanced sensors, edge computing, and robust communication technologies, our solutions support precise data acquisition and intelligent alerting. This ensures optimal performance, enhanced safety, regulatory compliance, and reduced operational risks. We deliver end-to-end monitoring services, covering consultation, hardware design, sensor integration, wireless connectivity, data visualization dashboards, and cloud-based analytics—tailored to client-specific requirements for scalability, accuracy, and reliability. Our expertise spans applications such as energy monitoring, temperature and humidity control, air quality assessment, and industrial equipment monitoring.

              </p>
              <h3 className="mil-mb-30">The Entesla Advantage
</h3>
              <p className="mil-mb-60">
           Precision-engineered monitoring systems that deliver actionable insights, enhanced safety, and operational excellence — crafted uniquely for every client.

              </p>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-check-icon-list mil-mb-15">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                      Fully customized monitoring solutions designed for industry-specific requirements

                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                     High-accuracy sensors and electronics for reliable, real-time data capture

                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                     Modular hardware and software architecture for easy upgrades and scalability

                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                       Integrated data dashboards with intuitive visualizations for faster decisions

                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <ul className="mil-check-icon-list">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                      Rugged, environment-resistant designs for challenging operational conditions

                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                       Low-latency alerting and reporting to enable immediate corrective actions
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                       Secure end-to-end data flow with encryption and tamper detection

                      </span>
                    </li>
                      <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                     Lifecycle support — from prototyping to deployment, calibration, and beyond

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
          <Link href="customDesign" className="mil-slider-nav">
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
            <Link href="mobileApp" className="mil-slider-btn-next mil-blog-next">
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
