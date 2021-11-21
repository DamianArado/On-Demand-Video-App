// This prepares our index page, which we will complete with an API call inside the useEffect 
// Hook once we configure our AWS backend.

import React, { useState, useEffect } from "react"
import fetchVideos from "../components/fetchVideos"
import { Link } from "gatsby"

const Home = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    // fetch the videos and set them to the state object
    fetchVideos().then(r => {
      const data = r?.data?.listVodAssets?.items
      setVideos(data)
    })
  }, [])

  return (
    <div>
      <h1> List of Videos: </h1>
      <ul>
        {videos.map(video => (
          <li>
            <Link to={`/video/${video.id}`}>{video.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home