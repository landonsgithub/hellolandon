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
                <p className={styles.header_text}>I build websites that connect with users through targeted user journeys that remove pain points.</p>
                <h3 className={styles.header_h3}>Education</h3>
                <p className={styles.text}>Cert. of Completion | Coding Bootcamp Praha | 2021 </p>
                <p className={styles.text}>Embassy Language Scholarship | Sichuan University | 2016</p>
                <p className={styles.text}>International Business  |  California Baptist University  |  2014</p>
                <p className={styles.text}>International Relations  |  The American University of Rome  |  2012</p>
                <h3 className={styles.header_h3}>Skills</h3>
                <div className={styles.table_container} role="table" aria_label="skills">
                  <div className={`${styles.flex_table} ${styles.row}`} role="rowgroup">
                    <div className={`${styles.flex_row} ${styles.first}`} role="cell">React JS</div>
                    <div className={styles.flex_row} role="cell">Javascript </div>
                    <div className={styles.flex_row} role="cell">jQuery</div>
                    <div className={styles.flex_row} role="cell">HTML</div>
                  </div>
                  <div className={`${styles.flex_table} ${styles.row}`} role="rowgroup">
                    <div className={`${styles.flex_row} ${styles.first}`} role="cell">Laravel</div>
                    <div className={styles.flex_row} role="cell">PHP </div>
                    <div className={styles.flex_row} role="cell">SQL</div>
                    <div className={styles.flex_row} role="cell">CSS</div>
                  </div>
                  <div className={`${styles.flex_table} ${styles.row}`} role="rowgroup">
                    <div className={`${styles.flex_row} ${styles.first}`} role="cell">Git</div>
                    <div className={styles.flex_row} role="cell">Apache </div>
                    <div className={styles.flex_row} role="cell">Illustrator</div>
                    <div className={styles.flex_row} role="cell">Premier</div>
                  </div>
                  <div className={`${styles.flex_table} ${styles.row}`} role="rowgroup">
                    <div className={`${styles.flex_row} ${styles.first}`} role="cell">Product Mgmt</div>
                    <div className={styles.flex_row} role="cell">Project Mgmt </div>
                    <div className={styles.flex_row} role="cell">Marketing</div>
                    <div className={styles.flex_row} role="cell">Business Dev</div>
                  </div>
                  <div className={`${styles.flex_table} ${styles.row}`} role="rowgroup">
                    <div className={`${styles.flex_row} ${styles.first}`} role="cell">Product Lifecycle</div>
                    <div className={styles.flex_row} role="cell">SDLC</div>
                    <div className={styles.flex_row} role="cell">Agile</div>
                    <div className={styles.flex_row} role="cell">Eq / Comm</div>
                  </div>
                </div>
                <h3 className={styles.header_h3}>WORK EXPERIENCE  </h3>
                <h4 className={styles.h_all}>PROGRAMMING</h4>
                <h5 className={styles.h_all_bottom}>CODING BOOTCAMP AND DEV PROJECTS <br/> 2020 ~ Present</h5>
                <ul>
                  <li className={styles.text}>Completed 1,000+ hours of web development in ReactJS, Laravel, Javascript, jQuery, HTML, CSS, PHP, SQL and XAMPP via Coding Bootcamp Praha, Udemy courses and independent projects.</li> 
                  <li className={styles.text}>Designed, developed, tested and debugged numerous web applications both as collaborative and personal projects.</li>  
                  <li className={styles.text}>Developed concept and assembled team for a restaurant point of sale system to execute as our coding bootcamp's final team project.</li>
                  <li className={styles.text}>Acquired proficiency in valuable programming concepts including CSS modules, SASS, flex, OOP, useState, useEffect, useRef, React DOM, routing and others.</li> 
                  <li className={styles.text}>Gained experience in programming control systems and package managers including git and npm. </li>
                </ul>
                <h4 className={styles.h_all}>FERRETTE AND PARTNERS -  Chengdu, China              (Launch Suspended due to Pandemic) </h4>
                <h5 className={styles.h_all_bottom}>CONSULTANT: BUSINESS STRATEGY AND MARKETING <br/>	2020 ～5/mo contract</h5>
                <ul>
                  <li className={styles.text}>Consult and collaborate with a team of 3 founding partners to strategize and simultaneously develop infrastructure for a Chinese facing talent acquisition agency and western facing recruitment platform for 3 opportunely defined business sectors.</li> 
                  <li className={styles.text}>Created a company website using digital ocean, wordpress and wordpress extensions.</li>
                  <li className={styles.text}>Developed client management system and dialogues towards client partnerships with international employers for digital recruitment service including recruitment and visa packages.</li>  
                  <li className={styles.text}>Introduced strategic partnerships with local media agencies to trade content and advertising, cutting our marketing budget approximately 11,000rmb a month while generating greater previous exposure.</li> 
                  <li className={styles.text}>Facilitated key branding decisions and created media packages including logos and marketing videos with adobe suite.</li>
                </ul>
                <h4 className={styles.h_all}>ZHONG XI TECHNOLOGY -  Chengdu, China</h4>
                <h5 className={styles.h_all_bottom}>CONSULTANT: BUSINESS DEVELOPMENT AND MARKETING <br/> 2019 ～6/mo contract </h5>
                <ul>
                  <li className={styles.text}>Identified target market, strategized marketing campaign and created marketing materials for 3 separate programs aimed at consumers of technology training in computer programming, basic electrical engineering and IOT.  </li> 
                  <li className={styles.text}>Introduced strategic partners for mutual cooperation sharing in media and education resulting in dialogue with 20+ distinguished education locations aiming to source our services for thousands of students.</li>  
                  <li className={styles.text}>Developed original curriculum with one of a kind and sourced materials with in house technology team including original story incorporating stem education principals. </li> 
                  <li className={styles.text}>Wrote, introduced artists to project and managed the illustration design and mixed_media resources of original story organized into modules to support curriculum.</li>
                </ul>
              </div>
        </section>
      </section>
    </>
  )
};






export default Resume;
