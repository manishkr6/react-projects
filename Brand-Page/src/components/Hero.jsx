function HeroSection() {
  return (
    <main className="hero container">
      <div className="content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST YOUR FEET DESERVE THE BEST AND WE'RE HERE
          TO HELP YOU WITH OUR SHOES.
        </p>

        <div className="btn">
          <button>Shop Now</button>
          <button className="second-btn">Category</button>
        </div>

        <div className="shop">
          <p>Aslo Available On</p>

          <div className="brand-icons">
            <img src="/images/amazon.png"/>
            <img src="/images/flipkart.png"/>
          </div>
        </div>
      </div>
      <div className="image">
      <img src="/images/shoe_image.png"/>
      </div>
    </main>
  );
}

export default HeroSection;
