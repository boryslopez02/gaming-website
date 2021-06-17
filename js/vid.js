const form = document.getElementById('form'),
input = document.getElementById('input'),
btnPlay= document.getElementById('btn-play'),
video = document.getElementById('video')
// valid = document.quer

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

btnPlay.addEventListener('click', () => {
    PlayVid();
});

const PlayVid = () => {
   
    video.src = input.value;
    
}

input.addEventListener('change', () => {
    
});

