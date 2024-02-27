// AIzaSyAgIr4HR1yKKBv0pN48JngzqJeMTrurKvw
// AIzaSyCGM5Q7wkeicJBJDnNh1-oVsz2uZ68Gu2g
import { useEffect, useState } from 'react';
import styles from '../../styles/Slider.module.scss';

const visuals = () => {
    const [videos, setVideos] = useState([]);
  
    useEffect(() => {
        const fetchYouTubeVideos = async () => {
          
          const apiKey = 'AIzaSyCGM5Q7wkeicJBJDnNh1-oVsz2uZ68Gu2g';
          const maxResults = 6;
          const minViews = 1000;
    
          try {
            const uploadsPlaylistId = 'PLBJCFyTFXIq_NERjQ9BrH9eOj3gVlmKf';
    
            const playlistResponse = await fetch(
              `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${apiKey}&order=viewCount&videoCategoryId=10&type=video&videoDefinition=high&videoEmbeddable=true&videoDuration=medium&viewCount=${minViews}`
            );
            const playlistData = await playlistResponse.json();
            setVideos(playlistData.items);
          } catch (error) {
            console.error('Error fetching YouTube videos:', error);
          }
        };
    
        fetchYouTubeVideos();
      }, []);;
  
      return (
  <div className={styles.visualsContainer}>
    <div className={styles.videoContainer}>
      {videos ? (
        videos.map((video) => (
          <div key={video.id} className={styles.video}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
              allowFullScreen
              title={video.snippet.title}
            ></iframe>
          </div>
        ))
      ) : null}
    </div>
  </div>
);
        }
  export default visuals;
