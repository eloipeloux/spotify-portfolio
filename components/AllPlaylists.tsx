import React from 'react';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import { LightPlaylist } from '../lib/types';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import Playlist from './Playlist';

import "swiper/css";
import "swiper/css/effect-cards";

const AllPlaylists: React.FC = () => {
    const { data } = useSWR<LightPlaylist[]>('/api/playlists', fetcher);

    // console.log('PLAYLISTS DATA -- ', typeof data)
    // if (!data) {
    //     toast.error('Oops ... An error occured while trying to get the playlists !');
    //     return null;
    // }

    return (
        <div className='pb-16'>
            <p className='text-xl text-center sm:text-3xl mb-10'>
                What about my playlists ? Let&apos;s find out !
            </p>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper h-auto w-auto"
            >
                {data?.map((playlist) => (
                    <SwiperSlide key={playlist.id} className='justify-items-center'>
                        <Playlist id={playlist.id} playlist={playlist} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default AllPlaylists