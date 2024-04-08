"use client"
import { Box, Container, Grid } from '@radix-ui/themes';
import React from 'react';
import VideoStories from '../components/stories';
import { KnowUs } from '../components/know-us-content';

const About = () => {
  const stories = ["/home-vid3.mp4", "/home-vid2.mp4", "/home-vid3.mp4"]

  return (
    <main className="h-auto ">
      <Container className="mx-0 my-0 md:mx-0 vibes lg:mx-0 md:my-0 xl:mx-12 xl:my-6 poppins ">

        <Grid columns={{ initial: '1', md: '2' }} className="gap-0  xl:gap-3" width="auto" align="stretch">
          <Box >
            <div className="hidden lg:block">
              <VideoStories videos={stories} />
            </div>

          </Box>
          <Box className="bg-white rounded-2xl">
            <KnowUs />
          </Box>
        </Grid>
      </Container>
    </main>
  );
};

export default About;
