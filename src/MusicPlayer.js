import React from 'react'
import back from "./rss/icons/back.png";
import next from "./rss/icons/next.png";
import pause from "./rss/icons/pause.png";
import play from "./rss/icons/play.png";
import song1 from "./rss/music/AgarTumSathHo.mp3";
import song2 from "./rss/music/AllOfMe.mp3";
import song3 from "./rss/music/CheapThrills.mp3";

export default function MusicPlayer() {
    const player = document.getElementById("player");
    const songList = [song1, song2, song3];
    let [songs, setSongs] = React.useState([song1]);
    let [isPlaying, setIsPlaying] = React.useState(false);
    let [nowPlaying, setNowPlaying] = React.useState(songs[0]);
    

    function TogglePlay() {
        if (!isPlaying) {
            setIsPlaying(true);
            player.play();
            document.getElementById('playIcon').style.display = "none";
            document.getElementById('pauseIcon').style.display = "inline";
        } else {
            setIsPlaying(false);
            player.pause();
            document.getElementById('playIcon').style.display = "inline";
            document.getElementById('pauseIcon').style.display = "none";
        }
    }

    function nextSong() {
        setIsPlaying(true);
        setNowPlaying(songs[nowPlaying + 1]);
        player.play();
    }

    return (
        <div id="media">
            <audio controls id="player">
                <source src={nowPlaying} type="audio/mp3" />
            </audio>
            <div class="inline">
                <div id="backLink" class="inline">
                    <button>
                        <li class="nav-button music-button" id="back">
                            <img id="backIcon" src={back} alt="back"/>
                        </li>
                    </button>
                </div>
                <div id="midLink" class="inline">
                    <button onClick={TogglePlay}>
                        <li class="nav-button music-button" id="playPause">
                            <img id="playIcon" src={play} alt="play" />
                            <img id="pauseIcon" src={pause} alt="pause" />
                        </li>
                    </button>
                </div>
                <div id="nextLink" class="inline">
                    <button onClick={nextSong}>
                        <li class="nav-button music-button" id="next">
                            <img id="nextIcon" src={next} alt="next"/>
                        </li>
                    </button>
                </div>
            </div>

            <div class="slidecontainer">
                <input type="range" min="1" max="100" value="50" class="slider" id="volSlider" />
            </div>

            <div id="nowPlaying">
                <p id="songName">Press Play</p>
            </div>
        </div>
  )
}
