import React from 'react';
import styles from '../../styles/Resume.module.css';

const Resume = () => {
  return (
    <>
      <section className={styles.background_wrapper}>
            <section className={styles.text_wrapper}>
              <div className={styles.header}>
                <h2 className={styles.h2}>Resume</h2>
                <h3 className={styles.header_h3}>Career Objective</h3>
                <p className={styles.header_text}>To work and add value long term within an innovative technology team.</p>
                <h3 className={styles.header_h3}>Education</h3>
                <p className={styles.text}>Cert. of Completion | Coding Bootcamp Praha | 2021 </p>
                <p className={styles.text}>International Business  |  California Baptist University  |  2014</p>
                <p className={styles.text}>International Relations  |  The American University of Rome  |  2012</p>
                <h3 className={styles.header_h3}>WORK EXPERIENCE  </h3>
                <h4 className={styles.h_all}>PROGRAMMING</h4>
                <h5 className={styles.h_all_bottom}>CODING BOOTCAMP AND DEV PROJECTS	    	    2020 - Present</h5>
                <ul>
                  <li className={styles.text}>Accomplished approximately 700 hours of training and development in HTML, CSS, PHP, SQL, XAMPP, React, Laravel, and Vanilla Javascript via a three month coding bootcamp.</li> 
                  <li className={styles.text}>Completed a 200 hour Free Code Camp Javascript course learning the fundamentals of variables, functions, loops, arrays and general object oriented programming.</li>  
                  <li className={styles.text}>Designed, Developed, Tested and Debugged numerous web applications both as collaborative and personal projects.</li>
                  <li className={styles.text}>Developed an inspiring concept and assembled team for a restaurant point of sale system to execute as our coding bootcamp's final team project.</li> 
                  <li className={styles.text}>Acquired proficiency in valuable front-end concepts including CSS modules, SASS, flex, useState, useEffect, useRef, React DOM, Routing and others. </li>
                  <li className={styles.text}>Gained experience in programming control systems and package managers including git and npm. </li>
                </ul>
                <h4 className={styles.h_all}>FERRETTE AND PARTNERS -  Chengdu, China              (Launch Suspended due to Pandemic) </h4>
                <h5 className={styles.h_all_bottom}>CONSULTANT: BUSINESS STRATEGY AND MARKETING	    	    2020 ～5/mo contract</h5>
                <ul>
                  <li className={styles.text}>Consult and collaborate with a team of 3 founding partners to strategics and simultaneously develop infrastructure for a Chinese facing talent acquisition agency and western facing recruitment platform for 3 opportunely defined business sectors.</li> 
                  <li className={styles.text}>Created a large company website using digital ocean, wordpress and wordpress extensions.</li>
                  <li className={styles.text}>Developed client management system and dialogues towards client partnerships with international employers for digital recruitment service including recruitment and visa packages.</li>  
                  <li className={styles.text}>Introduced strategic partnerships with local media agencies to trade content and advertising, cutting our marketing budget approximately 11,000rmb a month while generating greater previous exposure.</li> 
                  <li className={styles.text}>Facilitated key branding decisions and strategies, creation of media packages including logos and marketing videos with adobe suite.</li>
                </ul>
                <h4 className={styles.h_all}>FLO BEVERAGE CO. -  Beijing, China		                (Launch Suspended due to Pandemic)</h4>
                <h5 className={styles.h_all_bottom}>CONSULTANT: FLAVOR CREATION AND MARKETING    		       2019 ～8/mo contract </h5>
                <ul>
                  <li className={styles.text}>Worked alongside high level advertising and management executives and KOLs (influencers) in the launching of a beverage venture. </li> 
                  <li className={styles.text}>Contributed to team strategy on defining of our target market, formulation of potential digital marketing campaigns and geographic flavor profiling. </li>  
                  <li className={styles.text}>Concocted 3 all natural sodas mixed with an alcoholic solution in distinguished factories while sourcing ingredients.</li> 
                </ul>
                <h4 className={styles.h_all}>ZHONG XI TECHNOLOGY -  Chengdu, China</h4>
                <h5 className={styles.h_all_bottom}>CONSULTANT: BUSINESS DEVELOPMENT AND MARKETING    	2019 ～6/mo contract </h5>
                <ul>
                  <li className={styles.text}>Identified target market, strategize marketing campaign and create marketing materials for 3 separate programs aimed at consumers of technology training in coding, electrical engineering and IOT.  </li> 
                  <li className={styles.text}>Introduced strategic partners for mutual cooperation sharing in media and education resulting in dialogue with 20+ distinguished education locations aiming to source our services for thousands of students. </li>  
                  <li className={styles.text}>Developed original curriculum with one of a kind and sourced materials with in house technology team including original story incorporating stem education principals. </li> 
                  <li className={styles.text}>Introduced artists to project and manage illustration design of original story following each lesson of the curriculum.</li>
                </ul>
              </div>
        </section>
      </section>
    </>
  )
};






export default Resume;
