const DefaultFooter = () => {
  return (
      <footer className="mil-dark-bg">
      <img src="img/deco/map.png" alt="background" className="mil-footer-bg" />
      <div className="container">
        <div className="mil-footer-content">
        
          <div className="mil-divider mil-light" />
          <div className="row  mil-p-120-60">
            <div className="col-md-5 col-lg-5 col-xl-5 mil-mb-30">
              <img
                src="img/logo/entesla-logo_light.png"
                alt="logo"
                className="mil-logo mil-mb-30"
                style={{ width: 140 }}
              />
              <p
                className="mil-light mil-light-soft"
                style={{ marginBottom: 45 }}
              >
                6/114, Mittal Estate, Marol,<br />
Andheri East, Mumbai - 400059
               
              </p>
              <ul className="mil-simple-list mil-mb-15">
                <li className="mil-light">
                  <span className="mil-accent">(022) </span>&nbsp;
                  <span className="mil-light-soft">4972 0910</span>
                </li>
                <li>
                  <span className="mil-accent">contact</span>
                  <span className="mil-light mil-light-soft">
                    @entesla.com
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-md-7 col-lg-7 col-xl-7">
              <div className="row ">
                <div className="col-md-7 col-lg-7 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-30">Services</h4>
                  <ul className="mil-hover-link-list mil-light">
                    <li>
                      <a href="customDesign">Customised Design Services</a>
                    </li>
                    <li>
                      <a href="iot">IoT</a>
                    </li>
                    <li>
                      <a href="monitoring">Monitoring</a>
                    </li>
                    <li>
                      <a href="mobileApp">Mobie App Development</a>
                    </li>
                  
                  </ul>
                </div>

                <div className="col-md-5 col-lg-5 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-30">
                    Case Studies
                  </h4>
                  <ul className="mil-hover-link-list mil-light">
                    <li>
                      <a href="pwas">Proximity Warning Alarm System</a>
                    </li>
                    <li>
                      <a href="dws">Dimensioning Weighing System</a>
                    </li>
                    <li>
                      <a href="gds">Gas Detection System
</a>
                    </li>
                    <li>
                      <a href="swpms">Solar Pump Monitoring
</a>
                    </li>
                    <li>
                      <a href="kms">Key Management
System
</a>
                    </li>
                       <li>
                      <a href="fms">Facility Management</a>
                    </li>
                  </ul>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mil-footer-bottom">
        <div className="container">
          <p className="mil-text-sm mil-light">© Entesla 2025.</p>
          <p className="mil-text-sm mil-light">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default DefaultFooter;
