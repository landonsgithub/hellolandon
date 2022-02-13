import React from 'react';
import styles from '../../styles/Footer.module.css';
import NavBar from './NavBar' ;

const Footer = () => {
    return (
        <section className={styles.footer}>
        <hr className={styles.footer_seperator} />
        <section className={styles.footer_social_media}>
        <a className={styles.footer_social_link} href="https://www.linkedin.com/in/landon-lundquist-091839a8/">LinkedIn</a>
        </section>
        <section className={styles.footer_info}>
        <section className={styles.footer_info_left}>
            <section className={styles.footer_info__name}>
                <NavBar />
            </section>        
        </section>
        <section className={styles.footer_info_center}>
            <section className={styles.footer_info__email}>
            lundquistlandon@gmail.com
            <br/>
            </section>
            <section className={styles.footer_info__terms}>
            https://github.com/landonsgithub
            <br />
           
            </section>
        </section>
        <section className={styles.footer_info_right}>
            <section className={styles.footer_info__number}>
            Landon Lundquist
            <br />
            <br/>
            1(951) 407-6816
            </section>
            <section className={styles.footer_info__contact}>
          
            California
            </section>
        </section>
        </section>
        <hr className={styles.footer_seperator} />
    </section>
    )
};

export default Footer;
