const range = document.getElementById("progress");
const playButton = document.getElementById("play-button");
const song = document.getElementById("audio");


song.onloadedmetadata = function() {
    range.max = song.duration;
    range.value = song.currentTime;
}

const playPause = () => {
    if(playButton.classList.contains("fa-pause")){
        song.pause();
        playButton.classList.add("fa-play");
        playButton.classList.remove("fa-pause");
    }else{
        song.play();
        playButton.classList.add("fa-pause");
        playButton.classList.remove("fa-play");
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