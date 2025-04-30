import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"} >
      <div className="row contactus mt-5">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4  mt-3">
        
          <p>At ShoppyLinker, we are committed to protecting your privacy and ensuring a safe online shopping experience. This Privacy Policy explains how we collect, use, share, and safeguard your personal information when you visit or use our website, services, and mobile application (collectively, the "Platform").

By using ShoppyLinker, you agree to the collection and use of information in accordance with this Privacy Policy.</p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;