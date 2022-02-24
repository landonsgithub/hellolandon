import React from 'react';
import NavBar from './NavBar' ;
import styles from'../../styles/HeaderHome.module.css';

const HeaderHome = () => {
  return (
    <section className={styles.header_container}>
      <section className={styles.header_bkg}>
        <div className={styles.header_animated_bkg}>
          <section className={styles.header_content}>
            <section className={styles.header_nav}>
              < NavBar />
            </section>
            <div className={styles.header_main_text_wrapper}>
              <div className={styles.header_main_text_one}>Landon</div>
              <div className={styles.header_main_text_two}>Lundquist</div>
            </div>
            <div className={styles.bottom_animated_bkg}></div>
              <section className={styles.bottom_text_container}>
                <div className={styles.header_secondary_text}>
                  MARKETER
                </div>
                <div className={styles.header_secondary_text}>
                  MANAGER
                </div>
                <div className={styles.header_secondary_text}>
                  DEVELOPER
                </div>  
              </section>
          </section>
        </div> 
      </section>
    </section>
  )
};

export default HeaderHome;

