import React from 'react';
import styles from '../../styles/Footer.module.css';
import NavBar from './NavBar' ;

const Footer = () => {
    return (
        <div className={styles.footer_background}>
            <section className={styles.footer_container}>
                <main className={styles.footer_grid}>
                    <div className={styles.navbar_footer}><NavBar /></div>
                    <div className={styles.left_hide}>INFO</div>
                    <div className={styles.center_hide}>SITES</div>
                    <div className={styles.right_hide}>CONTACT</div>
                    <p className={styles.left}>Check out my projects!</p>
                    <div className={styles.left}>Landon Lundquist</div>
                    <div className={styles.center}><a href="https://www.linkedin.com/in/landon-lundquist-091839a8/" style={{color: "#4fb0a7", textDecoration: "none"}}>LinkedIn</a></div>
                    <div className={styles.right}>+1(951)407-6815</div>
                    <div></div>  
                    <div className={styles.left_hide}>California</div>
                    <div className={styles.center}><a href="https://github.com/landonsgithub" style={{color: "#4fb0a7", textDecoration: "none"}}>github</a></div>
                    <div className={styles.right}><a href="mailto:lundquistlandon@gmail.com" style={{color: "#4fb0a7", textDecoration: "none"}}>email</a></div>   
                </main>    
            </section>
        </div>
    )
};

export default Footer;


