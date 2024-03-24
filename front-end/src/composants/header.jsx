import React from "react";
import { FaSearch, FaEnvelope } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div class="SearchBox">
          <input
            type="text"
            class="SearchBox-input"
            placeholder="Rechercher..."
          />

          <button class="SearchBox-button">
            <span className="SearchBox-icon">
              <FaSearch />
            </span>
          </button>
        </div>
      </div>
      <div className="header-right">
        <span id="i-head">
          <FaBell />
        </span>
        <span id="i-head">
          <FaEnvelope />
        </span>
        <span id="i-head">
          <IoSettingsSharp />
        </span>
      </div>
    </header>
  );
}

export default Header;
