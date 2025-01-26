import React from "react";
import "./Section1.css"; // Import the CSS file

const Section1 = () => {
  // Functions to handle opening and closing the overlay
  const openNav = () => {
    const overlay = document.getElementById("myNav");
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "white"; // Change background to white
    overlay.classList.add("open"); // Add class for animation
  };

  const closeNav = () => {
    const overlay = document.getElementById("myNav");
    overlay.style.height = "0%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)"; // Reset background
    overlay.classList.remove("open"); // Remove class for animation
  };

  return (
    <section
      id="section1"
      style={{
        backgroundImage: "url('/images/bg3.jpg')", // Path from the public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        position: "relative", // To position the corner images relative to this section
      }}
    >
      {/* Overlay Navigation Menu */}
      <div id="myNav" className="overlay">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <div className="overlay-content">
          <a href="#">Home</a>
          <a href="#">Collage</a>
          <a href="#">Events</a>
          <a href="#">Team</a>
        </div>
      </div>

      {/* Button to open the overlay navigation menu */}
      <span
        style={{
          fontSize: "30px",
          cursor: "pointer",
          position: "absolute",
          top: "20px",
          right: "20px", // Move the button to the right
          zIndex: 2,
          fontWeight: "bold", // Make the text bold
        }}
        onClick={openNav}
      >
        &#9776; open
      </span>

      {/* Center image */}
      <img
        src="/images/title.png" // Path to the image for the center
        alt="center"
        style={{
          position: "absolute",
          top: "-0.4%", // Adjust as needed for position
          left: "20%", // Adjust as needed for position
          width: "900px", // Larger size for the left image
          height: "auto", // Auto to maintain aspect ratio
          objectFit: "contain", // To ensure the whole image is visible
          objectPosition: "top", // Align image to the top
        }}
      />

      {/* Left corner image */}
      <img
        src="/images/ironman.jpg" // Path to the image for the left corner
        alt="Left Corner"
        style={{
          position: "absolute",
          top: "-12.4%", // Adjust as needed for position
          left: "-5%", // Adjust as needed for position
          width: "600px", // Larger size for the left image
          height: "auto", // Auto to maintain aspect ratio
          objectFit: "contain", // To ensure the whole image is visible
          objectPosition: "top", // Align image to the top
        }}
      />

      {/* Right corner image */}
      <img
        src="/images/batman.jpg" // Path to the image for the right corner
        alt="Right Corner"
        style={{
          position: "absolute",
          top: "-0.5%", // Adjust as needed for position
          right: "-5%", // Adjust as needed for position
          width: "600px", // Larger size for the right image
          height: "auto", // Auto to maintain aspect ratio
          objectFit: "contain", // To ensure the whole image is visible
          objectPosition: "top", // Align image to the top
        }}
      />
    </section>
  );
};

export default Section1;