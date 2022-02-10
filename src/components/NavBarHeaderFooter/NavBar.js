import React from 'react';
import styles from '../../styles/NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <>
        <section className={styles.navbar}>
          <Link to="/home" className={styles.navbar_item}>Home</Link>
          <Link to="/projects" className={styles.navbar_item}>Projects</Link>
        </section>
      </>
    )
    
};

export default NavBar;

