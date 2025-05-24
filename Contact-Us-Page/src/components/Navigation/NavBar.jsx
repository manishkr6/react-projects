import styles from "./NavBar.module.css";

const NavBar = () => { 
  return (
    <nav className={`${styles.navigation } container`}>
      <div className="logo">
        <img src="/images/Frame 2 1.png" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;