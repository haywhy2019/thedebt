import React from "react";

export default function Footer() {
  return (
    <div className="container margin-top-b width-medium">
      <div className="row col-10">
        <div className="col-md">
          <div>
            <h6 className="footerheading">The FDR Program</h6>
            <p> How it works</p>
            <p> Program Benefits</p>
            <p> Testimonials</p>
            <p>FAQs</p>
          </div>

          <div className="margin-top-b">
            <h6 className="footerheading">Our Company </h6>
            <p> About Us</p>
            <p> Contact Us</p>
            <p> Partnerships</p>
          </div>
        </div>

        <div className="col-md">
          <div>
            <h6 className="footerheading">Debt Resources</h6>
            <p> How to pay off Debt</p>
            <p> Debt Consolidation</p>
            <p> Debt Relief</p>
            <p>Debt Management</p>
          </div>

          <div className="margin-top-b">
            <h6 className="footerheading">Download app</h6>
            <p> Google Play</p>
            <p> Apple Store</p>
            <p> Desktop</p>
          </div>
        </div>
        <div className="col-md-4">
          <img src="" alt="logo" />
        </div>
      </div>
    </div>
  );
}
