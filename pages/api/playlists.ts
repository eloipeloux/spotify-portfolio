import type { NextApiRequest, NextApiResponse } from 'next';
import { getPlaylists } from '../../lib/spotify';
import { LightPlaylist } from '../../lib/types';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const playlistsData = await getPlaylists();

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=60, stale-while-revalidate=30'
    );

    if (playlistsData instanceof Error) {
        console.log('ERROR PLAYLIST - ', playlistsData);
        return res.status(500).json(playlistsData);
    }

    const formattedPlaylists: LightPlaylist[] = playlistsData.map((playlist) =>
    ({
        id: playlist.id,
        name: playlist.name,
        image: playlist.images[0].url,
        url: playlist.external_urls.spotify,
        tracks: playlist.tracks.total
    })).sort((a, b) => b.tracks - a.tracks);

    return res.status(200).json(formattedPlaylists);
}