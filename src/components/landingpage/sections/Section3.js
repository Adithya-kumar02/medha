import React from "react";

const Section1 = () => {
  return (
    <section
      id="section1"
      style={{
        position: "relative",
        backgroundImage: "url('/images/sec2.jpg')", // Path to the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        color: "white", // Ensure text stands out on the background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px", // Padding to add space around content
      }}
    >
      {/* Background Blur using pseudo-element */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundImage: "url('/images/bgf.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px)", // Adjust the blur amount here
          zIndex: 0,
        }}
      ></div>

      {/* Semi-transparent white layer with gaps */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "43.5%",
          transform: "translate(-50%, -50%)",
          width: "40%", // Adjust the width of the layer
          height: "70%", // Adjust the height of the layer
          backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent white
          borderRadius: "20px", // Rounded corners
          border: "10px solid transparent", // Gap effect
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px", // Padding inside the layer
        }}
      >
        {/* Content inside the semi-transparent layer */}
        <div
          style={{
            maxWidth: "800px",
            textAlign: "center",
            color: "black", // Text color
          }}
        >
          <h1
            style={{
              position: "absolute",
              top: "20px", // Adjust the position from the top
              left: "50%",
              transform: "translateX(-50%)",
              color: "black", // Text color
              fontWeight: "bold", // Bold font
              fontSize: "35px", // Adjust size of the text
              zIndex: 2,
            }}
          >
              Event
           </h1>
          <p style={{ fontSize: "1.2rem", marginTop: "20px" }}>
            Medha is a platform dedicated to empowering students and professionals
            through skill development and career guidance. Our mission is to
            bridge the gap between education and employment.
          </p>
        </div>
      </div>

     

      {/* Right Image - Independent Placement */}
      <div
        style={{
          position: "absolute",
          right: "5%", // Move closer to the right edge
          bottom: "10.2%", // Move higher from the bottom
          zIndex: 2,
        }}
      >
        <img
          src="/images/lokiicon.png"
          alt="Right Image"
          style={{ width: "550px", height: "auto", borderRadius: "10px", transform: "scaleX(-1)" }} // Flip the right image
        />
      </div>
    </section>
  );
};

export default Section1;