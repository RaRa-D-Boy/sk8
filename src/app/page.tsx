"use client"
import { Box, Container, Grid, } from '@radix-ui/themes';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LuArrowUpRight } from "react-icons/lu";

const Home = () => {
  const router = useRouter();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <main className="">
      <Container className="mx-2 my-2 md:mx-2   vibes md:my-6 xl:mx-12 xl:my-6 poppins">
        <Grid columns={{ initial: '1', md: '2' }} className="gap-3" width="auto" align="stretch">
          <Box>
            <div className="video-container rounded-2xl animate-fade animate-once  animate-delay-[800ms] animate-ease-in">
              <video autoPlay loop muted className="video-background">
                <source src="/home-vid4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="content flex flex-col justify-between  h-full ">
                <button onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => router.push("/know-us")}
                  className="logo absolute shadow-2xl animate-bounce text-center top-0 right-0 my-6 mx-2 poppins logo text-3xl bg-white rounded-full text-black w-[80px] h-[80px]">
                {isHovered ? (<LuArrowUpRight className="text-center mx-6"/>) : ("sk8")}  
                </button>

                <div className=" absolute bottom-0 left-0 p-6 w-full">
                  <Box className="flex justify-between items-center">
                    <div>
                      <div className="poppins logo text-3xl mb-2 text-white">
                        <p className=" animate-fade-up animate-once  animate-delay-[1000ms] ">We Are Everywhere Chale !</p>
                        <p className='text-sm md:w-[500px]  animate-fade-up animate-once  animate-delay-[1100ms] '>
                          Welcome to the Skate Revolution!
                          Where the streets are your canvas and every trick is a masterpiece.
                          Unleash your inner rebel, ride with passion, and conquer the concrete.
                          Skateboarding: The ultimate expression of freedom on four wheels.                </p>


                      </div>
                      <div>
                        <button className="rounded-3xl  animate-fade-up animate-once  animate-delay-[1200ms]  poppins text-xs glass-btn backdrop-blur-xl text-white py-2 px-4"
                          onClick={() => router.push("/know-us")}>
                          Join us
                        </button>
                      </div>
                    </div>

                  </Box>

                </div>
              </div>
            </div>
            <Box className="bg-white my-3 animate-fade animate-once  animate-delay-[1000ms] animate-ease-in rounded-2xl p-6 shadow-2xl text-black flex ">
              <div>
                <p className='font-extrabold poppins text-lg my-3  animate-fade-up animate-once  animate-delay-[1200ms]' >Pro Level</p>
                <p className='text-sm  animate-fade-up animate-once  animate-delay-[1300ms]'>
                  For those new to skating, we offer semi-private and private lessons with  our certified coaches. Email us for availability and to sign up for a  session.For those new to skating, we offer semi-private and private lessons with  our certified coaches. Email us for availability and to sign up for a  session.
                </p>
                <div className='my-3'>
                  <button onClick={() => router.push("/know-us")}
                    className="rounded-3xl  animate-fade-up animate-once  animate-delay-[1400ms] text-xs glass-btn-dark  py-2 px-4 ">
                    Pro Level
                  </button>
                </div>

              </div>
              <div>
              </div>
            </Box>
            <Box >
              <Grid columns={{ initial: '1', xs: '2', md: '2', lg: '2' }} className="gap-3" width="auto" align="stretch">
                <Box className="bg-purchase animate-fade animate-once  animate-delay-[1200ms] animate-ease-in poppins rounded-2xl relative">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>
                  <div className="absolute bottom-0 p-6 z-10"> {/* Adjusted z-index */}
                    <div className="text-white font-medium text-xs my-3  animate-fade-up animate-once  animate-delay-[1300ms]">
                      Purchase all your skating equipment here.
                      Skate shoes, helmets, boards all at affordable prices.
                    </div>
                    <div>
                      <button onClick={() => router.push("https://www.decathlon.com.gh/?prod_en%5Bquery%5D=skateboard")}
                        className="rounded-3xl  animate-fade-up animate-once  animate-delay-[1400ms] text-xs glass-btn text-white py-2 px-4 ">
                        Purchase Board
                      </button>
                    </div>
                  </div>
                </Box>
                <Box className="bg-learn animate-fade animate-once  animate-delay-[1400ms] animate-ease-in rounded-2xl relative">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>
                  <div className="absolute bottom-0 p-6 z-10"> {/* Adjusted z-index */}
                    <div className="text-white   animate-fade-up animate-once  animate-delay-[1500ms] font-medium text-xs my-3">
                      Purchase all your skating equipment here.
                      Skate shoes, helmets, boards all at affordable prices.
                    </div>
                    <div>
                      <button onClick={() => router.push("/know-us")}
                        className="rounded-3xl  animate-fade-up animate-once  animate-delay-[1600ms] text-xs glass-btn text-white py-2 px-4 ">
                        Join us.
                      </button>
                    </div>
                  </div>
                </Box>
              </Grid>
            </Box>
          </Box>
          <Box className="relative animate-fade animate-once  animate-delay-[1400ms]  bg-transparent shadow-2xl  md:bg-white rounded-2xl">
            <Box className="bg-card2 animate-fade animate-once  animate-delay-[1400ms] animate-ease-in h-[600px] md:h-[400px] lg:h-[400px] xl:h-[600px] rounded-2xl  relative grid place-items-center">
              <div className="absolute px-6 md:px-6 text-white">
                <div className='text-sm font-normal my-12  animate-fade-up animate-once  animate-delay-[1500ms]'>Group Together</div>
                <div className="poppins text-5xl lg:text-2xl xl:text-6xl">
                  <div className="poppins  animate-fade-up animate-once  animate-delay-[1600ms] text-5xl lg:text-2xl xl:text-6xl">
                    Carry Your
                    <br></br> Group Together
                    <br></br> Right Here
                  </div>
                  <div className='my-12 text-sm font-normal  animate-fade-up animate-once  animate-delay-[1700ms]'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  </div>
                </div>
              </div>
            </Box>
            <Box className=" bg-white p-0 m-0 w-full  sm:mt-3 rounded-2xl absolute mt-3 md:relative lg:absolute lg:bottom-0  lg:z-10  lg:mt-0">
              <Grid columns={{ initial: '1', xs: '1', sm: '2', md: '1', lg: '2', xl: '2' }} className="gap-3 p-0  md:p-4  shadow-2xl md:shadow-none mb-4 rounded-2xl bg-transparent" width="auto" align="center">
                <Box className="ultimate  animate-fade-up animate-once  animate-delay-[1700ms] rounded-2xl h-[300px]">
                </Box>
                <Box className="bg-white  md:p-8 lg:p-2  rounded-2xl">
                  <Box className="bg-white  p-2 rounded-2xl">
                    <div className='text-black text-[12px] p-3  animate-fade-up animate-once  animate-delay-[1800ms]'>
                      Join us every Saturday for a fun and inclusive skating session open to  all ages and skill levels! Whether you're a beginner looking to learn  the basics or an experienced skater wanting to practice and teach, our  open skating sessions are the perfect opportunity to enjoy the sport and  connect with the community.
                    </div>
                    <div className='text-start'>
                      <button onClick={() => router.push("/know-us")}
                        className="rounded-3xl text-xs glass-btn-dark text-black py-2 px-4 ">
                        Learn more.
                      </button>
                    </div>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Grid>
        {/* <FloatingButton prop=">>" route="/know-us" /> */}
      </Container>

    </main>
  )
}
export default Home;