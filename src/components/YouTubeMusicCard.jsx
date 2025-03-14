import { useState, useRef, useEffect } from "react";
import '../styles/YouTubeMusicCard.css';
import YouTube from "react-youtube";

export default function YouTubeMusicCard({ songs }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [player, setPlayer] = useState(null);
  const isDragging = useRef(false);

  const currentSong = songs[currentSongIndex];

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleReady = (event) => {
    setPlayer(event.target);
    const duration = event.target.getDuration();
    setDuration(formatTime(duration));
  };

  const togglePlay = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNextSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex < songs.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePreviousSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : songs.length - 1
    );
  };

  const handleProgressClick = (e) => {
    if (player) {
      const rect = e.currentTarget.getBoundingClientRect();
      const offsetX = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
      const newTime = (offsetX / rect.width) * player.getDuration();
      player.seekTo(newTime, true);
      setProgress((newTime / player.getDuration()) * 100);
    }
  };

  const handleDragStart = () => {
    isDragging.current = true;
  };

  const handleDrag = (e) => {
    if (isDragging.current && player) {
      const rect = e.currentTarget.getBoundingClientRect();
      const offsetX = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
      const newTime = (offsetX / rect.width) * player.getDuration();
      player.seekTo(newTime, true);
      setProgress((newTime / player.getDuration()) * 100);
    }
  };

  const handleDragEnd = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    if (player) {
      const interval = setInterval(() => {
        const currentTime = player.getCurrentTime();
        const duration = player.getDuration();
        if (duration) {
          setProgress((currentTime / duration) * 100);
          setCurrentTime(formatTime(currentTime));
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [player]);

  // ✅ Zmena: Keď sa zmení `currentSongIndex`, inicializuj nový prehrávač
  useEffect(() => {
    if (player) {
      player.stopVideo(); // Zničí aktuálny prehrávač
      player.cueVideoById(songs[currentSongIndex].youtubeId);
      player.playVideo(); // Automaticky spustí prehrávanie
      setIsPlaying(true);
      setProgress(0);
    }
  }, [currentSongIndex]);

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 1, // ✅ Nastavené na automatické spustenie
      controls: 0
    }
  };

  return (
    <div className="music-card">
      <img
        src={currentSong.cover}
        alt={currentSong.title}
        className="music-card-cover"
      />
      <div className="music-card-content">
        <h2 className="music-card-title">{currentSong.title}</h2>
        <p className="music-card-artist">{currentSong.artist}</p>
        <div className="music-card-controls">
          <button onClick={handlePreviousSong} className="music-card-button">
            ⏮
          </button>
          <button onClick={togglePlay} className="music-card-button">
            {isPlaying ? '❚❚' : '▶'}
          </button>
          <button onClick={handleNextSong} className="music-card-button">
            ⏭
          </button>
        </div>
        <div
          className="progress-bar"
          onMouseDown={handleDragStart}
          onMouseMove={handleDrag}
          onMouseUp={handleDragEnd}
          onClick={handleProgressClick}
        >
          <div className="progress" style={{ width: `${progress}%` }}>
            <div className="progress-handle" />
          </div>
        </div>
        <div className="time-info">
          {currentTime} / {duration}
        </div>

        {/* ✅ Zmena: Vždy inicializuj nový prehrávač */}
        <YouTube
          videoId={currentSong.youtubeId}
          opts={opts}
          onReady={handleReady}
          onEnd={handleNextSong}
        />

        {/* ✅ Zmena: Automatické spustenie po kliknutí */}
        <ul className="song-list">
          {songs.map((song, index) => (
            <li
              key={index}
              className={
                index === currentSongIndex ? "song-list-item active" : "song-list-item"
              }
              onClick={() => setCurrentSongIndex(index)}
            >
              {song.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
