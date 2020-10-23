import React, { useEffect, useState } from "react";
import Login from "./Login";
import "./App.css";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();
function App() {
  const [{ user, token, playlists }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    // 새로고침하면 로그인이 풀리게 만듬(getTokenFromResponse에서 가져온 access_token값을 지움 )
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // spotify API에 token으로 로그인 함
      spotify.setAccessToken(_token);

      // 로그인 한 유저의 정보를 받아옴
      spotify.getMe().then((user) => {
        // console.log("user>>>", user);

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getPlaylist("3i4fufWchhstA0aeN1B7ue").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      spotify.getUserPlaylists().then((playlists) => {
        console.log("playlists in app", playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
  }, [user, playlists, token, dispatch]);

  // console.log("user in app", user);
  // console.log("playlists in app", playlists);
  return (
    // BEM
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
