import React from 'react';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import styles from '../../styles/Project.module.css';
import {SiAudiomack} from 'react-icons/si';
import {ImVideoCamera} from 'react-icons/im';
import { IconContext } from "react-icons";

const Projects = () => {
  return (
    <>
     <IconContext.Provider
      value={{ color: 'black', size: '2rem', }}
    >
      <section className={styles.projects_wrapper}>
        <div className={styles.projects_intro_container}>
          <div className={styles.projects_top_text_container}>
            <h1 className={styles.projects_h1}>PROJECTS</h1>
          </div>
          <div className={styles.img_wrapper}>
             <div className={styles.img}/>
          </div>
        </div>
        <section className={styles.project_one_outer_container}>
          <div  className={styles.project_one_inner_container}>
            <div className={styles.project_one_container}>
              < AudioPlayer />
            </div>
            <div className={styles.projects_text_container1}>
              <h3 className={styles.projects_h3}>AUDIO PLAYER <SiAudiomack /></h3>
              <hr/>
              <p className={styles.projects_text}>These two components styled together require a hefty amount of the code that makes up this site. The player at the bottom includes useRef, useEffect, useState, audio methods, and other JS functions. The purple content runs separately with an array of objects and returns a for-loop. It works great but the audio isn't cut so for now Allen sounds like a crazy person talking to himself. In the recording, my best friend Allen recalls his experiences following the beginning of the pandemic and the subsequent border closures that left him an overnight refugee in South Asia.</p>
            </div>
          </div>
        </section>
        <section className={styles.project_two_outer_container}>
          <div  className={styles.project_two_inner_container}>
            <div className={styles.projects_text_container2}>
              <h3 className={styles.projects_h3}>PREMIER: INTRO CHENGDU <ImVideoCamera /></h3>
              <hr/>
              <p className={styles.projects_text}>This is a marketing video I made for the FERRETTE AND PARTNERS previous consultation; cut in Premier from an excruciatingly large b-roll library from my buddy Jonny's partner media company. It was made to be used for digital marketing material to attract western college graduates to our job placement program, but I took off our company branding and made this version for fun as it has good friends.</p>
            </div>
            <div className={styles.project_two_container}>
              <div className={styles.project_two_iframe_wrapper}>
              <iframe className={styles.project_two_video}  src="https://www.youtube.com/embed/EylikOCpAVw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" marginheight="0" marginwidth="0"  scrolling="auto" allowfullscreen="true"></iframe>
              </div>
            </div>
          </div>
        </section>    
      </section>
      </IconContext.Provider>
    </>
  );
};

export default Projects;
