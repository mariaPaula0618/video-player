const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')


$play.addEventListener('click', handlePlayClick)
function handlePlayClick(){
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    console.log('Clicked on play button')
}

$pause.addEventListener('click', handlePauseClick )
function handlePauseClick(){
    $video.pause()
    $play.hidden = false;
    $pause.hidden = true;
    console.log('Clicked on pause button')
}

$forward.addEventListener('click', handleForwardClick )
function handleForwardClick(){
    $video.currentTime += 10
    console.log('Clicked on forward button',  $video.currentTime)
}

$backward.addEventListener('click', handleBackwardClick)
function handleBackwardClick(){
    $video.currentTime -= 10
    console.log('Clicked on backward button')
}

const $progress = document.querySelector('#progress')

$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);

function handleLoaded(){
    $progress.max = $video.duration
    console.log('My video loaded', $video.duration)
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime
    console.log('Current time', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
    console.log($progress.value)
}
