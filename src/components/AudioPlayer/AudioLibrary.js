import React from 'react';
import styles from '../../styles/AudioLibrary.module.css';

const AudioLibrary = () => {
    const library = [
        {
         id: Math.floor(Math.random().toFixed(4) * 10000),
         title: 'A JOURNEY FROM ONE LIFE TO THE NEXT, TO THE NEXT',
         description: 'A man wakes up in India and realizes he can\'t make it back to his old life. Once a business owner thriving in SW China, Allen J Sanchez saw his life come to an abrupt halt on holiday. This recording is a testimony of his trials and adventures navigating visas, unexpected opportunities and whatever lies beyond the dawn of a pandemic. Uncut: Proof of Concept.',
         time: "2 hours 17 minutes",
         src: "https://dl.dropbox.com/s/wfhmtvbc5two1wa/1-allen_2991.ogg"
        }
      ];


  return (
    <> 
      {library.map(({title, description, time, id}) => (
        <div key={id} className={styles.libraryWrapper}>
          <p className={styles.time}>{time}</p>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
        </div>
      ))}
    </>
  );
};

export default AudioLibrary;
