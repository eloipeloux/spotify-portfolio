import type { NextApiRequest, NextApiResponse } from 'next';
import { getNowPlaying } from '../../lib/spotify';
import { isTrack, LightTrack } from '../../lib/types';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const song = await getNowPlaying();

    if(isTrack(song)) {

        const nowPlaying: LightTrack = {
            id: song.id,
            artist: song.artists.map((_artist) => _artist.name).join(', '),
            songUrl: song.external_urls.spotify,
            title: song.name,
            isPlaying: song.is_playing
        }
    
        res.setHeader(
            'Cache-Control',
            'public, s-maxage=60, stale-while-revalidate=30'
        );
    
        return res.status(200).json(nowPlaying);
    }
    return res.status(500).json(song);
}