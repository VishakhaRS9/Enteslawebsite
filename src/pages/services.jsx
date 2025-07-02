import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
const Solution1About = dynamic(
  () => import("@/src/components/sliders/Solution1About"),
  {
    ssr: false,
  }
);
const Solution1MilBoxSlider = dynamic(
  () => import("@/src/components/sliders/Solution1MilBoxSlider"),
  {
    ssr: false,
  }
);
const SolutionMilReviSlider = dynamic(
  () => import("@/src/components/sliders/SolutionMilReviSlider"),
  {
    ssr: false,
  }
);
const Solution1 = () => {
  return (
    <Layouts footer={2}>
      <PageBanner
        pageName={"Solution"}
        pageTitle={"Services"}
      />

      {/* call to action */}
      <section className="mil-p-120-90">
        <div
          className="mil-deco"
          style={{ bottom: 0, right: "25%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="mil-hori-box mil-mb-30">
                <div className="mil-mr-30">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                    <img src="img/icons/md/11.svg" alt="icon" />
                  </div>
                </div>
                <h5>
                 We specialize in new product development with in-house R&D whilst offering bespoke services and solutions.




                </h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-adaptive-right">
                <a href="contact" className="mil-button mil-border mil-mb-30">
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* title */}
      <section className="mil-p-120-0">
        <div className="container">
          <div className="mil-text-center mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
             Innovative Solutions <span className="mil-accent">|</span>  Bespoke Designs <span className="mil-accent">|</span>  End-to-End Development
            </span>
            {/* <h2>
              AI Consulting and Development Company <br /> With{" "}
              <span className="mil-accent">Extensive Know How</span>
            </h2> */}

            <p>We provide end-to-end solutions under one roof, offering competitive pricing for high-value engineering, 24x7 support for seamless execution, bespoke design expertise tailored to specific needs, and a complete product development pipeline.

</p>
          </div>
        </div>
      </section>
      {/* title end */}
      {/* about */}
      <Solution1About />
      {/* about end */}
     
    
    </Layouts>
  );
};
export default Solution1;
