import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  console.log("user in header", user);
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search for Artists, Songs, Podcasts" />
      </div>

      <div className="header__right">
        <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
