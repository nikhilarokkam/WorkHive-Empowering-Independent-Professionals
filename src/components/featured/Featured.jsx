import React, { useState, useEffect } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";
import "./typewriter.css";

function Featured() {
  const [input, setInput] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWordProgress, setCurrentWordProgress] = useState(0);
  const navigate = useNavigate();
  const [bgColorIndex, setBgColorIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const words = ["freelance", "innovative", "professional"]; // Array of different words
  const backgroundColors = ["#013914", "#B91646", "#F97B22"]; // Array of different background colors
  const images = ["man.png", "circleoftalent.png", "man1.png"]; // Array of different image filenames

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentWordProgress((prevProgress) => prevProgress + 1);
    }, 200); // Typing speed

    const wordLength = words[currentWordIndex].length;

    if (currentWordProgress > wordLength) {
      clearInterval(typingInterval);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setCurrentWordProgress(0);
      }, 1000); // Time to show the word before erasing
    }

    return () => clearInterval(typingInterval);
  }, [currentWordIndex, currentWordProgress, words]);

  useEffect(() => {
    const bgColorInterval = setInterval(() => {
      setBgColorIndex((prevIndex) => (prevIndex + 1) % backgroundColors.length);
    }, 3000); // Change background color every 3 seconds

    const imageInterval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(bgColorInterval);
      clearInterval(imageInterval);
    };
  }, []);

  const handleSubmit = () => {
    navigate(`/gigs?cat=${input}`);
  };

  const featuredStyle = {
    backgroundColor: backgroundColors[bgColorIndex],
  };

  const imageSrc = `./img/${images[imageIndex]}`;

  return (
    <div className="featured" style={featuredStyle}>
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect{" "}&nbsp;
            <span className="typewriter">
              {words[currentWordIndex].substring(0, currentWordProgress)}
            </span>{" "}&nbsp;
            services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='Try "building mobile app"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src={imageSrc} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
