import React from 'react';
import styles from '../../styles/NavBarTwo.module.css';
import { Link } from 'react-router-dom';

const NavBarTwo = () => {
    return (
      <>
        <div className={styles.navbar_two}>
          <Link to="/" className={styles.button2}>Home</Link>
          <Link to="/projects" className={styles.button2}>Projects</Link>
        </div>
      </>
    )
    
};

export default NavBarTwo;

