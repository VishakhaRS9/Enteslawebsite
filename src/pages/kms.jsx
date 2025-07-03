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
            <h2 className="mil-uppercase">Key Management System (KMS)

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
             <img src="img/projects/kmsInfo.jpg" alt="Info"/></div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
             <h4>   Overviews</h4>
              </span>
              {/* <h3 className="mil-mb-30">Challenge</h3> */}
              <p className="mil-mb-60">
             Manual key management is often stressful and time-consuming, with keys easily getting lost and search efforts frequently unsuccessful. As the number of keys increases, tracking them becomes more challenging. This process, especially for security-sensitive locations and vehicle fleets, can lead to administrative burdens, security risks, and higher costs.


           <br/>Electronic Key management system uses biometric or RFID card authorization for key access which is preregistered by the administrator for a particular user. All key withdrawals and returns are electronically logged and these logs are accessible at any time. The smart key cabinet ensures a transparent, controlled & traceable key handover and efficient management of several hundred keys. The system works for 2-3 hours in case of power failure. These systems are installed for fleet management, workforce yards, and secure lab access.


</p>

<h4 className="mil-mb-20">Key Components of KMS Systems

</h4>
<ol className="mil-mb-60">
  <li><strong>Authorization:  </strong>

    <p>This function ensures only registered users can access specific keys. The system uses biometric authentication (e.g., fingerprint) or RFID cards linked to individual user profiles. Authorization data is managed centrally by the administrator to control and customize access for each user.

</p>
</li>
<li><strong> Logging: </strong>

  <p>The logging component automatically records all key withdrawals and returns, including the identity of the user, time stamps, and key IDs. These logs provide a complete audit trail, enhancing security, accountability, and compliance with operational protocols.

</p>
</li>
<li> <strong> Storage & Power Management: </strong>

  <p>Keys are securely stored in a smart cabinet designed for controlled and traceable handovers. The cabinet is engineered to function even during power failures, offering 2-3 hours of backup to ensure uninterrupted access and security. The modular design supports efficient management of large key volumes in fleet yards, workforce facilities, and sensitive access areas.

</p>
</li>

  </ol>


              <h3 className="mil-mb-30">The Entesla Advantage</h3>
              <p className="mil-mb-60">
           Entesla’s Key Management System (KMS) provides a secure, efficient, and traceable solution for managing large volumes of keys in fleet operations, industrial yards, and high-security facilities. The system combines biometric and RFID-based authorization with smart key cabinets that can manage several hundred keys while offering 2-3 hours of power backup for uninterrupted operations. Entesla’s KMS integrates seamlessly with client software, providing real-time access logs and customized reporting based on specific administrative or compliance needs.

              </p>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-check-icon-list mil-mb-15">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                      Enhances security with controlled key access


                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                     Improves operational efficiency and reduces administrative effort
       
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                  Delivers complete traceability for audits and compliance


                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                     Minimizes risk of key loss and unauthorized access


                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <ul className="mil-check-icon-list">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                       Highly customizable to align with client workflows


                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                      Scalable to accommodate growing key inventories


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
            Inefficient key management leads to security risks, administrative burden, and increased costs for organizations managing large key inventories. Manual key tracking is prone to errors, lost keys, and unauthorized access, creating operational delays and compliance challenges. Businesses need a reliable, automated system to ensure secure, traceable, and efficient key management.


              </p>
              <h4>Key challenges:
</h4>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/3.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong> Security Risks:</strong>   Lost or misplaced keys lead to unauthorized access and vulnerabilities.


                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/2.svg" alt="icon" />
                </div>
                   <p className="mil-dark">
                 <strong>Administrative Overload: </strong> Manual processes consume time and resources.

                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/5.svg" alt="icon" />
                </div>
                   <p className="mil-dark">
                 <strong> Operational Delays: </strong>Searching for keys slows down critical workflows.
                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/6.svg" alt="icon" />
                </div>
                  <p className="mil-dark">
                 <strong>Higher Costs:</strong>  Key loss, duplication, and inefficiency drive up operational expenses.

                </p>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <img src="img/projects/kmsProblem.jpg" alt="Problem" />
              </div>
            </div>
          </div>
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-60">
              <h3 className="mil-mb-30">Our Solution
</h3>
              <p className="mil-mb-30">
                Entesla’s Key Management System (KMS) eliminates these challenges with a smart, automated solution featuring biometric and RFID-based access, electronic logging, and secure key storage.



              </p>
               <h4>Key benefits:
</h4>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/7.svg" alt="icon" />
                </div>
                 <p className="mil-dark">
                 <strong> Enhanced Security: </strong> Prevents unauthorized access with controlled, traceable key handover.



                </p>
              </div>

               <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/4.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong> Operational Efficiency:  </strong>Reduces admin effort and speeds up key issuance and return.
                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/8.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong> Full Traceability: </strong>Provides real-time access logs for audits and compliance.


                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/4.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                 <strong> Cost Savings:  </strong>Minimizes losses and overhead through smarter, automated management.


                </p>
              </div>
              
            
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <img src="img/projects/kmsSolution.jpg" alt="Solution" />
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
