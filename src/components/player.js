/*
Houses the player built on top og video.js
Streaming using the VoD support from AWS is facilitated using m3u8 files. 
These files help to break down your video into smaller chunks and can be played 
sequentially using any HLS (HTTP live streaming) enabled video player. 
All players built using video-js support HLS, which is why we have chosen 
video.js library for our video streaming application.
*/

import React, { useEffect, useRef, useState } from "react"
import videojs from "video.js"
import "./videojs.css"

import awsvideoconfig from "../aws-video-exports"

const generateVideoLink = id =>
  `https://${awsvideoconfig.awsOutputVideo}/${id}/${id}.m3u8`

const usePlayer = ({ id, autoplay }) => {
  const options = {
    fill: true,
    fluid: true,
    autoplay,
    preload: "auto",
    aspectRatio: "16:9",
    liveui: false,
    html5: {
      hls: {
        enableLowInitialPlaylist: true,
        smoothQualityChange: true,
        overrideNative: true,
      },
    },
  }
  const videoRef = useRef(null)
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    const vjsPlayer = videojs(videoRef.current, {
      ...options,
      controls: true,
      autoplay: autoplay,
      sources: [
        {
          src: generateVideoLink(id),
          type: "application/x-mpegURL",
        },
      ],
      controlBar: {
        fullscreenToggle: false,
        pictureInPictureToggle: false,
      },
    })
    setPlayer(vjsPlayer)

    return () => {
      if (player !== null) {
        player.dispose()
      }
    }
  }, [])
  useEffect(() => {
    if (player !== null) {
      player.src([
        {
          src: generateVideoLink(id),
          type: "application/x-mpegURL",
        },
      ])
    }
  }, [id])

  return videoRef
}

const VideoPlayerJS = ({ id, controls, autoplay, height, width }) => {
  const playerRef = usePlayer({ id, controls, autoplay })

  return (
    <div data-vjs-player style={{ height, width, position: "relative" }}>
      <video
        ref={playerRef}
        className="video-js vjs-tech vjs-big-play-centered"
        style={{ height, width, zIndex: 0 }}
      />
    </div>
  )
}

export default VideoPlayerJS
