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
};

export type NowPlayingSong = {
    album: string;
    albumImageUrl: string;
    artist: string;
    isPlaying: boolean;
    songUrl: string;
    title: string;
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
    image: string;
    preview: string;
}