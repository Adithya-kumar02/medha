import React from "react";

const Section1 = () => {
  return (
    <section 
      id="section1" 
      style={{ 
        backgroundImage: "url('/images/bg2.jpg')",  // Path from the public folder
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height: "100vh", 
        width: "100vw"
      }}
    >
      <h2>Section 1</h2>
      <p>Content for section 1.</p>
    </section>
  );
};

export default Section1;
