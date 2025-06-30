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
            <Link href="portfolio" className="mil-link link-left mil-mb-30">
              <i className="fas fa-arrow-left" />
              <span>Services</span>
            </Link>
            <h2 className="mil-uppercase">Mobile App Development</h2>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* project */}
      <section className="mil-p-120-90">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between">
            <div className="col-lg-4 col-xl-3">
              <div class="mil-project-cover-info"><img src="img/projects/Info.jpg" alt="Info"/></div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Overview
              </span>
              <h3 className="mil-mb-30">Mobile apps and electronics?

</h3>
              <p className="mil-mb-60">
               Yes. Mobile app development is an integral part of delivering complete and user-friendly solutions for modern electronics as well as monitoring systems. Our customized mobile applications empower clients to seamlessly control, monitor, and analyze their systems in real time—anytime, anywhere. Designed to complement our state-of-the-art electronics and IoT devices, these apps provide intuitive interfaces, secure connectivity, and advanced features such as remote control, instant alerts, and data visualization. We offer end-to-end mobile app development services, covering UI/UX design, cross-platform development (Android/iOS), API integration, and cloud connectivity. Our apps are built to ensure scalability, robust security, and smooth performance, delivering actionable insights and enhanced convenience for our clients across diverse industries.

              </p>
              <h3 className="mil-mb-30">The Entesla Advantage
</h3>
              <p className="mil-mb-60">
           Custom-built, future-ready mobile apps that combine intuitive UI, powerful functionality, and seamless system integration — engineered for monitoring, control, and insight.


              </p>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-check-icon-list mil-mb-15">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                      Bespoke app design tailored to specific operational workflows and user needs


                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                    Intuitive, user-centric UI/UX for effortless control and monitoring


                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                    Cross-platform development (Android/iOS) to ensure broad accessibility

                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                     Real-time data visualization with dynamic charts, dashboards, and reports


                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <ul className="mil-check-icon-list">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                     Secure API and cloud integration for reliable remote access and control


                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                       Low-latency performance for instant alerts, commands, and status updates
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                       Scalable app architecture to support evolving systems and features


                      </span>
                    </li>
                      <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                   Ongoing support and maintenance for app upgrades, enhancements, and security


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
          <Link href="monitoring" className="mil-slider-nav">
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
            <Link href="customDesign" className="mil-slider-btn-next mil-blog-next">
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
