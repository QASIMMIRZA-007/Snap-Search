import React from 'react'

function Video({src,isPlaying}) {
  return (
    <>

     <video  className='video' src={src}/> 
    </>
  )
}

export default Video
