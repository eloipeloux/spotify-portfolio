import type { NextApiRequest, NextApiResponse } from 'next';
import { getTopTracks } from '../../lib/spotify';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await getTopTracks();
    const { items } = await response.json();

    // Top 15 fav songs
    const tracks = items.slice(0, 15).map((track:any) => ({
        id: track.id,
        artist: track.artists.map((_artist:any) => _artist.name).join(', '),
        songUrl: track.external_urls.spotify,
        title: track.name,
        image: track.album.images[0].url,
        preview: track.preview_url
    }));

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=86400, stale-while-revalidate=43200'
    );

    return res.status(200).json({ tracks });
}