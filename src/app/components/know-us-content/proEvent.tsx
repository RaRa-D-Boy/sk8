import React from 'react';
import { Box } from '@radix-ui/themes';

const ProEvent = () => {
    return (
        <div className="text-black px-6 py-4 text-[15px] h-[auto] lg:h-[750px] lg:overflow-scroll">
            <div className="block lg:hidden animate-fade-up animate-once  animate-delay-[800ms] animate-ease-in">
                <Box className="proEventImg">
                </Box>            
            </div>
            <h1 className="p-3 animate-fade-up animate-once  animate-delay-[1000ms] animate-ease-in"><strong>Join Us for Thrilling Skating Adventures at Our Monthly Pro Event!</strong></h1>
            <p className="p-3 animate-fade-up animate-once  animate-delay-[1100ms] animate-ease-in">Calling all skaters, enthusiasts, and adrenaline-seekers! Get ready for an unforgettable experience as SK8 invites you to our monthly Pro Event, held every last Saturday of the month. Prepare to be dazzled by an array of exhilarating skating competitions, challenges, and showcases that will push the boundaries of what's possible on wheels.</p>

            <h2 className="p-3 animate-fade-up animate-once  animate-delay-[1200ms] animate-ease-in"><strong>What to Expect:</strong></h2>
            <ul className="p-3 ">
                <li className="py-3 animate-fade-up animate-once  animate-delay-[1250ms] animate-ease-in"><strong>Thrilling Competitions:</strong> <br></br>Watch in awe as skilled skaters from all over come together to showcase their talent in a variety of competitions, including freestyle, vert, street, and more. From jaw-dropping tricks to mind-blowing stunts, you'll witness the best of the best battle it out for glory and bragging rights.</li>
                <li className="py-3 animate-fade-up animate-once  animate-delay-[1300ms] animate-ease-in"><strong>Exciting Challenges:</strong><br></br> Test your skills and challenge yourself with a series of adrenaline-pumping challenges designed to push your limits and ignite your competitive spirit. Whether you're a seasoned pro or a newcomer to the scene, there's something for everyone to enjoy and participate in.</li>
                <li className="py-3 animate-fade-up animate-once  animate-delay-[1350ms] animate-ease-in"><strong>Epic Showcases:</strong> <br></br>Be inspired by captivating showcases featuring top-tier skaters who will leave you breathless with their awe-inspiring performances. From gravity-defying jumps to seamless transitions, you'll witness the artistry and athleticism of skating at its finest.</li>
            </ul>

            <h2 className="p-3 animate-fade-up animate-once  animate-delay-[1400ms] animate-ease-in " ><strong>How to Get Involved:</strong></h2>
            <p className="p-3 animate-fade-up animate-once  animate-delay-[1500ms] animate-ease-in">Joining the action is easy! Simply mark your calendar for the last Saturday of the month and make your way to our designated event location. Whether you're a participant or a spectator, all are welcome to come and experience the excitement firsthand.</p>

            <h2 className="p-3 animate-fade-up animate-once  animate-delay-[1600ms] animate-ease-in " ><strong>How to Get Involved:</strong></h2>
            <h2 className="p-3 animate-fade-up animate-once  animate-delay-[1700ms] animate-ease-in "><strong>Spread the Word:</strong></h2>
            <p className="p-3 animate-fade-up animate-once  animate-delay-[1800ms] animate-ease-in ">Don't keep the excitement to yourself! Share the news with your fellow skaters, friends, and family members. The more, the merrier! Let's come together as a community and celebrate the thrill of skating in all its glory.</p>

            <h2 className="p-3 animate-fade-up animate-once  animate-delay-[1900ms] animate-ease-in "><strong>Get Ready to Skate:</strong></h2>
            <p className="p-3 animate-fade-up animate-once  animate-delay-[2000ms] animate-ease-in ">Get your gear ready, lace up your skates, and prepare for an epic day of skating adventures at our monthly Pro Event. Whether you're a seasoned pro or just starting out, there's something for everyone to enjoy. Join us as we push the limits, defy gravity, and embrace the thrill of skating like never before. See you there!</p>
        </div>
    );
};

export default ProEvent;
