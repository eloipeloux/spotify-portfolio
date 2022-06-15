import React, { useState } from 'react';
import Image from 'next/image';
import { createGlobalState } from 'react-hooks-global-state'
import toast from 'react-hot-toast';
import { LightTrack } from '../lib/types';

const { useGlobalState } = createGlobalState({
    interactableNotified: false,
    activeTrack: '',
});

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

// Inspo function https://dev.to/haydenbleasel/creating-a-no-auth-spotify-playlist-preview-with-nextjs-3dk1

const BlurImage: React.FC<{ id: string, track: LightTrack }> = ({ id, track }) => {

    const [isLoading, setLoading] = useState(true)

    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [fadeIn, setFadeIn] = useState<ReturnType<typeof setInterval> | null>(
        null
    );
    const [fadeOut, setFadeOut] = useState<ReturnType<typeof setInterval> | null>(
        null
    );
    const [interactable, setInteractable] = useState<boolean>(false);
    const [interactableNotified, setInteractableNotified] = useGlobalState(
        'interactableNotified'
    );
    const [activeTrack, setActiveTrack] = useGlobalState('activeTrack');

    const play = () => {
        if (audio || !track.preview) {
            return;
        }

        const newAudio = new Audio(track.preview);
        newAudio.volume = 0;

        setActiveTrack(track.id);

        newAudio
            .play()
            .then(() => {
                setInteractable(true);
                if (interactableNotified) {
                    setInteractableNotified(false);
                    toast.success('Awesome ! You’re good to go, enjoy.');
                }
            })
            .catch((error) => {
                const message =
                    error instanceof Error ? error.message : (error as string);
                if (message.includes("user didn't interact with the document first")) {
                    if (!interactableNotified) {
                        toast(
                            'Please click anywhere on the page to preview tracks on hover.'
                        );
                        setInteractableNotified(true);
                        return;
                    }
                    return;
                }

                if (!message.includes('interrupted by a call to pause()')) {
                    toast.error(message);
                }
            });

        const timer = setInterval(() => {
            if (newAudio.volume < 1) {
                newAudio.volume = Number((newAudio.volume + 0.05).toFixed(2));
            } else if (fadeIn) {
                clearInterval(fadeIn);
            }
        }, 100);

        setFadeIn(timer);
        setAudio(newAudio);
    };

    const stop = () => {
        if (!audio) {
            return;
        }

        const originalVolume = audio.volume;

        setAudio(null);
        setActiveTrack('');

        if (fadeIn) {
            clearInterval(fadeIn);
        }

        setFadeOut(
            setInterval(() => {
                if (audio.volume > 0) {
                    audio.volume = Number((audio.volume - 0.05).toFixed(2));
                } else if (fadeOut) {
                    clearInterval(fadeOut);
                }
            }, 100)
        );

        setTimeout(() => {
            audio.pause();
        }, (originalVolume / 0.05) * 100);
    };

    return (
        <a href={track.songUrl} target="_blank" rel="noreferrer" className="group">
            <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden xl:aspect-w-7 xl:aspect-h-8 d-block rounded-lg">
                <Image
                    alt=""
                    src={track.image!}
                    layout="responsive"
                    className={cn(
                        'group-hover:opacity-75 duration-700 ease-in-out',
                        isLoading
                            ? 'grayscale blur-2xl scale-110'
                            : 'grayscale-0 blur-0 scale-100'
                    )}
                    width={150}
                    height={150}
                    onLoadingComplete={() => setLoading(false)}
                    onMouseOver={play}
                    onMouseLeave={stop}
                    onFocus={play}
                    onBlur={stop}
                />
            </div>
            <h3 className="mt-4 text-sm text-white-700">{track.title}</h3>
            <p className="mt-1 text-lg font-medium text-green-500">{track.artist}</p>
        </a>
    );
}

export default BlurImage