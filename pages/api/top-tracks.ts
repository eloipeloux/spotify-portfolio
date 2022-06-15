import type { NextApiRequest, NextApiResponse } from 'next';
import { getTopTracks } from '../../lib/spotify';
import { LightTrack } from '../../lib/types';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const topTracks = await getTopTracks();

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=86400, stale-while-revalidate=43200'
    );

    if(topTracks instanceof Error) {
        console.log('ERROR TOPRACKS - ', topTracks)
        return res.status(500).json(topTracks);
    }

    // Top 15 fav songs
    const tracks: LightTrack[] = topTracks.slice(0, 15).map((track) => ({
        id: track.id,
        artist: track.artists.map((_artist) => _artist.name).join(', '),
        songUrl: track.external_urls.spotify,
        title: track.name,
        image: track.album.images[0].url,
        preview: track.preview_url
    }));

    return res.status(200).json(tracks);
}