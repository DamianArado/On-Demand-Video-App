// This page will be used to stream videos dynamically

import React from "react";
import VideoPlayerJS from './../components/player';


// videoId contain the identifier of the video that is required to be played
// passes in the video id coming from the URL of the page to the video player component,
// which will then fetch the video from the AWS CDN and stream it for viewing.
const VideoPage = ({ videoId }) => {
    return <div 
          style={{
              width: '98vw', 
              height: '100vh', 
              display: 'flex',
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center'
       }}>
          <div>
              <VideoPlayerJS
                  autoplay={false}
                  width={"640px"}
                  height={"360px"}
                  id={videoId}
                />
          </div>
      </div>
  }
  
  export default VideoPage