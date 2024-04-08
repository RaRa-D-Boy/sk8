import React from 'react';
import { Box } from '@radix-ui/themes';

const JoinUs = () => {
    return (
        <div className="skating-lessons-container text-black px-6 py-4 text-[15px] h-[100vh] lg:h-[750px] lg:overflow-scroll">

            <div className="block lg:hidden animate-fade-up animate-once  animate-delay-[800ms] animate-ease-in ">
                <Box className="joinUsImg">
                </Box>
            </div>
            <h2 className="p-3 animate-fade-up animate-once  animate-delay-[1000ms] animate-ease-in "><strong>Welcome to Our Skating Lessons!</strong></h2>
            <p className="p-3 animate-fade-up animate-once  animate-delay-[1100ms] animate-ease-in ">Are you new to the world of skating? Whether you're a complete beginner or looking to brush up on your skills, we're here to help you glide with confidence on the ice.</p>

            <div className="lesson-types">
                <h3 className="p-3 animate-fade-up animate-once  animate-delay-[1200ms] animate-ease-in "><strong>Semi-Private Lessons:</strong></h3>
                <p className="p-3 animate-fade-up animate-once  animate-delay-[1300ms] animate-ease-in ">Our semi-private lessons are ideal for those who prefer a small group setting. You'll join a small class of fellow beginners, allowing for personalized attention from our experienced coaches. Together, you'll embark on your skating journey, mastering the basics and building a solid foundation for future progress.</p>

                <h3 className="p-3 animate-fade-up animate-once  animate-delay-[1400ms] animate-ease-in "><strong>Private Lessons:</strong></h3>
                <p className="p-3 animate-fade-up animate-once  animate-delay-[1500ms] animate-ease-in ">For those seeking one-on-one guidance, our private lessons offer a personalized approach tailored specifically to your goals and abilities. With the undivided attention of your dedicated coach, you'll receive individualized instruction designed to accelerate your learning and maximize your potential on the ice.</p>
            </div>

            <div className="why-choose-us">
                <h3 className="p-3 animate-fade-up animate-once  animate-delay-[1600ms] animate-ease-in "><strong>Why Choose Us:</strong></h3>
                <ul className="p-3 animate-fade-up animate-once  animate-delay-[1700ms] animate-ease-in ">
                    <li>Certified Coaches: Our team of certified coaches are passionate about skating and dedicated to helping you succeed. With their expertise and guidance, you'll quickly gain confidence and proficiency on the ice.</li>
                    <li>Flexible Scheduling: We understand that everyone has busy schedules. That's why we offer flexible lesson times to accommodate your availability. Simply email us to inquire about lesson times and reserve your spot.</li>
                    <li>Supportive Environment: Learning to skate can be both exhilarating and challenging. Rest assured, our supportive and encouraging environment will help you feel comfortable and confident every step of the way.</li>
                </ul>
            </div>

            <div className="get-started">
                <h3 className="p-3 animate-fade-up animate-once  animate-delay-[1800ms] animate-ease-in "><strong>Ready to Get Started?</strong></h3>
                <p className="p-3 animate-fade-up animate-once  animate-delay-[1900ms] animate-ease-in ">If you're ready to embark on your skating journey or simply curious to learn more about our lessons, don't hesitate to reach out. Email us today to inquire about availability and sign up for a session. Whether you're dreaming of gliding gracefully across the ice or simply looking for a fun and rewarding activity, we're here to help you achieve your skating goals.</p>
            </div>
        </div>
    );
};

export default JoinUs;
