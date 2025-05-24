function NavBar() {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" />
        <ul className="ul">
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
        <button>login</button>
      </div>
    </nav>
  );
}

export default NavBar;
