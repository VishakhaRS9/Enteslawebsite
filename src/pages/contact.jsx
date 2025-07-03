import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Contact = () => {
  return (
    <Layouts>
      <PageBanner
        pageName={"Contact Us"}
        pageTitle={"Let’s discuss your opportunity"}
      />
      {/* contact */}
      <section className="mil-contact mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 col-xl-7 mil-mb-120">
           <h3 className="mil-mb-20"> Contact Us</h3> 
             <p className="mil-mb-30">Need to get in touch? We are here to help! Whether you have a question about our products,
              need assistance with an order, or just want to say hello, feel free to reach out. We're always happy to hear from you.
             </p>

             <div className="row">
 <div className="col-lg-6 col-xl-6"><h4>Location</h4>
<p>6/114, Mittal Estate,
  Marol, <br/> Andheri East,
  Mumbai - 400059
</p></div>
 <div className="col-lg-6 col-xl-6"><h4>Contact</h4>
<a href="maito:contact@entesla.com" target="_blank">contact@entesla.com</a><br/>
+91 (022) 4972 0910</div>

             </div>



            </div>
            <div className="col-lg-5 col-xl-4 mil-mb-120">
              <div class="mil-project-cover-service no-margin">
             <img src="img/projects/contact.jpg" alt="Contact Us" />
             </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact end */}
      {/* map */}
      <div>
        <div className="mil-map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0523554128554!2d72.88034297551155!3d19.105358982105255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c86c5eab85dd%3A0x8aa63cc4533d466b!2s6%2C%20Mittal%20Industrial%20Estate%20Rd%2C%20Mittal%20Industrial%20Estate%2C%20Marol%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400059!5e0!3m2!1sen!2sin!4v1751389035024!5m2!1sen!2sin"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

         
        </div>
        <div className="container" />
      </div>
      {/* map end */}
     
     
    </Layouts>
  );
};
export default Contact;
