import React from "react";
import "./Sidebar.css";
import spotify_Logo from "./img/spotify_logo.jpg";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
function Sidebar() {
  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={spotify_Logo} alt="spotify Logo" />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />
    </div>
  );
}

export default Sidebar;
