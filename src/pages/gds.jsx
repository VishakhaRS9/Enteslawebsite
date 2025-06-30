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
            <h2 className="mil-uppercase">Gas Detection System (GDS)


</h2>
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
             <img src="img/projects/Info.jpg" alt="Info"/></div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
             <h4>   Overviews</h4>
              </span>
              {/* <h3 className="mil-mb-30">Challenge</h3> */}
              <p className="mil-mb-60">
             In industrial, commercial, and residential environments, ensuring safety and preventing hazards is of paramount importance. One critical aspect of this safety infrastructure is the gas detection system—a technology designed to identify and monitor the presence of harmful gases in the atmosphere.



           <br/>Gas detection systems play a pivotal role in safeguarding lives and property by detecting toxic, flammable, or asphyxiating gases before they reach dangerous levels. These systems can alert individuals and trigger automated responses, such as ventilation or shutdown mechanisms, to mitigate risks.
<br/>

From industries like oil and gas, manufacturing, and mining to everyday applications in homes, hospitals, and laboratories, gas detection systems are a cornerstone of proactive safety measures. They are not just tools for compliance with regulations but are integral to fostering trust and confidence in workplaces and public spaces.


</p>

<h4 className="mil-mb-20">Key Components of Gas Detection Systems


</h4>
<ol className="mil-mb-60">
  <li>
<p><strong>Catalytic combustion sensors for excellent Accuracy and reproducibility
</strong></p>
   
</li>
 <li>
<p><strong>Various types of gas detection like natural gas, hydrocarbon, Ammonia, H2S
</strong></p>
   </li>
    <li>
<p><strong>Addressable Digital communication covers a wide area and accommodates a large number of sensors in a single network
</strong></p>
   </li>
    <li>
<p><strong>Flameproof enclosure which prevents circuits in a hazardous condition
</strong></p>
   </li>
    <li>
<p><strong>Output like RS485, relay, 4-20mA for external communication
</strong></p>
   </li>
    <li>
<p><strong>Addressable sensors
</strong></p>
   </li>
    <li>
<p><strong>Maximum number of safety points
</strong></p>
   </li>

  </ol>


              <h3 className="mil-mb-30">The Entesla Advantage</h3>
            
              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-check-icon-list mil-mb-15">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                   Indicates %LEL 

                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                     Message alert in case of an emergency situation

       
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                 scalable/modular system



                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
               Potential free contacts available to take invasive actions such as to turn off gas supply, operating exhaust fan



                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <ul className="mil-check-icon-list">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                    Integration with BMS system



                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                    IoT connectivity


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
           Undetected or inaccurately measured gas leaks pose serious safety hazards, regulatory risks, and operational disruptions for businesses handling industrial gases or working in hazardous environments. Manual monitoring and outdated systems result in limited coverage, delayed response times, increased liability, and higher maintenance costs. Organizations need a reliable, automated solution to ensure real-time gas detection, compliance, and workplace safety.



              </p>
              <h4>Key challenges:
</h4>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/3.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong> Safety Risks:</strong>   Inaccurate detection increases the chance of accidents and exposure.


                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/2.svg" alt="icon" />
                </div>
                   <p className="mil-dark">
                 <strong>Regulatory Non-Compliance: </strong> Failure to meet safety standards invites penalties.

                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/5.svg" alt="icon" />
                </div>
                   <p className="mil-dark">
                 <strong> Operational Downtime:</strong>Delays in identifying leaks or hazardous levels disrupt processes.
                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/6.svg" alt="icon" />
                </div>
                  <p className="mil-dark">
                 <strong>Higher Costs:</strong> Accidents, fines, and inefficiencies drive up expenses.

                </p>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <img src="img/projects/Problem.png" alt="Problem" />
              </div>
            </div>
          </div>
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-60">
              <h3 className="mil-mb-30">Our Solution
</h3>
              <p className="mil-mb-30">
                Entesla’s GDS (Gas Detection System) eliminates these challenges with advanced, real-time gas monitoring and alerting technology.




              </p>
               <h4>Key benefits:
</h4>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/7.svg" alt="icon" />
                </div>
                 <p className="mil-dark">
                 <strong>Enhanced Safety: </strong>Rapid and precise detection reduces risk to personnel and assets.




                </p>
              </div>

               <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/4.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong>Regulatory Compliance:  </strong>Supports adherence to national and international safety standards.

                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/8.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong> Operational Continuity: </strong>Early alerts help prevent costly downtime and damage.



                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/4.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong> Cost Efficiency: </strong>Minimizes liabilities, fines, and unplanned maintenance with proactive monitoring.



                </p>
              </div>
              
            
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <img src="img/projects/Solution.png" alt="Solution" />
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
          <Link href="fms" className="mil-slider-nav">
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
            <Link href="kms" className="mil-slider-btn-next mil-blog-next">
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
