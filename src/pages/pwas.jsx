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
              <span>All Cases</span>
            </Link>
            <h2 className="mil-uppercase">Proximity Warning and Alert System (PWAS)</h2>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* project */}
      <section className="mil-p-120-90">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between">
            <div className="col-lg-4 col-xl-3">
              <div class="mil-project-cover-info">
             <img src="img/projects/pwasInfo.jpg" alt="Info"/></div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
             <h4>   Overviews</h4>
              </span>
              {/* <h3 className="mil-mb-30">Challenge</h3> */}
              <p className="mil-mb-60">
                In today’s high-risk industrial environments — from construction sites to mining operations — safety, efficiency, and precision are non-negotiable. The Proximity Warning and Alert System (PWAS) by Entesla is an advanced AI-driven technology designed to protect personnel and equipment by preventing accidents before they happen. PWAS seamlessly integrates with heavy-duty machinery and commercial vehicles, providing operators with real-time, actionable data to make swift, informed decisions.

           <br/>Typically deployed as part of a comprehensive site safety strategy, PWAS serves as a critical tool for accident prevention, operator awareness, and compliance with global safety standards.

</p>

<h4 className="mil-mb-20">Key Components of PWAS</h4>
<ol className="mil-mb-60">
  <li>Detection:
    <p>PWAS combines cutting-edge millimeter wave (mmWave) radar sensors with an infrared camera mesh and HD vision cameras to create a complete 360° detection zone around heavy equipment. The system accurately identifies both humans and objects within a 15-meter radius in real-time, even in low-visibility conditions like dust, rain, or night-time operations.
</p>
</li>
<li>Alerting:
  <p>Once a human or object is detected, the system’s onboard controller generates visual and audible alerts for the operator. The audible alert (beeping) increases in intensity as the object moves closer, enabling the operator to take timely evasive action. This proactive alerting mechanism ensures heightened operator awareness at all times.
</p>
</li>
<li>Monitoring & Data Logging:
  <p>PWAS offers continuous monitoring with automated logging of detection events. The system’s intuitive interface provides easy access to detailed reports, aiding in incident reviews, safety audits, and compliance documentation. This capability supports companies in maintaining rigorous safety standards and operational transparency.
</p>
</li>
<li>Reliability:

  <p>PWAS is designed to work independently of external devices, ensuring maximum reliability. Built to withstand the harshest site conditions, the system complies with ARAMCO and other global safety specifications, and is bundled with Entesla’s comprehensive support services for easy deployment and long-term maintenance.
</p>
</li>
  </ol>


              <h3 className="mil-mb-30">The Entesla Advantage</h3>
              <p className="mil-mb-60">
              Entesla’s PWAS solution continuously detects, identifies, and alerts operators about the presence of humans and obstacles within a 360-degree perimeter of up to 15 meters around heavy machinery and commercial vehicles.




<br/>
The system communicates real-time proximity data to the operator’s cabin unit, helping prevent accidents and increasing safety, efficiency, and operator confidence on dynamic worksites.

<br/>/
Entesla’s PWAS solution combines mmWave radar sensors, an IR camera mesh, and HD vision cameras for accurate 3D detection of humans and objects, functioning seamlessly day or night, in extreme weather, and without the need for external tags or wearables.



<br/>
The highly customizable system supports configurable alert thresholds, detection zones, and outputs formatted data for smooth integration into client reporting, safety audits, and incident management systems, while being fully compliant with ARAMCO and other global safety standards.

              </p>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-check-icon-list mil-mb-15">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                      Accident Prevention









                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                   Operator Awareness 
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                   Improved Worksite Efficiency 

                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                    Data Logging & Safety Audits

                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <ul className="mil-check-icon-list">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                     Cost Savings

                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                     Regulatory Compliance

                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                     Error Reductiond detection

                      </span>
                    </li>
                        <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                      Scalable Solution
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
      {/* project */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-60">
              <h3 className="mil-mb-30">Your Problem
</h3>
              <p className="mil-mb-30">
            Industrial sites with heavy-duty machinery face significant safety risks when personnel and equipment operate in close proximity. Traditional safety measures, such as manual spotters or wearable tags, are prone to human error, limited coverage, and unreliable performance in harsh environments. These gaps can lead to accidents, equipment damage, downtime, and compliance issues — all driving up operational costs and liabilities.


              </p>
              <h4>Key challenges:
</h4>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/3.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong> Safety Risks:</strong>   Limited detection leads to collisions and workplace injuries.


                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/2.svg" alt="icon" />
                </div>
                   <p className="mil-dark">
                 <strong> Human Error: </strong>Manual monitoring and external device reliance are unreliable.

                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/5.svg" alt="icon" />
                </div>
                   <p className="mil-dark">
                 <strong> Downtime & Damage:</strong>Accidents cause operational delays and equipment loss.
                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/6.svg" alt="icon" />
                </div>
                  <p className="mil-dark">
                 <strong> Compliance Pressure:</strong> Failing to meet safety standards exposes businesses to penalties and reputational harm.

                </p>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <img src="img/projects/pwasProblem.jpg" alt="Problem" />
              </div>
            </div>
          </div>
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-60">
              <h3 className="mil-mb-30">Our Solution
</h3>
              <p className="mil-mb-30">
             Entesla’s PWAS solution addresses these challenges with advanced 360° AI-powered detection technology that safeguards personnel and machinery in real time.



              </p>
               <h4>Key benefits:
</h4>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/7.svg" alt="icon" />
                </div>
                 <p className="mil-dark">
                 <strong> Accident Prevention: </strong> Accurate, real-time alerts reduce collision risks and enhance operator awareness.



                </p>
              </div>

               <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/4.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong> Improved Efficiency:  </strong> Eliminates reliance on manual spotters or external devices, streamlining operations.

                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/8.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong> Cost Savings:</strong> Prevents equipment damage, reduces downtime, and lowers liability exposure.


                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/4.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong>Regulatory Compliance:  </strong>Fully meets ARAMCO and other global safety standards for peace of mind.




                </p>
              </div>
              
            
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <img src="img/projects/pwasSolution.jpg" alt="Solution" />
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <div className="container">
        <div className="mil-divider mil-mb-60" />
      </div>
      {/* pagination */}
      <div className="container mil-mb-120">
        <div className="mil-pagination mil-hidden-button">
          <Link href="kms" className="mil-slider-nav">
            <div className="mil-slider-btn-prev mil-button-sm mil-blog-prev">
              <i className="fas fa-arrow-left" />
              <span className="mil-h6">Prev</span>
            </div>
          </Link>
          {/* <Link href="portfolio" className="mil-button-all">
            <span>
              <i className="fas fa-list" />
            </span>
          </Link> */}
          <div className="mil-slider-nav">
            <Link href="swpms" className="mil-slider-btn-next mil-blog-next">
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
