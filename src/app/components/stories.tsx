// // import { Box } from '@radix-ui/themes';
// // import React, { useEffect, useRef, useState } from 'react';

// // const VideoStories = ({ videos }: { videos: string[] }) => {
// //     const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
// //     const [videoProgress, setVideoProgress] = useState<number[]>(videos.map(() => 0));
// //     const videoRef = useRef<HTMLVideoElement>(null);

// //     useEffect(() => {
// //         const handleProgress = () => {
// //             const currentVideo = videoRef.current;
// //             if (currentVideo) {
// //                 const newProgress = (currentVideo.currentTime / currentVideo.duration) * 100;
// //                 setVideoProgress(prevProgress => {
// //                     const updatedProgress = [...prevProgress];
// //                     updatedProgress[currentVideoIndex] = newProgress;
// //                     return updatedProgress;
// //                 });
// //             }
// //         };

// //         const currentVideo = videoRef.current;
// //         if (currentVideo) {
// //             currentVideo.addEventListener('timeupdate', handleProgress);
// //             return () => currentVideo.removeEventListener('timeupdate', handleProgress);
// //         }
// //     }, [videos, currentVideoIndex]);

// //     useEffect(() => {
// //         const currentVideo = videoRef.current;
// //         console.log("what's happening", currentVideo)
// //         if (currentVideo) {
// //             currentVideo.src = videos[currentVideoIndex];
// //             console.log("check this", videos[currentVideoIndex])
// //             currentVideo.load();
// //             // Reset progress
// //             setVideoProgress(prevProgress => {
// //                 const updatedProgress = [...prevProgress];
// //                 updatedProgress[currentVideoIndex] = 0;
// //                 return updatedProgress;
// //             });
// //         }
// //     }, [currentVideoIndex, videos]);

// //     const handleVideoEnd = () => {
// //         if (videoProgress[currentVideoIndex] >= 100) {
// //             if (currentVideoIndex < videos.length - 1) {
// //                 setCurrentVideoIndex(prevIndex => prevIndex + 1);
// //             } else {
// //                 console.log('All videos have played');
// //             }
// //         }
// //     };

// //     return (
// //         <main>
// //             <Box>
// //                 <div className="pages-video-container rounded-2xl">
// //                     <video
// //                         autoPlay
// //                         loop
// //                         muted
// //                         className="pages-video-background"
// //                         ref={videoRef}
// //                         onEnded={handleVideoEnd}
// //                     >
// //                         <source src={videos[currentVideoIndex]} type="video/mp4" />
// //                         Your browser does not support the video tag.
// //                     </video>
// //                     <div className="pages-content flex flex-col justify-between h-full ">
// //                         <div className="absolute top-0 left-0 p-6 w-full">
// //                             <div className="flex justify-between items-center">
// //                                 {videos.map((_, index) => (
// //                                     <div key={index} className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
// //                                         <div
// //                                             className="bg-gray-600 h-1 rounded-full dark:bg-gray-300"
// //                                             style={{ width: `${videoProgress[index]}%` }}
// //                                         ></div>
// //                                     </div>
// //                                 ))}

// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </Box>
// //         </main>
// //     );
// // };

// // export default VideoStories;

// import { Box } from '@radix-ui/themes';
// import React, { useEffect, useRef, useState } from 'react';

// const VideoStories = ({ videos }: { videos: string[] }) => {
//     const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//     const [videoProgress, setVideoProgress] = useState(0);
//     const videoRef = useRef<HTMLVideoElement>(null);

//     useEffect(() => {
//         const handleProgress = () => {
//             const currentVideo = videoRef.current;
//             if (currentVideo) {
//                 const newProgress = (currentVideo.currentTime / currentVideo.duration) * 100;
//                 setVideoProgress(newProgress);
//             }
//         };

//         const handleVideoEnd = () => {
//             if (currentVideoIndex < videos.length - 1) {
//                 setCurrentVideoIndex(prevIndex => prevIndex + 1);
//             } else {
//                 console.log('All videos have played');
//             }
//         };

//         const currentVideo = videoRef.current;
//         if (currentVideo) {
//             currentVideo.addEventListener('timeupdate', handleProgress);
//             currentVideo.addEventListener('ended', handleVideoEnd);
//             currentVideo.src = videos[currentVideoIndex];
//             currentVideo.load();
//             currentVideo.play().catch(error => {
//                 console.error('Auto-play failed:', error);
//             });
//             return () => {
//                 currentVideo.removeEventListener('timeupdate', handleProgress);
//                 currentVideo.removeEventListener('ended', handleVideoEnd);
//             };
//         }
//     }, [currentVideoIndex, videos]);

//     return (
//         <main>
//             <Box>
//                 <div className="pages-video-container rounded-2xl">
//                     <video
//                         autoPlay
//                         muted
//                         className="pages-video-background"
//                         ref={videoRef}
//                         key={currentVideoIndex}
//                     >
//                         <source src={videos[currentVideoIndex]} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                     <div className="pages-content flex flex-col justify-between h-full">
//                         <div className="absolute top-0 left-0 p-6 w-full">
//                             <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
//                                 <div
//                                     className="bg-gray-600 h-1 rounded-full dark:bg-gray-300"
//                                     style={{ width: `${videoProgress}%` }}
//                                 ></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Box>
//         </main>
//     );
// };

// export default VideoStories;

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
                setCurrentVideoIndex(0); // Reset to the first video
                setPlaybackCompleted(true); // Mark playback as completed
            } else {
                setCurrentVideoIndex(prevIndex => prevIndex + 1);
            }
        };

        const handleVideoStart = () => {
            if (playbackCompleted) {
                setPlaybackCompleted(false); // Reset playback completion status
            }
        };

        const currentVideo = videoRef.current;
        if (currentVideo) {
            currentVideo.addEventListener('timeupdate', handleProgress);
            currentVideo.addEventListener('ended', handleVideoEnd);
            currentVideo.addEventListener('play', handleVideoStart); // Listen for the video to start playing
            currentVideo.src = videos[currentVideoIndex];
            currentVideo.load();
            currentVideo.play().catch(error => {
                console.error('Auto-play failed:', error);
            });
            return () => {
                currentVideo.removeEventListener('timeupdate', handleProgress);
                currentVideo.removeEventListener('ended', handleVideoEnd);
                currentVideo.removeEventListener('play', handleVideoStart); // Clean up event listener
            };
        }
    }, [currentVideoIndex, videos, playbackCompleted]);

    const activeColor = playbackCompleted ? "bg-black" : "bg-green-200";

    return (
        <main>
            <Box>
                <div className="pages-video-container xl:rounded-2xl shadow-2xl h-screen">
                    <video
                        autoPlay
                        muted
                        className="pages-video-background"
                        ref={videoRef}
                        key={currentVideoIndex}
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
                    </div>
                </div>
            </Box>
        </main>
    );
};

export default VideoStories;
