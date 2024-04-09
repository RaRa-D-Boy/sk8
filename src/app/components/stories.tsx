import { Box } from '@radix-ui/themes';
import React, { useEffect, useRef, useState } from 'react';

const VideoStories = ({ videos }: { videos: string[] }) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [videoProgress, setVideoProgress] = useState<number[]>(videos.map(() => 0));
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playbackCompleted, setPlaybackCompleted] = useState(false);

    useEffect(() => {
        const handleProgress = () => {
            const currentVideo = videoRef.current;
            if (currentVideo) {
                const newProgress = (currentVideo.currentTime / currentVideo.duration) * 100;
                setVideoProgress(prevProgress => {
                    const updatedProgress = [...prevProgress];
                    updatedProgress[currentVideoIndex] = newProgress;
                    return updatedProgress;
                });
            }
        };

        const handleVideoEnd = () => {
            if (currentVideoIndex === videos.length - 1) {
                setCurrentVideoIndex(0);
                setPlaybackCompleted(true);
                setVideoProgress(videos.map(() => 0));
            } else {
                setCurrentVideoIndex(prevIndex => prevIndex + 1);
            }
        };
        const handleVideoStart = () => {
            if (playbackCompleted) {
                setPlaybackCompleted(false);
            }
        };

        const currentVideo = videoRef.current;
        if (currentVideo) {
            currentVideo.addEventListener('timeupdate', handleProgress);
            currentVideo.addEventListener('ended', handleVideoEnd);
            currentVideo.addEventListener('play', handleVideoStart);
            currentVideo.src = videos[currentVideoIndex];
            currentVideo.load();
            currentVideo.play().catch(error => {
                console.error('Auto-play failed:', error);
            });
            return () => {
                currentVideo.removeEventListener('timeupdate', handleProgress);
                currentVideo.removeEventListener('ended', handleVideoEnd);
                currentVideo.removeEventListener('play', handleVideoStart);
            };
        }
    }, [currentVideoIndex, videos, playbackCompleted]);

    const activeColor = playbackCompleted ? "bg-black" : "bg-green-200";

    const goToNextVideo = () => {
        if (currentVideoIndex === videos.length - 1) {
            setVideoProgress(videos.map(() => 0));
        } else {
            setVideoProgress(prevProgress => {
                const updatedProgress = [...prevProgress];
                updatedProgress[currentVideoIndex] = 100;
                return updatedProgress;
            });
        }
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };
    
    const goToPreviousVideo = () => {
        setVideoProgress(prevProgress => {
            const updatedProgress = [...prevProgress];
            updatedProgress[currentVideoIndex] = 0;
            return updatedProgress;
        });

        const previousVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;

        setVideoProgress(prevProgress => {
            const updatedProgress = [...prevProgress];
            updatedProgress[previousVideoIndex] = 0; 
            return updatedProgress;
        });

        setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };



    return (
        <main>
            <Box>
                <div className="pages-video-container animate-fade-up animate-once  animate-ease-in  xl:rounded-2xl shadow-2xl h-[95vh] md:h-[90vh]">
                    <video
                        autoPlay
                        muted
                        className="pages-video-background"
                        ref={videoRef}
                        key={currentVideoIndex}
                        playsInline
                    >
                        <source src={videos[currentVideoIndex]} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="pages-content flex flex-col justify-between h-full">
                        <div className="absolute top-0 left-0 p-6 w-full">
                            <div className="flex justify-between items-center gap-2">
                                {videos.map((_, index) => (
                                    <div key={index} className="w-full bg-black rounded-full h-1 mb-4 ">
                                        <div
                                            className={`${activeColor} h-1 rounded-full`}
                                            style={{ width: `${videoProgress[index]}%` }}
                                        ></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between">
                            <button onClick={goToPreviousVideo} className='glass-card rounded-full text-white px-5 py-3 hover:bg-white hover:text-black'>{'<'}</button>
                            <button onClick={goToNextVideo} className='glass-card rounded-full px-5 text-white py-3 hover:bg-white hover:text-black'>{'>'}</button>
                        </div>
                    </div>
                </div>
            </Box>
        </main>
    );
};

export default VideoStories;