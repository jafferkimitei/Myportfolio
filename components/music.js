import React from 'react';
import styles from "../styles/Love.module.scss";

const songsData = [
  {
    albumPhoto: '/musc/popcaan.webp',
    trackName: 'Silence',
    artist: 'Popcaan',
  },
  {
    albumPhoto: '/musc/hustler.jpg',
    trackName: 'Hustler Muzik',
    artist: 'Lil Wayne',
  },
  {
    albumPhoto: '/musc/aaliyah.webp',
    trackName: 'Try again',
    artist: 'Aaliyah',
  },
  {
    albumPhoto: '/musc/mark.webp',
    trackName: 'Return of the mack',
    artist: 'Mark Morisson',
  },
  {
    albumPhoto: '/musc/kunta.webp',
    trackName: 'King Kunta',
    artist: 'Kendrick Lamar',
  },
  {
    albumPhoto: '/musc/onerepublic.webp',
    trackName: 'Counting stars',
    artist: 'One Republic',
  },
];

const Music = () => {

  return (
    <>
     <div>
      {songsData.map((song, index) => (
        <div key={index} className={styles.songItem}>
          <div className={styles.albumPhoto}>
            <img src={song.albumPhoto} alt={`Album Cover for ${song.trackName}`} />
          </div>
          <div className={styles.songDetails}>
            <p className={styles.trackName}>{song.trackName}</p>
            <p className={styles.artist}>{song.artist}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Music;
