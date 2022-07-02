import SpotifyWebApi from "spotify-web-api-node";

const scopes: Array<string> = [
    "user-read-private",
    "user-read-email",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-read-private",
    "playlist-modify-private"
];

const params = {
    scopes: scopes.join(','),
}

const queryParamString = new URLSearchParams( params );

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID ?? '',
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET ?? '',
});

export default spotifyApi;
export { LOGIN_URL };
