export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //   remove after finished developing
  token:
    "BQAJNDmf3yaIy2F6fBm58fw1hTl7nohhWYmDjm7AtzH6G0anD_…s2X3273tQ1EecNL7Bgm4uDP7u9_FM3wE-RFMePooRfjx-GtfD",
};

//Action -> type, [payload]

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
