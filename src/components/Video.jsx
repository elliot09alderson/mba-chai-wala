import React from 'react';
import intro from '../assets/MBA Chai Wala.mp4'


const Video = () => {
  return (
    <div className='intro'>
        <video src={intro} muted autoPlay loop controlsList='nodownload'>
        </video>
        <div>
            
        </div>
    </div>
  )
}

export default Video