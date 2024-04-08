import React from 'react'
import { SK8t } from '../../../../public/images'
import Image from 'next/image'

export const Aboutus = () => {
    return (
        <div className="text-black px-6 py-4 text-[15px] h-[100vh] lg:h-[750px] overflow-scroll">
            <div className="block lg:hidden animate-fade-up animate-once  animate-delay-[800ms] animate-ease-in">
                <Image src={SK8t} alt="img" className="w-full rounded-2xl"/>
            </div>

            <p className="p-3 animate-fade-up animate-once  animate-delay-[1000ms] animate-ease-in">
                Welcome to SK8, where passion meets pavement and creativity knows no bounds.
                As an organization deeply rooted in the skateboarding culture,
                we're more than just a company — we're a movement.
                At SK8, we believe that skateboarding has the power
                to transform the world through creativity.
            </p>

            <p className="p-3 animate-fade-up animate-once  animate-delay-[1100ms] animate-ease-in">
                <span className="font-bold">Mission:</span><br></br>
                Our mission at SK8 is to inspire, unite, and empower individuals worldwide
                through the transformative power of skateboarding.
                By fostering a global community built on inclusivity,
                creativity, and self-expression, we aim to break down barriers,
                challenge norms, and redefine what's possible on and off the board.
            </p>

            <p className="p-3 animate-fade-up animate-once  animate-delay-[1200ms] animate-ease-in">
                <span className="font-bold">Vision:</span><br></br>
                At SK8, we envision a world where skateboarding is more than just a sport —
                it's a catalyst for positive change. We see a future where skateparks
                are vibrant hubs of creativity and community, where skaters of all
                backgrounds come together to learn, grow, and push the boundaries
                of what's possible. Through our efforts, we strive to create a
                world where skateboarding is accessible to all, celebrated
                for its artistry, and recognized as a force for good.

            </p>

            <p className="p-3 animate-fade-up animate-once  animate-delay-[1300ms] animate-ease-in">
                With a presence that spans far and wide,
                SK8 is not bound by geographical limitations.
                From bustling city streets to serene suburban parks,
                we're everywhere, bringing together skaters from all walks of life.

            </p>

            <p className="p-3 animate-fade-up animate-once  animate-delay-[1400ms] animate-ease-in">
                Central to our ethos are the numerous skating events we host,
                where enthusiasts gather to showcase their skills,
                share their stories, and connect with like-minded individuals.
                But it doesn't end there. Every Saturday, we hit the streets together,
                rolling as one collective force,
                proving that skating is not just a sport — it's a way of life.

            </p>

            <p className="p-3 animate-fade-up animate-once  animate-delay-[1500ms] animate-ease-in">
                Join us at SK8 and be part of a movement that celebrates individuality,
                creativity, and the endless possibilities of what can be achieved on four wheels.
                Together, let's push boundaries, defy expectations, and pave the way for a brighter,
                more inclusive future through the transformative power of skateboarding.

            </p>

        </div>
    )
}
