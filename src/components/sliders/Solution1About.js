import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const clickedTabsSliderButton = event => {
  const buttons = document.querySelectorAll('.mil-tab-buttons a');
  buttons.forEach((button) => {
    button.classList.remove('mil-active');
  });

  event.currentTarget.classList.toggle('mil-active');
}

const Solution1About = () => {
  return (
    <section className="mil-deep-bg mil-p-120-0">
      <div className="container">
        <Swiper
          {...sliderProps.milTabsSlider}
          className="swiper-container mil-tabs-slider"
        >
          <SwiperSlide className="swiper-slide" data-hash="tab1">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img src="img/icons/md/2.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>Customised Design Solutions</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-12">
                    <p>
                In today’s fast-paced business environment, customised automation and design solutions are vital for companies aiming to improve efficiency, reduce costs, and stay competitive. Off-the-shelf products rarely address unique operational challenges, making bespoke solutions a strategic advantage. Entesla specialises in delivering end-to-end, curated automation and design services backed by in-house R&D. From concept to execution, Entesla partners with clients to develop tailored electronics systems that solve specific problems, streamline production, and enhance functionality. With competitive pricing, 24x7 support, and a commitment to innovation, Entesla stands out as a one-stop partner for businesses seeking intelligent, scalable, and sustainable engineering solutions under one roof.

                    </p>
                  </div>
                  
                </div>
                <a href="customDesign" className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/projects/customDesign.jpg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab2">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img src="img/icons/md/1.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>IoT</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-12">
                    <p>
                     The Internet of Things (IoT) is revolutionizing how companies operate by enabling real-time data collection, automation, and intelligent decision-making. For businesses, IoT drives efficiency, reduces operational costs, and opens new revenue streams through smart, connected systems. Entesla, with its strong R&D foundation and end-to-end engineering capabilities, offers curated IoT services tailored to industry-specific needs. From prototyping to deployment, Entesla designs bespoke solutions that integrate seamlessly into existing infrastructures. With 24x7 support and competitive pricing, the organization ensures reliable, scalable, and secure IoT ecosystems that empower businesses to stay agile, data-driven, and future-ready in an increasingly connected world.

                    </p>
                  </div>
                 
                </div>
                <a href="iot" className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/projects/iot.jpg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab3">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img src="img/icons/md/11.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>Monitoring</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-12">
                    <p>
                         Monitoring services are essential for ensuring the reliability, safety, and performance of electronic systems, especially in today’s fast-paced, tech-driven environment. At Entesla, we understand that each client’s needs are unique. That’s why we offer curated monitoring solutions tailored to specific industries—ranging from manufacturing to critical infrastructure. Our end-to-end capabilities under one roof allow us to design, develop, and deploy bespoke monitoring systems with 24x7 support. Whether it’s predictive maintenance, real-time data tracking, or performance analytics, Entesla integrates intelligence and precision into every project. This helps our clients avoid downtime, reduce operational risk, and focus on innovation without compromise.
                    </p>
                  </div>
                </div>
                <a href="monitoring" className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/projects/monitoring.jpg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab4">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img src="img/icons/md/3.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>Mobile App Development
</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-12">
                    <p>
                     Mobile app development is crucial for companies aiming to stay competitive in today’s digital-first world. A well-designed app enhances customer engagement, streamlines operations, and offers data-driven insights. For businesses, it’s more than just a tech upgrade—it’s a strategic growth tool. At Entesla, we recognize this potential and provide curated, end-to-end mobile app development services tailored to each client's needs. Backed by in-house R&D, our solutions blend intuitive design, robust engineering, and 24x7 support. Whether it’s a customer-facing app or an enterprise tool, Entesla ensures seamless functionality, scalability, and a user-first experience—delivering not just code, but complete digital empowerment.

                    </p>
                  </div>
                </div>
                <a href="mobileApp" className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/projects/mobileApp.jpg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="mil-tab-buttons mil-mt-60-adapt">
          <a href="#tab1" className="mil-active" onClick={clickedTabsSliderButton}>
            <span> Customised Design Solutions</span>
          </a>
          <a href="#tab2" onClick={clickedTabsSliderButton}>
            <span>IoT (Internet of Things)
</span>
          </a>
          <a href="#tab3" onClick={clickedTabsSliderButton}>
            <span> Monitoring</span>
          </a>
          <a href="#tab4" onClick={clickedTabsSliderButton}>
            <span>App Development</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Solution1About;
