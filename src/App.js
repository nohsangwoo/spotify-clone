import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";
import Player from "./Player";
import { getTokenFromResponse } from "./spotify";
import "./App.css";
import Login from "./Login";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    // 토큰 설정
    const hash = getTokenFromResponse();
    // 새로고침하면 로그인이 풀리게 만듬(getTokenFromResponse에서 가져온 access_token값을 지움 )
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      // spotify API에 token으로 로그인 함
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // 원하는 플레이리스트의 곡 목록을 직접 가져와서 뿌림
      spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      // 로그인 한 유저의 정보를 받아옴
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        console.log("playlists in app", playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
    // BEM
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
