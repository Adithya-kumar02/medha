import React from "react";

const Section1 = () => {
  return (
    <section
      id="section1"
      style={{
        backgroundImage: "url('/images/bgf.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh", // Increased height to 80vh
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Blur effect for top and bottom */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3vh", // Top blur area
          background: "rgba(14, 0, 0, 0.93)",
          filter: "blur(5px)", // Apply a small blur effect
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3vh", // Bottom blur area
          background: "rgba(18, 1, 2, 1)",
          filter: "blur(5px)", // Apply a small blur effect
        }}
      ></div>

      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "90%", // Added padding on both sides by limiting width to 90%
          position: "relative",
        }}
      >
        {/* Header: "Our Team" */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            textAlign: "center",
            width: "100%",
            fontSize: "1.8rem",
            color: "white",
            fontWeight: "bold",
          }}
        >
          <h1>OUR TEAM</h1>
        </div>

        {/* Main Content Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "55vh", // Adjusted height
            gap: "15px", // Gap between the card and the image
          }}
        >
          {/* Left Section: White Box */}
          <div
            style={{
              width: "40%", // Reduced width of the card
              height: "25vh", // Further reduced height of the card
              backgroundColor: "white",
              borderRadius: "32px", // Slightly reduced border radius
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Added shadow to the card
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem", // Smaller font size for the card
                color: "black",
                fontWeight: "bold",
              }}
            >
              LINK####
            </h2>
          </div>

          {/* Right Section: Single Image */}
          <div
            style={{
              width: "43%", // Increased width of the image by 5%
              height: "35vh", // Image height adjusted to fit better
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="/newPage"> {/* Add the desired page URL here */}
              <img
                src="images/dcAndMarvel.png"
                alt="DC and Marvel Characters"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px", // Increased border radius for the image
                  objectFit: "cover",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Added shadow effect
                  cursor: "pointer",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
