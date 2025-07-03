import ContactForm from "@/src/components/ContactForm";
import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const About = () => {
  return (
    <Layouts>
      <PageBanner pageName={"About us"} pageTitle={"Entesla"} />
      {/* call to action */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-xl-8">
              <h4 className="mil-mb-60">
               A dynamic product design and manufacturing company dedicated to{" "}
                <span className="mil-accent">crafting groundbreaking, state-of-the-art products,</span>
               that deliver powerful, transformative experiences for users.

              </h4>
            </div>
            <div className="col-lg-12 col-xl-4">
              <div className="mil-adaptive-right">
                <Link href="/contact" >
                <a className="mil-button mil-border mil-mr-15 mil-mb-30">
                  <span>Talk To an Expert</span>
                </a></Link>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}
      {/* about */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, left: "35%" }} />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img src="img/photo/TransformingIdeas.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Company Overview
             </span>
              <h2 className="mil-mb-50">
               Entesla specializes in<br />
                <span className="mil-accent"> transforming your ideas </span>into innovative, cutting-edge solutions for the
               modern age.

              </h2>
              <p className="mil-mb-50">
               Founded in 2009 and headquartered in Mumbai, Entesla leads the way in Embedded System Technologies and IoT innovation. Specializing in hardware and software solutions for Proximity Warning & Alert Systems (PWAS), Dimensioning & Weighing Systems (DWS), Gas Detection Systems, IoT, and industrial automation, they cater to MSMEs, small-cap, and mid-cap companies.{" "}
              </p>
              <div className="row align-items-end">
                <div className="col-xl-7">
                  <ul className="mil-check-icon-list mil-mb-60">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                       Design partner for businesses lacking in-house R&D

                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Complete guidance with proof of concept to mass production

                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                       Flexible, agile, and customer-focused service
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                       Successful B2B partnerships and OEM collaborations

                      </span>
                    </li>
                  </ul>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      {/* counters */}
      <section className="mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, left: "25%" }} />
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="mil-h1">
                15<span className="mil-accent">+ </span><span className="smallFont">Years Experience</span>
              </div>
             
              <h3 className="mil-mb-60">
                With over a decade and a half of expertise, Entesla delivers innovative, end-to-end electronic engineering solutions reliably.

              </h3>
            </div>
            <div className="col-lg-6">
              <h3 className="mil-mb-60">

                Entesla is committed to quality with their <br/><span className="mil-accent">long-lasting products</span>, their integrated team of hardware, firmware, 
                and software engineers ensures a seamless product lifecycle under one roof, delivering unmatched reliability and support.


             
              </h3>
              <div className="row">
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">100+</span>&nbsp; Products
                    Development
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60"></div> 
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">25+</span>&nbsp; End to End 
                    Solutions
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" ></div>
                </div>
                <div className="col-lg-6">
                

                  <h6 className="mil-mb-30">
                    <span className="mil-accent">50+</span>&nbsp; Clients Engagement
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" ></div>
                </div>
                <div className="col-lg-6">
                  
                  <div className="mil-divider mil-divider-left mil-mb-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counters end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
     
      {/* about */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, right: "15%" }} />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img src="img/photo/Mission.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Embedded System
              </span>
              <h2 className="mil-mb-50"> Mission</h2>
              <p className="mil-mb-50">
               Entesla’s core mission is to bridge the gap between concept and product, with their tagline, <strong>“Ideas Realized”</strong>.  They foster an environment where creativity thrives and collaboration drives success.
              </p>
              
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      {/* features */}
      <section className="mil-p-120-120">
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            Discover Entesla
          </span>
          <h2 className="mil-mb-120">What Makes Entesla Unique?</h2>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/6.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Commitment to Timelines:</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
               Entesla prioritizes delivering on time without compromising quality.

                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Rapid Prototyping:</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
              Their agile approach accelerates the development process.

                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/2.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Time to Market:</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                 They ensure the swift deployment of solutions to seize market opportunities.

                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/4.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">In-House End-to-End Design:</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
               Every aspect of their engineering process is handled internally, guaranteeing cohesion and quality.

                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Prompt Service:</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
            Their unparalleled customer support ensures client needs are met swiftly.

                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
        </div>
      </section>
      {/* features end */}
      {/* features */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, right: "25%" }} />
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            Why work with us
          </span>
          <h2 className="mil-mb-120">
            Entesla Values
          </h2>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">Innovation</h4>
                 
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">Commitment
</h4>
                 
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">Compassion</h4>
                 
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">Integrity</h4>
                 
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">Teamwork</h4>
                
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">Support</h4>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* features end */}
    
    </Layouts>
  );
};
export default About;
