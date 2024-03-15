"use client"
import { Box, Container, Grid, } from '@radix-ui/themes';
import SK8 from '../../../public/sk8-9.png'
import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <main>
            <Container className="mx-4 my-2 md:mx-12 vibes md:my-6 xl:mx-28 xl:my-6 poppins">
                <div className="gap-3  grid grid-cols-6" >
                    <Box className="h-[90vh] col-span-2 relative">
                        <div>arrow</div>
                        <div>logo</div>
                        <div className="absolute bottom-0 p-6">
                            <div className="text-4xl my-4">About Us</div>
                            <div className="text-4xl my-4">Pro Level</div>
                            <div className="text-4xl my-4">Join Us</div>
                        </div>
                    </Box>
                    <Box className=" col-span-4 glass-card rounded-2xl p-6">
                        <Grid columns={{ initial: '1', md: '2' }} className="gap-6 p-6 bg-transparent rounded-2xl" width="auto" align="stretch">
                            <Box className="bg-about rounded-2xl">
                            </Box>
                            <Box className=" rounded-2xl ">
                                <Box className="my-6">
                                    <div className="text-white text-extrabold text-2xl">About Us</div>
                                    <div className='text-white text-[13px] my-3'>
                                        It is a long established fact that
                                        a reader will be distracted by
                                        the readable content of a page
                                        when looking at its layout. The
                                        point of using Lorem Ipsum is
                                        that it has a more-or-less
                                        normal distribution of letters,
                                        as opposed to using
                                        'Content here, content here',
                                        making it look like readable English.
                                        Many desktop publishing packages and
                                        web page editors now use Lorem Ipsum
                                        as their default model text, and a
                                        search for 'lorem ipsum' will uncover
                                        many web sites still in their infancy.
                                        Various versions have evolved over the years,
                                        sometimes by accident, sometimes on purpose
                                        (injected humour and the like).
                                    </div>

                                </Box>
                                <Box className="my-6">
                                    <div className="text-white text-extrabold text-2xl">Mission</div>
                                    <div className='text-white text-[13px] my-3'>
                                        It is a long established fact that
                                        a reader will be distracted by
                                        the readable content of a page
                                        when looking at its layout. The
                                        point of using Lorem Ipsum is
                                        that it has a more-or-less
                                        normal distribution of letters,
                                        as opposed to using
                                        'Content here, content here',
                                        making it look like readable English.
                                        Many desktop publishing packages and
                                        web page editors now use Lorem Ipsum
                                        as their default model text, and a
                                        search for 'lorem ipsum' will uncover
                                        many web sites still in their infancy.
                                        Various versions have evolved over the years,
                                        sometimes by accident, sometimes on purpose
                                        (injected humour and the like).
                                    </div>
                                </Box>

                                <Box className="my-6">
                                    <div className="text-white text-extrabold text-2xl">Vision</div>
                                    <div className='text-white text-[13px] my-3'>
                                        It is a long established fact that
                                        a reader will be distracted by
                                        the readable content of a page
                                        when looking at its layout. The
                                        point of using Lorem Ipsum is
                                        that it has a more-or-less
                                        normal distribution of letters,
                                        as opposed to using
                                        'Content here, content here',
                                        making it look like readable English.
                                        Many desktop publishing packages and
                                        web page editors now use Lorem Ipsum
                                        as their default model text, and a
                                        search for 'lorem ipsum' will uncover
                                        many web sites still in their infancy.
                                        Various versions have evolved over the years,
                                        sometimes by accident, sometimes on purpose
                                        (injected humour and the like).
                                    </div>
                                </Box>

                            </Box>
                        </Grid>
                    </Box>
                </div>

            </Container>
        </main>
    )
}
export default About;