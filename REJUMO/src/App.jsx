import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ImageResize from "./components/ImageResize";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ImageResize" element={<ImageResize />} />
          <Route path="/contact-us" element={<ContactUs/>} />
          {/* <Route path="/Youtube" element={"https://turboscribe.ai/downloader/youtube/video"} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
