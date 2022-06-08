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

export type Track = {
    id: string;
    external_urls: ExternalUrl; // add nullable
    preview_url: string;
    album: Album;
    artists: Artist[];
    name: string;
    is_playing?: boolean;
};

export type ExternalUrl = {
    spotify: string;
}

export type Artist = {
    name: string;
}

export type Album = {
    images: Cover[];
}

export type Cover = {
    url: string;
}

export type LightTrack = {
    id: string;
    artist: string;
    songUrl: string;
    title: string;
    image?: string;
    preview?: string;
    isPlaying?: boolean;
}

export type CurrentSong = Track | Error;

export const isTrack = (t: CurrentSong): t is Track => {
    return (t as Track).id !== undefined;
}