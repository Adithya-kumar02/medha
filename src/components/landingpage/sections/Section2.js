import React from "react";

const Section1 = () => {
  return (
    <section 
      id="section1" 
      style={{ 
        backgroundImage: "url('/images/sec2.jpg')",  // Path to the background image
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height: "100vh", 
        width: "100vw",
        color: "white", // Ensure text stands out on the background
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        textAlign: "center", 
        padding: "0 20px"  // Padding to add space around content
      }}
    >
      <div style={{ maxWidth: "800px", zIndex: 1 }}>
        
        {/* You can add an image or other content below if needed */}
        <img 
          src="/images/medha_logo.png"  // Example logo or image related to Medha
          alt="Medha Fest Logo"
          style={{ width: "200px", marginTop: "20px" }} // Adjust size and spacing
        />
      </div>
    </section>
  );
};

export default Section1;
