/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
	if(video.paused){
		video.play();
	}else{
		video.pause();
	}
}

function updateButton(){
  const icon = video.paused ? '►' : '❚ ❚';
  toggle.innerHTML = icon
}

function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
	 video[this.name] = this.value;
}

function handleProgress(){
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}


toggle.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('click',togglePlay);

video.addEventListener('timeupdate',handleProgress)

skipButtons.forEach((button=>button.addEventListener('click',skip)))

// volume and speed 
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
range.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));













