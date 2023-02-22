import React, { useState } from "react";
import logo from "../../assets/logo-la-nacion.png";
import { BiSearchAlt2 } from "react-icons/bi";

// import "./style.css";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <header className="header --scrollUp">
      <div className="lay">
        <div className="row">
          <div className="col-4 header__left">
            <div className="com-hamburger">
              <span className="com-hamburger__bar"></span>
              <span className="com-hamburger__bar"></span>
              <span className="com-hamburger__bar"></span>
            </div>
            <form className="com-search ">
              <input
                type="text"
                className="com-search__input"
                placeholder="Buscar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <i className="icon-search">
                <BiSearchAlt2 />
              </i>
            </form>
          </div>
          <div className="col-4  header__middle">
            <a href="/" className="header__middle__logo">
              <img
                className="logo-la-nacion"
                src={logo}
                style={{ width: "307px", height: "31px" }}
              />
            </a>
          </div>
          <div className="col-4 header__right">
            <div className="com-usuario">
              <button className="--btn --highlight hlp-marginRight-35">
                Suscribite
              </button>
              <button className="--btn --secondary">Ingresar</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
