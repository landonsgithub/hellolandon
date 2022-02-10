import React from 'react';
import AudioLibrary from '../AudioPlayer/AudioLibrary';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import styles from '../../styles/Project.module.css';

const Projects = () => {
  return (
    <>
      <section className={styles.projects_wrapper}>
        <div className={styles.projects_intro_container}>
          <div className={styles.projects_top_text_container}>
            <h1 className={styles.projects_h1}>PROJECTS</h1>
          </div>
          <div className={styles.img_wrapper}>
             <div className={styles.img}/>
          </div>
        </div>
        <section className={styles.float_left}>
          <div className={styles.project_one_container}>
            < AudioLibrary />
            < AudioPlayer />
          </div>
          <div className={styles.projects_text_container1}>
            <h3 className={styles.projects_h3}>AUDIO PLAYER</h3>
             <hr/>
            <p className={styles.projects_text}>These two components styled together have the most robust code in this Projects Portfolio. They includes useRef, useEffect, useState, obsecure audio methods, an array of objects, a loop and multiple handlers. For now, this is mostly a proof of concept as the audio is yet to be cut. In the recording, my best friend (and previous roomate) Allen recalls his experieces following the beginning of the pandemic and the subsequent border closures that left him an overnight refugee in South Asia.</p>
          </div>
        </section>
        <section className={styles.float_right}>
          <div className={styles.projects_text_container2}>
            <h3 className={styles.projects_h3}>PREMIER: WELCOME TO CHENGDU</h3>
             <hr/>
            <p className={styles.projects_text}>This is a marketing video I made for a previous consultation; cut in Premier from an excruciatingly large b-roll library from my buddies media company. It was intended to be used as digital marketing material to attract western college graduates to our job placement program, but the project fell through because of the pandemic. I rebranded it for my own amusement as it includes many friends and showcases our lives in Southwest China.</p>
          </div>
          <div className={styles.project_one_container}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/EylikOCpAVw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </section>    
      </section>
    </>
  );
};

export default Projects;
