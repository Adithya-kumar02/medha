import React from "react";

const Section1 = () => {
  return (
    <section 
      id="section1" 
      style={{ 
        backgroundImage: "url('/images/bg3.jpg')",  // Path from the public folder
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height: "100vh", 
        width: "100vw",
        position: "relative"  // To position the corner images relative to this section
      }}
    >

<img 
        src="/images/title.png"  // Path to the image for the left corner
        alt="center"
        style={{
          position: "absolute",
          top: "-0.4%",  // Adjust as needed for position
          left: "20%",  // Adjust as needed for position
          width: "900px",  // Larger size for the left image
          height: "auto", // Auto to maintain aspect ratio
          objectFit: "contain", // To ensure the whole image is visible
          objectPosition: "top", // Align image to the top
        }}
      />


      {/* Left corner image */}
      <img 
        src="/images/ironman.jpg"  // Path to the image for the left corner
        alt="Left Corner"
        style={{
          position: "absolute",
          top: "-12.4%",  // Adjust as needed for position
          left: "-5%",  // Adjust as needed for position
          width: "600px",  // Larger size for the left image
          height: "auto", // Auto to maintain aspect ratio
          objectFit: "contain", // To ensure the whole image is visible
          objectPosition: "top", // Align image to the top
        }}
      />

      {/* Right corner image */}
      <img 
        src="/images/batman.jpg"  // Path to the image for the right corner
        alt="Right Corner"
        style={{
          position: "absolute",
          top: "-0.5%",  // Adjust as needed for position
          right: "-5%",  // Adjust as needed for position
          width: "600px",  // Larger size for the right image
          height: "auto", // Auto to maintain aspect ratio
          objectFit: "contain", // To ensure the whole image is visible
          objectPosition: "top", // Align image to the top
        }}
      />
    </section>
  );
};

export default Section1;
