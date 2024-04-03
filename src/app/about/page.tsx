"use client"
import { Box, Container, Grid } from '@radix-ui/themes';
import React, { useEffect, useRef } from 'react';
import VideoStories from '../components/stories';
import { KnowUs } from '../components/know-us-content';

const About = () => {
    const stories = ["/home-vid3.mp4","/home-vid2.mp4" ,"/home-vid3.mp4"]

    return (
        <main>
            <Container className="mx-4 my-2 md:mx-12 vibes md:my-6 xl:mx-28 xl:my-6 poppins">
                <Grid columns={{ initial: '1', md: '2' }} className="gap-3" width="auto" align="stretch">
                  <Box >
                    <div className="hidden lg:block">
                    <VideoStories videos={stories}/>
                    </div>
                  
                  </Box> 
                    <Box className="bg-white md:shadow-2xl rounded-2xl">
                      <KnowUs/>
                    </Box>
                </Grid>
            </Container>
        </main>
    );
};

export default About;
