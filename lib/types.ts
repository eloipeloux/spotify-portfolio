export enum Form {
    Initial,
    Loading,
    Success,
    Error
}

export type FormState = {
    state: Form;
    message?: string;
};

export type Song = {
    id: string;
    songUrl: string;
    preview: string;
    image: string;
    artist: string;
    title: string;
};

export type NowPlayingSong = {
    album: string;
    albumImageUrl: string;
    artist: string;
    isPlaying: boolean;
    songUrl: string;
    title: string;
};

export type TopTracks = {
    tracks: Song[];
};