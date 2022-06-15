import React from 'react';
import toast from 'react-hot-toast';
import useSWR from 'swr';

import fetcher from '../lib/fetcher';
import { LightTrack } from '../lib/types';
import BlurImage from './BlurImage';

const TopTracks: React.FC = () => {
    const { data } = useSWR<LightTrack[]>('/api/top-tracks', fetcher);

    // console.log('TOPTRACKS DATA -- ', data)
    // if (!data) {
    //     toast.error('Oops ... An error occured while trying to get the Top Tracks !');
    //     return null;
    // }

    return (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 2xl:max-w-full">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {data?.map((track) => (
                    <BlurImage key={track.id} track={track} id={''} />
                ))}
            </div>
        </div>
    );
}

export default TopTracks