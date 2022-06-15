import React from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { LightPlaylist } from '../lib/types';
import { useSwiperSlide } from 'swiper/react';

const Playlist: React.FC<{ id: string, playlist: LightPlaylist }> = ({ id, playlist }) => {

    const swiperSlide = useSwiperSlide();
    
    return (
        <>
            <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden xl:aspect-w-7 xl:aspect-h-8
            min-h-[200px] min-w-[200px] max-h-[200px] max-w-[200px]">
                <Image
                    alt=""
                    src={playlist.image!}
                    className='rounded-lg'
                    // layout="fill" // Prend toute la H et L de la div --> pas de texte
                    layout="responsive"
                    width={150}
                    height={150}
                />
            </div>
            <div className={swiperSlide.isActive ? 'ease-in block' : 'ease-out hidden opacity-0'}>
                    <p className="text-center mt-4 text-lg text-white-700">
                        {playlist.name} -
                        <span className='text-green-500'> {playlist.tracks} tracks</span>
                    </p>
                </div>
            

        </>
    );
}

export default Playlist