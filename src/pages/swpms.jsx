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
            <h2 className="mil-uppercase">Solar Water Pump Monitoring System (SWPMS)
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
             <img src="img/projects/swpmsInfo.jpg" alt="Info"/></div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
             <h4>   Overviews</h4>
              </span>
              {/* <h3 className="mil-mb-30">Challenge</h3> */}
              <p className="mil-mb-60">
            In the challenging world of agricultural irrigation, especially in remote and underserved regions, reliability and transparency are critical. Solar Water Pump Monitoring Systems (SWPMS) are essential technologies that empower manufacturers and farmers to ensure efficient operations, proactive maintenance, and compliance with government subsidy programs. These systems monitor and report on key performance metrics of solar water pumps, delivering real-time insights that keep irrigation consistent and crops protected.

           <br/>Typically used as part of a government-mandated quality assurance and subsidy compliance program, an SWPMS provides manufacturers with performance transparency, while ensuring farmers receive dependable irrigation solutions.


</p>

<h4 className="mil-mb-20">Key Components of SWPMS Systems
</h4>
<ol className="mil-mb-60">
  <li><strong> Pump Performance Monitoring:</strong>
    <p>This function tracks the pump’s water output, measuring parameters such as flow rate and total volume delivered. Flow sensors provide accurate data, even in fluctuating operating conditions, ensuring farmers receive consistent water supply and helping manufacturers verify product performance.

</p>
</li>
<li><strong> Solar & Electrical Monitoring:
</strong>
    <p>This component measures the performance of the solar panels, inverter, and electrical system—capturing data like panel voltage, current, and inverter efficiency. This ensures optimal energy utilization and helps identify underperforming components before they impact irrigation.


</p>
</li>
<li><strong> Remote Diagnostics & OTA Updates:

</strong>
    <p>Integrated diagnostics continuously assess system health, detecting faults and performance anomalies in real time. Over-the-air (OTA) update capability allows manufacturers to remotely enhance system functionality or fix bugs, minimizing field visits and ensuring pumps operate at peak performance in even the most isolated locations.



</p>
</li>

  </ol>


              <h3 className="mil-mb-30">The Entesla Advantage</h3>
              <p className="mil-mb-60">
               Entesla’s Solar Water Pump Monitoring System (SWPMS) ensures reliable, real-time monitoring and reporting of pump outflow, solar power generation, and overall system health. It seamlessly communicates critical performance data to client software, helping manufacturers comply with government subsidy programs, enhance operational efficiency, and deliver superior after-sales service — even in the most remote locations.


<br/>
 Measures flow rate, solar panel performance (voltage, current), inverter efficiency, and pump health metrics with built-in remote diagnostics and OTA (Over-The-Air) update capability, it is a highly customizable platform that can output formatted reports as per manufacturer and regulatory requirements

              </p>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-check-icon-list mil-mb-15">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Accurate Subsidy Reporting

                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                     Proactive Maintenance & Reduced Downtime
     
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                    Enhanced Irrigation Reliability







                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                    Simplified After-Sales Support

                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <ul className="mil-check-icon-list">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                      Optimized Resource Management

                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                     Cost Savings through Early Fault Detection

                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                      Compliance with Government Standards

                      </span>
                    </li>
                        <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                     Scalable for Small Farms to Large Agri Projects
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
            Unmonitored or poorly monitored solar water pumps lead to inconsistent irrigation, reduced crop yields, and loss of trust in solar solutions. Manufacturers struggle to meet government subsidy compliance without reliable data, while farmers face pump failures that result in costly crop damage. Without remote visibility, maintenance is reactive, slow, and expensive.




              </p>
              <h4>Key challenges:
</h4>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/3.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong> Subsidy Risk:</strong>  Lack of accurate performance data jeopardizes government subsidy claims.


                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/2.svg" alt="icon" />
                </div>
                   <p className="mil-dark">
                 <strong> Irrigation Downtime:</strong> Undetected faults disrupt water supply, harming crops.
                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/5.svg" alt="icon" />
                </div>
                   <p className="mil-dark">
                 <strong> High Maintenance Costs:</strong> On-site service visits for issues that could be solved remotely.

                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/6.svg" alt="icon" />
                </div>
                  <p className="mil-dark">
                 <strong> Poor Resource Utilization:</strong> Inefficient energy and water usage impact productivity.

                </p>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <img src="img/projects/swpmsProblem.jpg" alt="Problem" />
              </div>
            </div>
          </div>
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-60">
              <h3 className="mil-mb-30">Our Solution
</h3>
              <p className="mil-mb-30">
                <strong>Entesla’s SWPMS</strong> eliminates these challenges with advanced monitoring, remote diagnostics, and OTA update technology.



              </p>
               <h4>Key benefits:
</h4>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/7.svg" alt="icon" />
                </div>
                 <p className="mil-dark">
                 <strong> Subsidy Compliance</strong>  Provides precise, verifiable performance data for government programs.



                </p>
              </div>

               <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/4.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong> Reliable Irrigation:</strong> Keeps water flowing with real-time monitoring and proactive alerts.

                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/8.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong>Lower Maintenance Costs: </strong>Enables remote troubleshooting and OTA updates, reducing field visits.


                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/4.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong> Optimized Performance: </strong>Helps maximize energy and water use efficiency while safeguarding crops.


                </p>
              </div>
              
            
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <img src="img/projects/swpmsSolution.jpg" alt="Solution" />
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
          <Link href="gds" className="mil-slider-nav">
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
