import React from 'react';
import styles from '../../styles/NavBarTwo.module.css';
import { Link } from 'react-router-dom';

const NavBarTwo = () => {
    return (
      <>
        <section className={styles.navbar}>
          <Link to="/" className={styles.button}>Home</Link>
          <Link to="/projects" className={styles.button}>Projects</Link>
        </section>
      </>
    )
    
};

export default NavBarTwo;

