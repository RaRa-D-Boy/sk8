import React, { useEffect, useState } from 'react';
import { Aboutus } from './aboutus';
import VideoStories from '../stories';
import ProEvent from './proEvent';

export const KnowUs = () => {
    const stories = ["/home-vid3.mp4", "/home-vid2.mp4", "/home-vid3.mp4"]
    const [activeTab, setActiveTab] = useState('tab1');

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
            cursor: "pointer",
            borderRadius: "13px",
            backdropFilter: "blur(5px)",
            transition: "background 0.3s ease",
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
                <div className="bg-white  p-4   ">
                    <div className="flex justify-start space-x-4 ">
                        <button
                            className={`px-4 py-2 text-white font-normal xs:block md:hidden hover:bg-white hover:text-black hover:rounded-2xl focus:outline-none tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
                            onClick={() => showTab('tab1')}
                            style={activeTab === 'tab1' ? tabStyles.active : tabStyles.inactive}
                        >
                            Stories
                        </button>
                        <button
                            className={`px-4 py-2 text-white font-normal hover:bg-white hover:text-black hover:rounded-2xl focus:outline-none tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
                            onClick={() => showTab('tab2')}
                            style={activeTab === 'tab2' ? tabStyles.active : tabStyles.inactive}
                        >
                            About Us
                        </button>
                        <button
                            className={`px-4 py-2 text-white font-normal hover:bg-white hover:rounded-2xl hover:text-black focus:outline-none tab-button ${activeTab === 'tab2' ? 'active' : ''}`}
                            onClick={() => showTab('tab3')}
                            style={activeTab === 'tab3' ? tabStyles.active : tabStyles.inactive}
                        >
                            Pro Events
                        </button>
                        <button
                            className={`px-4 py-2 text-white font-normal hover:bg-white  hover:rounded-2xl hover:text-black focus:outline-none tab-button ${activeTab === 'tab3' ? 'active' : ''}`}
                            onClick={() => showTab('tab4')}
                            style={activeTab === 'tab4' ? tabStyles.active : tabStyles.inactive}
                        >
                            Join Us
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
                  <ProEvent/>
                </div>
                <div id="tab4" className={`p-4 tab-content  ${activeTab === 'tab4' ? '' : 'hidden'}`}>
                    <h2 className="text-2xl font-semibold mb-2 text-blue-700">Tab 3 Content</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut
                        perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis
                        unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </div>
            </div>
        </>
    );
};
