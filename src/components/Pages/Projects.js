import React from 'react';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import NavBarTwo from '../NavBarHeaderFooter/NavBarTwo';
import styles from '../../styles/Project.module.css';
import {SiAudiomack} from 'react-icons/si';
import {ImVideoCamera} from 'react-icons/im';
import {GiFishEggs} from 'react-icons/gi';
import { IconContext } from "react-icons";
import CartApp from '../ProjectThree/CartApp';

const Projects = () => {
  return (
    <>
    <section className={styles.header_navbar_two}>
     <NavBarTwo />
    </section>
     <IconContext.Provider
      value={{ color: 'black', size: '2rem', }}
    >
      <section className={styles.projects_wrapper}>
        <section className={styles.content_wrapper}>
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
              <p className={styles.projects_text}>These two components styled together require a hefty amount of code. The player at the bottom includes useRef, useState, and audio methods. The purple content runs separately with an array of objects and returns a for-loop. It's also styled for desktop and mobile!</p>
            </div>
          </div>
        </section>
        <section className={styles.project_two_outer_container}>
          <div  className={styles.project_two_inner_container}>
            <div className={styles.projects_text_container2}>
              <h3 className={styles.projects_h3}>PREMIER: INTRO CHENGDU <ImVideoCamera /></h3>
              <hr/>
              <p className={styles.projects_text}>This is a marketing video I made for a startup called Jobs Across China. The founding team members included myself and a local Chengdu team affiliated with Ferette and Partners. It's cut in Premier from an excruciatingly large b-roll library from my buddy Jonny's partner media company. It was made to be used for digital marketing material to attract western college graduates to our job placement program, but I took off our company branding and made this version for fun as it includes good friends and is an accurate display of our old expat lifestyle.</p>
            </div>
            <div className={styles.project_two_container}>
              <div className={styles.project_two_iframe_wrapper}>
              <iframe className={styles.project_two_video}  src="https://www.youtube.com/embed/EylikOCpAVw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" marginHeight="0" marginWidth="0"  scrolling="auto" allowFullScreen={true}></iframe>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.project_one_outer_container}>
          <div  className={styles.project_one_inner_container}>
            <div className={styles.project_one_container}>
              < CartApp />
            </div>
            <div className={styles.projects_text_container1}>
              <h3 className={styles.projects_h3}>Food Ordering App <GiFishEggs /></h3>
              <hr/>
              <p className={styles.projects_text}>This hefty little app includes a ton of code. It runs on useEffect, useState, Forloops, passed props, useContext and more. I have a long background and appreciation for food and beverage which attracts me to these sorts of industry related projects. This is probably the most modern, practical use of code on my website. You can play with it by adding and subtracting items from the cart. Click on the cart to access the modal overlay. </p>
            </div>
          </div>
        </section>
        </section>   
      </section>
      </IconContext.Provider>
    </>
  );
};

export default Projects;
