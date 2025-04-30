import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus mt-5 ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4  ">
          <p className="text-justify mt-4">
          The objective of the Shopify Linker Shopping Platform project is to design 
          and develop a dynamic, scalable, and user-friendly e-commerce application using 
          the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform aims to 
          seamlessly link various Shopify stores into a single unified shopping experience,
           allowing users to browse, search, and purchase products from multiple sources in 
           one place. The system focuses on delivering fast performance, secure transactions, 
           efficient store integration, and a smooth customer journey across web and mobile 
           interfaces.
             
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;