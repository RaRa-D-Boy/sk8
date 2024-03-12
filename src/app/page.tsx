"use client"
import { Box, Container, Grid, } from '@radix-ui/themes';
import SK8 from '../../public/sk8-9.png'
import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <main>
      <Container className="mx-4 my-2 md:mx-12 vibes md:my-6 xl:mx-28 xl:my-6 poppins">
        <Grid columns={{ initial: '1', md: '2' }} className="gap-3" width="auto" align="stretch">
          <Box>
            <Box className="bg-card rounded-2xl relative ">
            <div className="absolute  text-4xl top-0 p-6">
              sk8
              </div>
              <div className="absolute bottom-0 p-6">
                <div className="poppins logo text-3xl text-white " >
                  Collude Everywhere
                </div>
                <div>
                  <button className="rounded-3xl poppins text-xs glass-btn backdrop-blur-xl text-white py-2 px-4 ">
                    Sign up
                  </button>
                </div>
              </div>
            </Box>
            <Box className="bg-white my-3 rounded-2xl p-6 text-black flex ">
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
                {/* <Image src={SK8} alt="SK8" className="object-fit w-[800px] h-full" /> */}
              </div>
            </Box>
            <Box>
              <Grid columns={{ initial: '2', md: '2' }} className="gap-3" width="auto" align="stretch">
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
          <Box className="relative bg-white  rounded-2xl">
            <Box className="bg-card2 rounded-2xl  relative grid place-items-center">
              <div className="absolute px-6 md:px-6 text-white">
                <div className='text-sm font-normal my-12'>Group Together</div>
                <div className="poppins text-6xl">
                  Carry Your
                  <br></br> Group Together
                  <br></br> Right Here
                </div>
                <div className='my-12 text-sm font-normal'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                </div>
              </div>
            </Box>
            <Box className="absolute  py-3  w-full rounded-2xl">
              <Grid columns={{ initial: '2', md: '2' }} className="gap-3 lg:p-4 p-0  bg-transparent" width="auto" align="stretch">
              <Box className="bg-sataday1 rounded-2xl relative">
                  {/* Overlay */}
                  {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div> */}
                  <div className=" bottom-0 p-6 z-10"> {/* Adjusted z-index */}
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
                <Box className="bg-sataday1 rounded-2xl relative">
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
                {/* <Box className="bg-white p-8 rounded-2xl">
                  <div className='text-black text-[12px] p-3'>
                    Join us every Saturday for a fun and inclusive skating session open to  all ages and skill levels! Whether you're a beginner looking to learn  the basics or an experienced skater wanting to practice and teach, our  open skating sessions are the perfect opportunity to enjoy the sport and  connect with the community.
                  </div>
                  <div className='text-start'>
                    <button className="rounded-3xl text-xs glass-btn-dark text-black py-2 px-4 ">
                      Learn more.
                    </button>
                  </div>
                </Box> */}
              </Grid>
            </Box>

          </Box>
        </Grid>
      </Container>
    </main>
  )
}
export default Home;