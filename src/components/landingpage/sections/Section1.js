import React, { useState, useEffect } from "react";
import "./Section1.css"; // Import the CSS file

const Section1 = () => {
  // Target date and time for the countdown (change this as needed)
  const targetDate = new Date("2024-12-31T23:59:59").getTime();

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Function to calculate the remaining time
  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Format the time into DD:HH:MM:SS
  const formatTime = ({ days, hours, minutes, seconds }) => {
    return `${String(days).padStart(2, "0")}:${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  // Function to handle opening and closing the overlay
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
       
      </span>

      {/* Center image */}
      <img
        src="/images/title.png" // Path to the image for the center
        alt="center"
        style={{
          position: "absolute",
          top: "-20%", // Adjust as needed for position
          left: "13%", // Adjust as needed for position
          width: "1100px", // Larger size for the left image
          height: "auto", // Auto to maintain aspect ratio
          objectFit: "contain", // To ensure the whole image is visible
          objectPosition: "top", // Align image to the top
        }}
      />

      {/* Countdown Timer below the title.png */}
      <div
        style={{
          position: "absolute",
          top: "73%", // Adjust as needed for position
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          zIndex: 2,
          fontFamily: "'AvengersFont', sans-serif", // Use the custom font
          fontSize: "100px",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)", // Add a shadow for better visibility
          background: "linear-gradient(to right, red 50%, black 50%)", // Gradient background
          WebkitBackgroundClip: "text", // Clip the background to the text
          WebkitTextFillColor: "transparent", // Make the text transparent to show the gradient
          opacity: 0.9, // Reduce brightness
        }}
      >
        {formatTime(timeRemaining)}
      </div>

      {/* Left corner image */}
      <img
        src="/images/ironman.jpg" // Path to the image for the left corner
        alt="Left Corner"
        style={{
          position: "absolute",
          top: "1%", // Adjust as needed for position
          left: "-4%", // Adjust as needed for position
          width: "570px", // Larger size for the left image
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
          top: "3%", // Adjust as needed for position
          right: "-5%", // Adjust as needed for position
          width: "580px", // Larger size for the right image
          height: "auto", // Auto to maintain aspect ratio
          objectFit: "contain", // To ensure the whole image is visible
          objectPosition: "top", // Align image to the top
        }}
      />
    </section>
  );
};

export default Section1;