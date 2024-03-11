"use client"
import { Box, Container, Grid, Card, Text, Button } from '@radix-ui/themes';
import SK8 from '../../../public/sk8-9.png'
import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <main>
            <Container className="mx-8 my-2 md:mx-8 md:my-6 xl:mx-56 xl:my-6">
                <Grid columns={{ initial: '1', md: '2' }} className="gap-3" width="auto" align="stretch">
                    <Box>
                        <Box className="bg-card rounded-2xl relative ">
                            <div className="absolute bottom-0 p-6">
                                <div className="poppins text-3xl " >
                                    Collude Everywhere
                                </div>
                                <div>
                                    <button className="rounded-3xl text-xs bg-black text-white py-2 px-4 ">
                                        Sign up
                                    </button>
                                </div>
                            </div>
                        </Box>
                        <Box className="bg-white my-3 rounded-2xl p-6 text-black flex ">
                            <div>
                                <p className='font-extrabold font-poppins text-lg my-3' >Pro Level</p>
                                <p className='text-sm'>
                                    For those new to skating, we offer semi-private and private lessons with  our certified coaches. Email us for availability and to sign up for a  session.For those new to skating, we offer semi-private and private lessons with  our certified coaches. Email us for availability and to sign up for a  session.
                                </p>
                                <button className="rounded-3xl my-3 text-xs bg-black text-white py-2 px-4 ">
                                    Pro Level
                                </button>
                            </div>
                            <div>
                                <Image src={SK8} alt="SK8" className="object-fit w-[800px] h-full" />
                            </div>
                        </Box>
                        <Box>
                            <Grid columns={{ initial: '1', md: '2' }} className="gap-3" width="auto" align="stretch">
                                <Box className="bg-purchase rounded-2xl relative">
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>
                                    <div className="absolute bottom-0 p-6 z-10"> {/* Adjusted z-index */}
                                        <div className="text-white font-medium text-xs my-3">
                                            Purchase all your skating equipment here.
                                            Skate shoes, helmets, boards all at affordable prices.
                                        </div>
                                        <div>
                                            <button className="rounded-3xl text-xs bg-black text-white py-2 px-4 ">
                                                Purchase Board
                                            </button>
                                        </div>
                                    </div>
                                </Box>
                                <Box className="bg-learn rounded-2xl relative">
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>
                                    <div className="absolute bottom-0 p-6 z-10"> {/* Adjusted z-index */}
                                        <div className="text-white font-medium text-xs my-3">
                                            Purchase all your skating equipment here.
                                            Skate shoes, helmets, boards all at affordable prices.
                                        </div>
                                        <div>
                                            <button className="rounded-3xl text-xs bg-black text-white py-2 px-4 ">
                                                Join us.
                                            </button>
                                        </div>
                                    </div>
                                </Box>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className="relative bg-white rounded-2xl">
                        <Box className="bg-card2 rounded-2xl relative grid place-items-center">
                            <div className="absolute p-6">
                                <div className='text-sm font-semibold my-12'>Group Together</div>
                                <div className="poppins text-6xl">
                                    Carry Your
                                    <br></br> Group Together
                                    <br></br> Right Here
                                </div>
                                <div className='my-12 text-sm font-semibold'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                </div>
                            </div>
                        </Box>
                        <Box className="absolute bg-white px-8  py-12 mt-[-5%] w-full rounded-2xl">
                            <Grid columns={{ initial: '1', md: '2' }} className="gap-3 bg-white" width="auto" align="center">
                                <Box className="bg-sataday rounded-2xl relative">
                                </Box>
                                <Box>
                                    <div className='text-black text-sm p-3'>
                                        Join us every Saturday for a fun and inclusive skating session open to  all ages and skill levels! Whether you're a beginner looking to learn  the basics or an experienced skater wanting to practice and teach, our  open skating sessions are the perfect opportunity to enjoy the sport and  connect with the community.
                                    </div>
                                    <div className='text-end'>
                                        <button className="rounded-3xl text-xs bg-black  text-white py-2 px-4 ">
                                            Learn more.
                                        </button>
                                    </div>

                                </Box>
                            </Grid>
                        </Box>

                    </Box>
                </Grid>
            </Container>
        </main>
    )
}
export default About;