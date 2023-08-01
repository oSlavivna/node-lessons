import { useState } from "react";
import menuImage from "../public/icons8-меню.svg";

function HamburgerMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="cursor">
      <img onClick={toggleMenu} src={menuImage} alt="" />
     
      {isMenuOpen && (
        <div className="menuLi">
          <ul>
            <li>main page</li>
            <li>cataloge</li>
            <li>contacts</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
