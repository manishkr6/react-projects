import React, { useState, useRef } from "react";
import "./App.css";
import Footer from "./Footer";
import Navigation from "./Navigation";
import styled from "styled-components";

function ImageResize() {
  const [image, setImage] = useState(null);
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const canvasRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          setWidth(img.width);
          setHeight(img.height);
          setImage(img);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResize = () => {
    if (image && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, width, height);
    }
  };

  const handleDownload = () => {
    if (canvasRef.current) {
      const link = document.createElement("a");
      link.download = "resized-image.png";
      link.href = canvasRef.current.toDataURL("image/png");
      link.click();
    }
  };

  return (
    
    <div className="resize" style={{ backgroundColor: "#1c1c1c", textAlign: "center", padding: "20px" }}>
        <Navigation />
        <h1>Image Resizer</h1>
        <p>Resize image online</p>
        <div className="custom-file-input-container">
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <label htmlFor="fileInput" className="custom-file-label">
            Choose File
          </label>
        </div>
        {image && (
          <>
            <div style={{ margin: "20px 0" }}>
              <label>
                Width:
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(parseInt(e.target.value) || 0)}
                />
              </label>
              <label style={{ marginLeft: "10px" }}>
                Height:
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(parseInt(e.target.value) || 0)}
                />
              </label>
            </div>
            <button onClick={handleResize}>Resize Image</button>
            <div style={{ margin: "20px 0" }}>
              <canvas
                ref={canvasRef}
                style={{ border: "1px solid #000" }}
              ></canvas>
            </div>
            <div style={{ margin: "5rem" }}>

            <button onClick={handleDownload}>Download Resized Image</button>
            </div>
          </>
        )}
        <Footer/>
      </div>
  );
}

export default ImageResize;


