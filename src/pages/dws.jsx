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
            <h2 className="mil-uppercase">Dimensioning & Weighing System (DWS)</h2>
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
             <img src="img/projects/dwsInfo.jpg" alt="Info"/></div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
             <h4>   Overviews</h4>
              </span>
              {/* <h3 className="mil-mb-30">Challenge</h3> */}
              <p className="mil-mb-60">
               In the fast-paced world of parcel express and logistics, efficiency is critical. Dimensioning, Weighing and Scanning (DWS) systems are pivotal technologies that enable these companies to streamline operations, optimize resource allocation, and ensure accurate billing. These systems are used to measure, weigh, and scan parcels, providing comprehensive data about each item in real-time.

           <br/>Typically used as part of a revenue-recovery program, a DWS system is used to provide revenue protection to the freight forwarder and correct, fair invoicing to the shipper and receiver.


</p>

<h4 className="mil-mb-20">Key Components of DWS Systems
</h4>
<ol className="mil-mb-60">
  <li><strong>Dimensioning:</strong>
    <p>This function measures the physical dimensions of a parcel—length, width, and height. Automated dimensioners often use advanced sensors, such as laser to capture precise measurements even as parcels move through conveyor systems.


</p>
</li>
<li><strong>Weighing:

</strong>

  <p>The weighing component ensures the accurate measurement of a parcel's weight, which is critical for calculating shipping costs and maintaining compliance with weight restrictions. Industrial-grade scales or in-motion weighing systems are commonly integrated into the setup.



</p>
</li>
<li><strong> Scanning:

 </strong>

  <p>Scanners read and record barcode or QR code data, linking each parcel to relevant tracking and shipment information. This step ensures traceability and facilitates seamless sorting and routing of parcels.


</p>
</li>

  </ol>


              <h3 className="mil-mb-30">The Entesla Advantage</h3>
              <p className="mil-mb-60">
             Entesla’s DWS solution determines & communicates package volume, package weight, and chargeable weight to client software and thus increases throughput (to approx 500 packages per hour) & efficiency 


<br/>
 Measures flow rate, solar panel performance (voltage, current), inverter efficiency, and pump health metrics with built-in remote diagnostics and OTA (Over-The-Air) update capability, it is a highly customizable platform that can output formatted reports as per manufacturer and regulatory requirements


              </p>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-check-icon-list mil-mb-15">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                  Helps Accurate Billing

                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                 Improved Efficiency

          
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                     Optimised Space Utilization

                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                 Enhanced Sorting and Tracking


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
                      Cost Savings through Early Fault Detection
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
                    Error Reduction

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
          
          Inaccurate parcel data leads to revenue loss, inefficiencies, and logistical challenges for companies handling high shipment volumes. Manual processes cause errors, delays, and poor space utilization, increasing operational costs. Businesses need a reliable, automated solution to ensure accurate measurements, seamless processing, and compliance with shipping standards.


              </p>
              <h4>Key challenges:
</h4>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/3.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong> Revenue Loss:</strong> Inaccurate data leads to incorrect billing.

                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/2.svg" alt="icon" />
                </div>
                   <p className="mil-dark">
                 <strong>Inefficient Operations: </strong> Manual handling slows parcel processing.

                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/5.svg" alt="icon" />
                </div>
                   <p className="mil-dark">
                 <strong> Space Wastage: </strong> Poor dimension data reduces load efficiency.


                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/6.svg" alt="icon" />
                </div>
                  <p className="mil-dark">
                 <strong> Higher Costs: </strong>Errors and delays increase logistics expenses.

                </p>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <img src="img/projects/dwsProblem.jpg" alt="Problem" />
              </div>
            </div>
          </div>
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-60">
              <h3 className="mil-mb-30">Our Solution
</h3>
              <p className="mil-mb-30">
               Entesla’s DWS solution eliminates these challenges with precise dimensioning, weighing, and scanning technology.


              </p>
               <h4>Key benefits:
</h4>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/7.svg" alt="icon" />
                </div>
                 <p className="mil-dark">
                 <strong>Accurate Billing:</strong>Prevents revenue loss with precise weight and dimension data.


                </p>
              </div>

               <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/4.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong> Improved Efficiency:</strong> Automates parcel processing, reducing delays.

                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/4.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong>Optimized Space: </strong>Enables better load planning and space utilization.


                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/8.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong> Cost Savings: </strong> Minimizes operational costs with smarter logistics and routing.



                </p>
              </div>
            
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <img src="img/projects/dwsSolution.jpg" alt="Solution" />
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
          <Link href="swpms" className="mil-slider-nav">
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
            <Link href="fms" className="mil-slider-btn-next mil-blog-next">
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
