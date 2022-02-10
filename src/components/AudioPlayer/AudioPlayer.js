import React, { useState, useRef, useEffect } from 'react';
import styles from '../../styles/AudioPlayer.module.css';
import {BsArrowClockwise} from 'react-icons/bs';
import {BsArrowCounterclockwise} from 'react-icons/bs';
import {BsPlayCircleFill} from 'react-icons/bs';
import {BsPauseCircleFill} from 'react-icons/bs';

const AudioPlayer = () => {
  //state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // const [data, setData] = useState([])

  //refs
  const audio = useRef();
  const progressBar = useRef();
  const progressBarAnimation = useRef(); 

  //effects
  useEffect(() => {
    const seconds = Math.floor(audio.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [ audio?.current?.loadedmetadata, audio?.current?.readyState ]);
 
    
    // useEffect(() => {
    //   const fetchAudio = async() => {
    //     await fetch("https://dl.dropbox.com/s/wfhmtvbc5two1wa/1-allen_2991.ogg").then(
    //       res => setData(res)
    //     )
    //   }
    //  fetchAudio;
    //  console.log(data)
    // })

  
 

  //functions & Handlers
  const calculateTime = (secs) => {
      const minutes = Math.floor(secs / 60);
      const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(secs % 60);
      const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${returnedMinutes}:${returnedSeconds}`;
    }
  
  

  const isPlayingHandler = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audio.current.play();
      progressBarAnimation.current = requestAnimationFrame(whilePlaying);
    } else {
      audio.current.pause();
      cancelAnimationFrame(progressBarAnimation.current);
    };
  };

  const whilePlaying = () => {
    progressBar.current.value = audio.current.currentTime;
    progressBarValueTicker();
    progressBarAnimation.current = requestAnimationFrame(whilePlaying);
  };

  const progressHandler = () => {
    audio.current.currentTime = progressBar.current.value;
    progressBarValueTicker();
  };

  const progressBarValueTicker = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`);
    setCurrentTime(progressBar.current.value);
  }

  const backwardFifteen = () => {
    console.log(progressBar.current.value)
    progressBar.current.value = Number(progressBar.current.value) - 15;
    console.log(progressBar.current.value)
    progressHandler();
    
  };

  const forwardFifteen = () => {
    console.log(progressBar.current.value)
    progressBar.current.value = Number(progressBar.current.value) + 15;
    console.log(progressBar.current.value)
    progressHandler();
  };

  return(
    <>
      <div>
         {/* eventually, a loop component tag will replace the below line to loop all audio file title and descriptions*/}
      </div>
      <div className={styles.audioWrapper}>
        {/* eventually, a loop component tag will replace the below line to loop all audio files */}
        {/* <audio ref={audio} src={data} alt="oops, something went wrong..."></audio> */}
        <audio ref={audio} src="https://dl.dropbox.com/s/wfhmtvbc5two1wa/1-allen_2991.ogg" alt="oops, something went wrong..."></audio>
        <button className={styles.sideButtons} onClick={backwardFifteen}><BsArrowCounterclockwise />15</button>
        <button className={styles.playPauseButton} onClick={isPlayingHandler}>
          { isPlaying ? <BsPauseCircleFill /> : <BsPlayCircleFill /> }</button>
        <button className={styles.sideButtons} onClick={forwardFifteen}>15<BsArrowClockwise /></button>

        {/* current time */}
        <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

        {/* progress bar */}
        <div>
          <input type="range" ref={progressBar} className={styles.progressBar} onChange={progressHandler} defaultValue='0'/>
        </div>

        {/* duration */}
        <div className={styles.duration}>{(!isNaN(duration)) && calculateTime(duration)}</div>  
        {/* <div className={styles.duration}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>   */}
      </div>
    </>
  );
};

export default AudioPlayer;
