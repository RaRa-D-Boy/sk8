"use client"
import { Box, Container, Grid, } from '@radix-ui/themes';
import React from 'react';
import FloatingButton from './components/floatingBtn';

const Home = () => {
  return (
    <main className="glass-card">
      <Container className="mx-4 my-2 md:mx-8 lg:mx-28 vibes md:my-6 xl:mx-28 xl:my-6 poppins">
        <Grid columns={{ initial: '1', md: '2' }} className="gap-3" width="auto" align="stretch">
          <Box>
            <div className="video-container rounded-2xl">
              <video autoPlay loop muted className="video-background">
                <source src="/home-vid3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="content flex flex-col justify-between  h-full ">
                <div className=" absolute bottom-0 left-0 p-6 w-full">
                  <Box className="flex justify-between items-center">
                    <div>
                      <div className="poppins logo text-3xl mb-2 text-white">
                        We Are Everywhere Chale !
                      </div>
                      <div>
                        <button className="rounded-3xl poppins text-xs glass-btn backdrop-blur-xl text-white py-2 px-4">
                          Sign up
                        </button>
                      </div>
                    </div>
                    <div className="logo  poppins logo text-3xl bg-white rounded-full text-black py-6 px-5">
                      sk8
                    </div>
                  </Box>

                </div>
              </div>
            </div>
            <Box className="bg-white my-3 rounded-2xl p-6 shadow-2xl text-black flex ">
              <div>
                <p className='font-extrabold poppins text-lg my-3' >Pro Level</p>
                <p className='text-sm'>
                  For those new to skating, we offer semi-private and private lessons with  our certified coaches. Email us for availability and to sign up for a  session.For those new to skating, we offer semi-private and private lessons with  our certified coaches. Email us for availability and to sign up for a  session.
                </p>
                <div className='my-3'>
                  <button className="rounded-3xl  text-xs glass-btn-dark  py-2 px-4 ">
                    Pro Level
                  </button>
                </div>

              </div>
              <div>
              </div>
            </Box>
            <Box >
              <Grid columns={{ initial: '1', xs: '2', md: '2' , lg:'2' }} className="gap-3" width="auto" align="stretch">
                <Box className="bg-purchase  poppins rounded-2xl relative">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>
                  <div className="absolute bottom-0 p-6 z-10"> {/* Adjusted z-index */}
                    <div className="text-white font-medium text-xs my-3">
                      Purchase all your skating equipment here.
                      Skate shoes, helmets, boards all at affordable prices.
                    </div>
                    <div>
                      <button className="rounded-3xl text-xs glass-btn text-white py-2 px-4 ">
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
                      <button className="rounded-3xl text-xs glass-btn text-white py-2 px-4 ">
                        Join us.
                      </button>
                    </div>
                  </div>
                </Box>
              </Grid>
            </Box>
          </Box>
          <Box className="relative  bg-transparent shadow-2xl  md:bg-white rounded-2xl">
            <Box className="bg-card2 h-[600px] md:h-[400px] lg:h-[400px] xl:h-[600px] rounded-2xl  relative grid place-items-center">
              <div className="absolute px-6 md:px-6 text-white">
                <div className='text-sm font-normal my-12'>Group Together</div>
                <div className="poppins text-5xl lg:text-2xl xl:text-6xl">
                  <div className="poppins text-5xl lg:text-2xl xl:text-6xl">
                    Carry Your
                    <br></br> Group Together
                    <br></br> Right Here
                  </div>
                  <div className='my-12 text-sm font-normal'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  </div>
                </div>
              </div>
            </Box>
            <Box className=" bg-white  p-0 m-0 w-full  sm:mt-3 rounded-2xl absolute mt-3 md:relative lg:absolute lg:bottom-0  lg:z-10  lg:mt-0">
              <Grid columns={{ initial: '1', xs: '1', sm: '2', md: '1', lg: '2', xl:'2' }} className="gap-3 p-0  md:p-4  shadow-2xl md:shadow-none mb-4 rounded-2xl bg-transparent" width="auto" align="center">
                <Box className="ultimate rounded-2xl h-[300px]">
                </Box>
                <Box className="bg-white  md:p-8 lg:p-2  rounded-2xl">
                  <Box className="bg-white  p-2 rounded-2xl">
                    <div className='text-black text-[12px] p-3'>
                      Join us every Saturday for a fun and inclusive skating session open to  all ages and skill levels! Whether you're a beginner looking to learn  the basics or an experienced skater wanting to practice and teach, our  open skating sessions are the perfect opportunity to enjoy the sport and  connect with the community.
                    </div>
                    <div className='text-start'>
                      <button className="rounded-3xl text-xs glass-btn-dark text-black py-2 px-4 ">
                        Learn more.
                      </button>
                    </div>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <FloatingButton/>
      </Container>
    </main>
  )
}
export default Home;