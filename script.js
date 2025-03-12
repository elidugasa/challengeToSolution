const musicContainer = document.querySelector('.music-container')
const playbtn = document.querySelector('#play')
const prevbtn = document.querySelector('#prev')
const nextbtn =document.querySelector('#next')
const progress = document.querySelector('.progress')
const audio = document.getElementById('audio')
const progressContainer = document.querySelector('.progress-container')
const songTitle = document.getElementById('title')
const cover =document.getElementById('cover')
// Array of song titles
const songs = ['summer', 'hi', 'ukulule'];
let songIndex = 2;
// Load the initial song details into the player
loadSong(songs[songIndex]);
function playSong(){
    musicContainer.classList.add('play')
    playbtn.querySelector('i.fas').classList.remove('fa-play')
playbtn.querySelector('i.fas').classList.add('fa-pause')
audio.play()
    
}
function pauseSong(){
musicContainer.classList.remove('play')
playbtn.querySelector('i.fas').classList.remove('fa-pause')
playbtn.querySelector('i.fas').classList.add('fa-play')
audio.pause()
}
function prevSong(){
    songIndex--
if(songIndex < 0){
    songIndex = songs.length - 1
}
loadSong(songs[songIndex]);
playSong();}
function nextSong(){
    songIndex++
    if(songIndex > songs.length - 1){
        songIndex = 0
    }
    loadSong(songs[songIndex])
    playSong()
}

function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progressPercent =(currentTime / duration) * 100
    progress.style.width= `${progressPercent}%`
}


function loadSong(song){
    songTitle.innerText = song;
    audio.src = `${song}.mp3`;
    cover.src = `image/${song}.jpg`;


}
//evnet listner
playbtn.addEventListener('click', () => {
    const isPlaying =musicContainer.classList.contains('play')
    if(isPlaying){
        pauseSong()
    }
    else{
        playSong()
    }
})
prevbtn.addEventListener('click', prevSong)
nextbtn.addEventListener('click', nextSong)
audio.addEventListener("timeupdate", updateProgress)