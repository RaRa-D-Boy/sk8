"use client"
import { Box, Container, Grid } from '@radix-ui/themes';
import React, { useEffect, useRef } from 'react';
import VideoStories from '../components/stories';

const About = () => {

    const stories = [
        {video:"/home-vid3.mp4"},
        {video:"/home-vid3.mp4"},
        {video:"/home-vid3.mp4"},
    ]

    return (
        <main>
            <Container className="mx-4 my-2 md:mx-12 vibes md:my-6 xl:mx-28 xl:my-6 poppins">
                <Grid columns={{ initial: '1', md: '2' }} className="gap-3" width="auto" align="stretch">
                  <Box>
                  {stories.map((data)=>(
                    <VideoStories videos={[data.video]}/>
                  ))}
                  </Box> 
                    <Box>
                        {/* Your additional content here */}
                        next
                    </Box>
                </Grid>
            </Container>
        </main>
    );
};

export default About;
