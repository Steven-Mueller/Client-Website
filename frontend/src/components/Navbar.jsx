import React, { useEffect, useState } from "react";
import menuImg from "../assets/menu.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [feedText, setFeedText] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [serverData, setServerData] = useState(null);

  async function getTwitchStatus() {
    try {
      const response = await fetch("http://localhost:3001/");
      const data = await response.json();
      setServerData(data);
    } catch (err) {
      console.log("Couldn't get response from API !");
    }
  }

  useEffect(() => {
    if (!serverData) {
      getTwitchStatus();
    }
    isChecked ? setFeedText("ON") : setFeedText("OFF");
  }, [isChecked]);

  return (
    <>
      <div className="dropdown">
        <button className="focus:bg-white rounded-full my-2">
          <img src={menuImg} alt="menu" />
        </button>
        <div className="dropdown-content">
          <NavLink className="link" to="/">
            Startseite
          </NavLink>
          <NavLink className="link" to="/references">
            Referenzen
          </NavLink>
          <NavLink className="link" to="/social">
            Social Media
          </NavLink>
          <NavLink className="link" to="/contact">
            Kontakt
          </NavLink>
          <NavLink className="link" to="/impress">
            Impressum
          </NavLink>
        </div>
      </div>
      <h1>Der_Blenderdulli</h1>
      <div className="flex flex-col gap-2 py-1 text-center">
        <a
          className={
            serverData && serverData.data.length > 0
              ? "twitch-text-live bg-purple-600 px-2 py-0.5 rounded-md shadow-inner shadow-yellow-500/50"
              : "twitch-text bg-purple-600 px-2 py-0.5 rounded-md shadow-inner shadow-yellow-500/50"
          }
          href="https://www.twitch.tv/der_blenderdulli"
          target="_blank"
        >
          Twitch
        </a>
        <a
          className="yt-text bg-red-600 rounded-md py-0.5 shadow-inner shadow-white/30"
          href="https://www.youtube.com/@der_blenderdulli"
          target="_blank"
        >
          YouTube
        </a>
        <label className="switch">
          <input
            className="switch-checkbox"
            type="checkbox"
            onChange={(e) => {
              setIsChecked(e.target.checked);
            }}
          />
          <span
            className={
              isChecked
                ? "slider text-position-left rounded-full before:rounded-full"
                : "slider text-position-right rounded-full before:rounded-full"
            }
          >
            Feed: {feedText}
          </span>
        </label>
      </div>
    </>
  );
}

export default Navbar;
