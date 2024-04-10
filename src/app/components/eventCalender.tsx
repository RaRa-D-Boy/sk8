
import React, { useState } from 'react'
import { useEpg, Epg, Layout } from 'planby';
import { SK88 } from '../../../public/images';

export const EventCalender = () => {

   // Example API response
const apiResponse = {
    channels: [
       {
         logo: 'https://example.com/logo1.png',
         uuid: '10339a4b-7c48-40ab-abad-f3bcaf95d9fa',
         name: 'Channel 1',
       },
       {
         logo: 'https://example.com/logo2.png',
         uuid: '20339a4b-7c48-40ab-abad-f3bcaf95d9fb',
         name: 'Channel 2',
       },
    ],
    epg: [
       {
         channelUuid: '10339a4b-7c48-40ab-abad-f3bcaf95d9fa',
         description: 'Program 1 description',
         id: 'b67ccaa3-3dd2-4121-8256-33dbddc7f0e6',
         image: 'https://example.com/program1.png',
         since: "2024-04-11T23:50:00",
         till: "2024-04-11T00:55:00",
         title: 'Program 1',
       },
       {
         channelUuid: '20339a4b-7c48-40ab-abad-f3bcaf95d9fb',
         description: 'Program 2 description',
         id: 'b67ccaa3-3dd2-4121-8256-33dbddc7f0e7',
         image: 'https://example.com/program2.png',
         since: "2024-04-10T23:50:00",
         till: "2024-04-10T00:55:00",
         title: 'Program 2',
       },
    ],
   };

   
   const channels = React.useMemo(() => apiResponse.channels, []);
const epg = React.useMemo(() => apiResponse.epg, []);
      
      const {
        getEpgProps,
        getLayoutProps,
        onScrollToNow,
        onScrollLeft,
        onScrollRight,
      } = useEpg({
        epg,
        channels,
        startDate: '2024/04/10', // or 2022-02-02T00:00:00
      });

      console.log(channels);
console.log(epg);

    return (
      
        <div>
        <div style={{ height: '600px', width: '100%' }}>
          <Epg {...getEpgProps()}>
            <Layout
              {...getLayoutProps()}
            />
          </Epg>
        </div>
      </div>
      
    )
}
