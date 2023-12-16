import React from 'react';
import ReactSound from 'react-sound';
import audio from '../Meditation/sound/message.mp3'
import './OpeningMessage.css';

const OpeningMessage = () => {
  return (
    <div className='message'>
      <ReactSound url={audio} playStatus={ReactSound.status.PLAYING}/>
      Play a song, Set the timer and relax...
    </div>
  );
}

export default OpeningMessage;
