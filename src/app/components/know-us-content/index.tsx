import React, { useEffect, useState } from 'react';
import { Aboutus } from './aboutus';
import VideoStories from '../stories';
import ProEvent from './proEvent';
import JoinUs from './joinus';
import { LuArrowUpLeft } from "react-icons/lu";
import { useRouter } from 'next/navigation';



export const KnowUs = () => {
    const stories = ["https://res.cloudinary.com/denu07mp4/video/upload/v1712596033/xhzkigfshahgt4xcnzmp.mp4", "https://res.cloudinary.com/denu07mp4/video/upload/v1712596394/ezabwuon83vdbgkmlknn.mp4", "https://res.cloudinary.com/denu07mp4/video/upload/v1712596562/uy8baqtc7h3jniinxyvq.mp4"]
    const [activeTab, setActiveTab] = useState('tab1');
    const router = useRouter();

    useEffect(() => {
        showTab('tab2');
    }, []);

    const showTab = (tabId: any) => {
        setActiveTab(tabId);
    };

    const tabStyles = {
        active: {
            background: "black",
            border: "none",
            color: "white",
            textDecoration: "none",
            // fontWeight:"bold",
            cursor: "pointer",
            borderRadius: "13px",
            backdropFilter: "blur(10px)",
            transition: "background 0.3s ease",
            boxShadow: "5px 5px 7px rgba(0, 0, 0, 0.104)"
        },
        inactive: {
            backgroundColor: 'transparent',
            border: 'none',
            color: 'black',
            
        },
    };
    return (
        <>
            <div className="w-full  text-black">
                {/* Tab Buttons */}
                <div className="bg-white  p-4 xl:rounded-2xl  ">
                    <div className="flex justify-start space-x-4 animate-fade animate-once  animate-ease-in ">
                        <button
                            className={` px-2  md:px-6 md:py-2 text-xs md:text-[15px]  hover:bg-black hover:text-white rounded-2xl font-normal text-black border border-black focus:outline-none `}
                            onClick={() => router.push("/")}
                        >
                            <div className="flex items-center"> {/* Use flexbox to align items horizontally */}
                                <LuArrowUpLeft className="mr-0 md:mr-2 font-semibold" /> {/* Add margin to separate the icon from the text */}
                                <span className="hidden md:block">Back</span>
                            </div>
                        </button>
                        <button
                            className={`px-4 py-2 text-xs md:text-[15px] text-white font-normal xs:block md:hidden hover:bg-white hover:text-black hover:rounded-2xl focus:outline-none tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
                            onClick={() => showTab('tab1')}
                            style={activeTab === 'tab1' ? tabStyles.active : tabStyles.inactive}
                        >
                            Stories
                        </button>
                        <button
                            className={`px-4 py-2 text-xs md:text-[15px] text-white font-normal hover:bg-white hover:text-black hover:rounded-2xl focus:outline-none tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
                            onClick={() => showTab('tab2')}
                            style={activeTab === 'tab2' ? tabStyles.active : tabStyles.inactive}
                        >
                            About 
                        </button>
                        <button
                            className={`px-4 py-2 text-xs md:text-[15px] text-white font-normal hover:bg-white hover:rounded-2xl hover:text-black focus:outline-none tab-button ${activeTab === 'tab2' ? 'active' : ''}`}
                            onClick={() => showTab('tab3')}
                            style={activeTab === 'tab3' ? tabStyles.active : tabStyles.inactive}
                        >
                            Events
                        </button>
                        <button
                            className={`px-4 py-2 text-xs md:text-[15px] text-white font-normal hover:bg-white  hover:rounded-2xl hover:text-black focus:outline-none tab-button ${activeTab === 'tab3' ? 'active' : ''}`}
                            onClick={() => showTab('tab4')}
                            style={activeTab === 'tab4' ? tabStyles.active : tabStyles.inactive}
                        >
                            Join
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                <div id="tab1" className={`p-4 tab-content xs:block md:hidden ${activeTab === 'tab1' ? '' : 'hidden'}`}>
                    <VideoStories videos={stories} />
                </div>
                <div id="tab2" className={`p-2 tab-content ${activeTab === 'tab2' ? '' : 'hidden'}`}>
                    <Aboutus />
                </div>
                <div id="tab3" className={`p-4 tab-content  ${activeTab === 'tab3' ? '' : 'hidden'}`}>
                    <ProEvent />
                </div>
                <div id="tab4" className={`p-4 tab-content  ${activeTab === 'tab4' ? '' : 'hidden'}`}>
                    <JoinUs />
                </div>
            </div>
        </>
    );
};
