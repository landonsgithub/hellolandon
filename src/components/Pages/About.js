import React from 'react';
import styles from '../../styles/About.module.css';
import { IconContext } from "react-icons";
import {BsEyeFill} from 'react-icons/bs';
import {FaGlassMartiniAlt} from 'react-icons/fa';
import {GiWaterGun} from 'react-icons/gi';
import {RiRobotFill} from 'react-icons/ri';
import {GiErlenmeyer} from 'react-icons/gi';
import {HiLightningBolt} from 'react-icons/hi';
import {GiDinosaurRex} from 'react-icons/gi';
import {GiUfo} from 'react-icons/gi';
import {GiAutogun} from 'react-icons/gi';


const About = () => {
  return (
    <>
    <IconContext.Provider
      value={{ color: 'black', size: '2rem', }}
    >
    <div className={styles.card_container}>
      <h2 className={styles.about_title}>PROFESSIONAL PROFILE</h2>
        <div className={styles.card1}>
          <h4 className={styles.card_title}>CHINA: 2016-2020<BsEyeFill /></h4>
          <hr/>
          <p className={styles.card_text}>I moved to Chengdu ( a large city in Southwest China ) on an embassy scholarship and quickly plugged myself into non-profit education projects.</p>
        </div>
        <div className={styles.card2}>
          <h4 className={styles.card_title}>NOVAS COCKTAIL CO<FaGlassMartiniAlt /></h4>
          <hr/>
          <p className={styles.card_text}>In 2017, I started a bottled cocktail company and threw events/delivered products across the city. The company was nominated for best startup by Chengdu Expat.</p>
        </div>
        <div className={styles.card3}>
          <h4 className={styles.card_title}>NON-PROFIT<GiWaterGun /></h4>
          <hr/>
          <p className={styles.card_text}>With local partners, I opened and operated a small library and training center in a rural community outside Chengdu, China.</p>
        </div>
        <div className={styles.card4}>
          <h4 className={styles.card_title}>PROGRAMMING<RiRobotFill /></h4>
          <hr/>
          <p className={styles.card_text}>Between self study and accomplishing a coding bootcamp, I am now proficient in CSS, HTML, Vanilla JS, React and Laravel frameworks.</p>
        </div>
        <div className={styles.card5}>  
          <h4 className={styles.card_title}>MARKETING<GiErlenmeyer /></h4>
          <hr/>
          <p className={styles.card_text}>In almost every project I work on, I find myself contributing to marketing through content creation, partnerships and strategies.</p>
        </div>
        <div className={styles.card6}>
          <h4 className={styles.card_title}>MANAGING<HiLightningBolt /></h4>
          <hr/>
          <p className={styles.card_text}>China allowed me an environment to create and consult on many projects in the fields of technology, education and food-beverage.</p>
        </div>
        <div className={styles.card7}>
          <h4 className={styles.card_title}>CONSULTING<GiDinosaurRex /></h4>
          <hr/>
          <p className={styles.card_text}>By 2018, virtually all my work was on a consultation basis allowing me to grow and contribute on many teams in different cities.</p>
        </div>
        <div className={styles.card8}>
          <h4 className={styles.card_title}>ADOBE<GiUfo /></h4>
          <hr/>
          <p className={styles.card_text}>Learning Adobe suite greatly increased my value and contribution in 0-1 startups, I am proficient in Illustrator, Premier and others.  </p>
        </div>
        <div className={styles.card9}>
          <h4 className={styles.card_title}>GOODBYE CHINA<GiAutogun /></h4>
          <hr/>
          <p className={styles.card_text}>I was unable to enter China after April 2020 due to border closure. During this time of uncertainty I devoted myself to learning web development. </p>
        </div>
        <div className={styles.bottom_divider}></div>
      </div>
      </IconContext.Provider>
    </>
  )
};

export default About;
