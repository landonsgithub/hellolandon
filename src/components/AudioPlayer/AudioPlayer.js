import React, { useState, useRef, useCallback } from 'react';
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
  const [animation, setAnimation] = useState(false);
  // const [data, setData] = useState([])

  //refs
  const audio = useRef();
  const progressBar = useRef();
  const progressBarAnimation = useRef(); 

  //library
    const library = [
        {
         id: Math.floor(Math.random().toFixed(4) * 10000),
         artist: 'The Isley Brothers',
         title: 'Twist and Shout',
         src: "https://dl.dropbox.com/s/8cd8f2j09cdvvan/4%20-%20Twist%20And%20Shout.mp3",
         
        }
      ];

  //effects
  // useEffect(() => {
  //   const seconds = Math.floor(audio.current.duration);
  //   setDuration(seconds);
  //   progressBar.current.max = seconds;
  // }, [ audio?.current?.loadedmetadata, audio?.current?.readyState ]);

  const onDurationChangeHandler = (e) => {
    const seconds = Math.floor(e.target.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
};
 
    
    // useEffect(() => {
    //   const fetchAudio = async() => {
    //     await fetch("https://dl.dropbox.com/s/wfhmtvbc5two1wa/1-allen_2991.ogg").then(
    //       res => setData(res)
    //     )
    //   }
    //  fetchAudio;
    //  console.log(data)
    // })
    
  
 

  // functions & Handlers

  // const Animate = () => {
  //   const prevValue = animation;
  //   if (audio.current.currentTime > 0){
  //      setAnimation(true);
  //   }else{
  //     setAnimation(false);
     

  //   }
  // }

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
      }


  // const isPlayingHandler = useCallback (
  //       () => {
  //         const prevValue = isPlaying;
  //         setIsPlaying(!prevValue);
  //         if (!prevValue) {
  //         audio.current.play();
  //         setAnimation(true);
  //         progressBarAnimation.current = 
  //         requestAnimationFrame(whilePlaying);
  //         } else {
  //         audio.current.pause();
  //         setAnimation(false);
  //         cancelAnimationFrame(progressBarAnimation.current);
  //       }
  //       }, [setAnimation, requestAnimationFrame, animation, isPlaying],
  //   );
    
  
  

  const isPlayingHandler = () => {

    const prevValue = isPlaying;
    
    if (!prevValue) {
      console.log(isPlaying)
      audio.current.play();
      setAnimation(true);
      progressBarAnimation.current = requestAnimationFrame(whilePlaying);
      setIsPlaying(!isPlaying)

    } else {
      audio.current.pause();
      setAnimation(false);
      cancelAnimationFrame(progressBarAnimation.current);
      setIsPlaying(!isPlaying)

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
    progressBar.current.value = Number(progressBar.current.value) - 15;
    progressHandler();
    
  };

  const forwardFifteen = () => {
    progressBar.current.value = Number(progressBar.current.value) + 15;
    progressHandler();
  };

  return(
    <>
        {library.map(({artist, title, art, id}) => (
          <div key={id} className={styles.libraryWrapper}>
            <h4 className={styles.artist}>{artist}</h4>
            <p className={styles.title}>{title}</p>
            <div className={styles.artWrapper}>
              <div className={animation ? styles.artRotate : styles.art}></div>
            </div>
          </div>
        ))} 
        <div className={styles.audioWrapper}> 
          <div className={styles.mobileButtonBottom}>
            <audio ref={audio} src="https://dl.dropbox.com/s/8cd8f2j09cdvvan/4%20-%20Twist%20And%20Shout.mp3?dl=1" alt="oops, something went wrong..." onDurationChange={onDurationChangeHandler}></audio>
            <button className={styles.sideButtons} onClick={backwardFifteen}><BsArrowCounterclockwise />15</button>
            <button className={styles.playPauseButton} onClick={isPlayingHandler}>
              { isPlaying ? <BsPauseCircleFill /> : <BsPlayCircleFill /> }</button>
            <button className={styles.sideButtons} onClick={forwardFifteen}>15<BsArrowClockwise /></button>
          </div>
            <div className={styles.mobileButtonTop}>
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
        </div> 
    </>
  );
};

export default AudioPlayer;
