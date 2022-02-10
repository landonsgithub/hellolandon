import React from 'react';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
    return (
        <section className={styles.footer}>
        <hr className={styles.footer_seperator} />
        <section className={styles.footer_social_media}>
        <a href="https://www.linkedin.com/in/landon-lundquist-091839a8/">LinkedIn</a>
        </section>
        <section className={styles.footer_info}>
        <section className={styles.footer_info_left}>
            <section className={styles.footer_info__name}>
                Software Developer Landon Lundquist
            </section>
            <section className={styles.footer_info__returns}>
            <br />
            <br />
            Los Angeles
            </section>        
        </section>
        <section className={styles.footer_info_center}>
            <section className={styles.footer_info__email}>
            lundquistlandon@gmail.com
            </section>
            <section className={styles.footer_info__terms}>
            https://github.com/landonsgithub
            <br />
            <br />
            Chengdu
            </section>
        </section>
        <section className={styles.footer_info_right}>
            <section className={styles.footer_info__number}>
            1(951) 407-6816
            </section>
            <section className={styles.footer_info__contact}>
            <br />
            <br />
            Prague
            </section>
        </section>
        </section>
        <hr className={styles.footer_seperator} />
    </section>
    )
};

export default Footer;
