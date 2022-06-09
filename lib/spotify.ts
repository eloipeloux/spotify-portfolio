import { Form, Playlist, Track } from "./types";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const PLAYLISTS_ENDPOINT = `https://api.spotify.com/v1/me/playlists`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {

    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token,
        })
    });

    if (response.status === 400) {
        throw new Error(`An error has occured while getting the data from Spotify's API`)
    }

    return response.json();
};

// Prettier code ?
/*
const getDataFromAPI = async (endpoint: string) => {
    try {
        const { access_token } = await getAccessToken();

        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });

        return response;
    } catch (e) {
        console.log('getDataFromAPI -- ', e);
        return;
    }
}
*/

export const getNowPlaying = async () => {
    try {
        const { access_token } = await getAccessToken();

        const response = await fetch(NOW_PLAYING_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });

        const song = (await response.json()).item;
        song.is_playing = true;

        if (response.status === 204 || response.status > 400) {
            song.is_playing = false;
        }

        return song as Track;
    } catch (e) {
        return e as Error;
    }
};

export const getTopTracks = async () => {
    try {
        const { access_token } = await getAccessToken();

        const res = await fetch(TOP_TRACKS_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });

        const topTracks = (await res.json()).items as Track[]

        return topTracks;
    } catch (e) {
        return e as Error;
    }
};

export const getPlaylists = async () => {
    try {
        const { access_token } = await getAccessToken();

        const res = await fetch(PLAYLISTS_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });

        const playlists = (await res.json()).items as Playlist[]

        return playlists;
    } catch (e) {
        return e as Error;
    }
};