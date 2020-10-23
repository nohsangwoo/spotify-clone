import React from "react";
import "./Sidebar.css";
import spotify_Logo from "./img/spotify_logo.jpg";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "./StateProvider";
import { getTokenFromResponse } from "./spotify";
function Sidebar() {
  const [
    { playlists, token, playing, user, discover_weekly },
    dispatch,
  ] = useStateValue();

  console.log("discover_weekly", discover_weekly);
  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={spotify_Logo} alt="spotify Logo" />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
      <SidebarOption title="Hip hop" />
      <SidebarOption title="Rock" />
      <SidebarOption title="RnB" />
    </div>
  );
}

export default Sidebar;
