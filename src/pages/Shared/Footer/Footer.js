import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          backgroundImage: `url('https://i.ibb.co/ky8zPJj/footer.png')`,
          backgroundSize: `cover`,
        }}
        className=" p-10  text-base-content"
      >
        <div className="footer">
          <div className="md:pl-12">
            <span className="footer-title">SERVICES</span>
            <a className="link link-hover">Emergency Checkup</a>
            <a className="link link-hover">Monthly Checkup</a>
            <a className="link link-hover">Weekly Checkup</a>
            <a className="link link-hover">Deep Checkup</a>
          </div>
          <div className="md:pl-12">
            <span className="footer-title">ORAL HEALTH</span>
            <a className="link link-hover">Fluoride Treatment</a>
            <a className="link link-hover">Cavity Filling</a>
            <a className="link link-hover">Teath Whitening</a>
          </div>
          <div className="md:pl-12">
            <span className="footer-title">OUR ADDRESS</span>
            <a className="link link-hover">New York - 101010 Hudson</a>
          </div>
        </div>
        <div>
          <p className="text-sm text-center mt-5">
            Copyright © 2022 - All right reserved by ACME Industries Ltd
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
