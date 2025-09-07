const range = document.getElementById("progress");
const playButton = document.getElementById("play-button");
const song = document.getElementById("audio");
const playIcon = document.querySelector("#play-button i")

song.onloadedmetadata = function() {
    range.max = song.duration;
    range.value = song.currentTime;
}

const playPause = () => {
    if(playIcon.classList.contains("fa-pause")){
        song.pause();
        playIcon.classList.add("fa-play");
        playIcon.classList.remove("fa-pause");
    }else{
        song.play();
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
        
    }
}

if(song.play()) {
    setInterval(()=>{
        range.value = song.currentTime;
    }, 500)
}


range.onchange = () => {
    song.play();
    song.currentTime = range.value;
    playButton.classList.add("fa-pause");
    playButton.classList.remove("fa-play");
}

playButton.addEventListener("click", playPause);