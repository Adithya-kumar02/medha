import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Section4 = () => {
  return (
    <div style={styles.background}>
      {/* Inline CSS for fonts */}
      <style>
        {`
          @font-face {
            font-family: 'Avengers';
            src: url('/fonts/AVENGEANCE HEROIC AVENGER.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }

          @font-face {
            font-family: 'Avengers3D';
            src: url('/fonts/Avengers 3D.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
        `}
      </style>

      {/* Title */}
      <h1 style={styles.title}>
        G l i m p s  &nbsp;  &nbsp;of  &nbsp; <span style={styles.specialM}>M </span>E D H A  &nbsp; &nbsp;2024
      </h1>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const isValidScroll = scrollYProgress !== undefined && scrollYProgress !== null;
  const x = useTransform(
    isValidScroll ? scrollYProgress : [0, 1],
    [0, 1],
    ["0%", "-80%"]
  );

  if (!isValidScroll) {
    console.error("scrollYProgress is not defined");
    return null;
  }

  return (
    <section ref={targetRef} style={styles.section}>
      <div style={styles.stickyContainer}>
        <motion.div style={{ ...styles.motionDiv, x }}>
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div style={styles.card}>
      {card.type === "image" ? (
        <img src={card.url} alt={card.title} style={styles.media} />
      ) : (
        <video controls style={styles.media}>
          <source src={card.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div style={styles.cardOverlay}>
        <p style={styles.cardTitle}>{card.title}</p>
      </div>
    </div>
  );
};

export default Section4;

// Data for cards
const cards = [
  {
    url: "/images/ironman.jpg",
    title: "Image 1",
    type: "image",
    id: 1,
  },
  {
    url: "/videos/video1.mp4",
    title: "Video 1",
    type: "video",
    id: 2,
  },
  {
    url: "/images/ironman.jpg",
    title: "Image 2",
    type: "image",
    id: 3,
  },
  {
    url: "/videos/video2.mp4",
    title: "Video 2",
    type: "video",
    id: 4,
  },
  {
    url: "/images/ironman.jpg",
    title: "Image 3",
    type: "image",
    id: 5,
  },
  {
    url: "/videos/video3.mp4",
    title: "Video 3",
    type: "video",
    id: 6,
  },
  {
    url: "/images/ironman.jpg",
    title: "Image 4",
    type: "image",
    id: 7,
  },
  {
    url: "/videos/video3.mp4",
    title: "Video 3",
    type: "video",
    id: 6,
  },
  {
    url: "/images/ironman.jpg",
    title: "Image 4",
    type: "image",
    id: 7,
  },
  {
    url: "/videos/video3.mp4",
    title: "Video 3",
    type: "video",
    id: 6,
  },
  {
    url: "/images/ironman.jpg",
    title: "Image 4",
    type: "image",
    id: 7,
  },
];

// Internal CSS Styles
const styles = {
  background: {
    backgroundImage: "url('/images/bgf.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    margin: "2rem 0",
    background: "linear-gradient(90deg, #ff8a00, #e52e71)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "'Avengers', sans-serif", // Apply Avengers font
  },
  specialM: {
    fontFamily: "'Avengers3D', sans-serif", // Apply Avengers 3D font to "M"
  },
  section: {
    position: "relative",
    height: "150vh",
  },
  stickyContainer: {
    position: "sticky",
    top: 0,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },
  motionDiv: {
    display: "flex",
    gap: "1.5rem",
  },
  card: {
    position: "relative",
    height: "400px",
    width: "600px",
    overflow: "hidden",
    backgroundColor: "#e5e5e5",
    borderRadius: "20px",
  },
  media: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  cardOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "grid",
    placeContent: "center",
  },
  cardTitle: {
    background: "linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(179, 17, 17, 0))",
    backdropFilter: "blur(10px)",
    padding: "2rem",
    borderRadius: "10px",
    fontSize: "2rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
  },
};