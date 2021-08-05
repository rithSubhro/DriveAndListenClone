const toggle = document.getElementById('toggle');
const mute = document.getElementById('mute');
const locations = document.getElementById('locations');
const speed = document.getElementById('speed');
const audio = document.getElementById('audio');
const play = document.getElementById('play');
const prev = document.getElementById('prev');
const next = document.getElementById('next');


var currentCityIndex;
var currentCity;
var currentVideoIndex;
var currentVideo;
var currentAudioIndex;
var currentAudio;

const data = [
  {
    city: 'Delhi',
    videos: [
      'NaCRxHeGbck',
      'Azzd2BgbOwQ'
    ],
    music: [
      'http://radio.garden/api/ara/content/listen/jtIH9gPX/channel.mp3',
      'http://boxoutfm.out.airtime.pro:8000/boxoutfm_a'
    ]
  },
  {
    city: 'Mumbai',
    videos: [
      '9Sxlstg6J3c',
      'JG8G9tVyXaw'
    ],
    music: [
      'https://radioindia.net/radio/sc-bb/icecast.audio',
      'https://namkeen.riggrodigital.com:8888/stream',
      'http://prclive1.listenon.in:9292/'
    ]
  }
]

onLoad();

function onLoad() {
  //city
  currentCityIndex = randomNumber(data.length);
  currentCity = data[currentCityIndex];
  //video
  currentVideoIndex = randomNumber(currentCity.videos.length);
  currentVideo = currentCity.videos[currentVideoIndex];
  //Music
  currentAudioIndex = randomNumber(currentCity.music.length);
  currentAudio = currentCity.music[currentAudioIndex];
  
  console.log(currentCity);

  music.src = currentAudio;
  play.classList.remove('fa-play');
  play.classList.add('fa-pause');

  data.forEach((el, idx)=>{
    var locationElement = document.createElement('li');
    locationElement.innerText = el.city;
    locatio
  })
}

function randomNumber(max){
  return Math.floor(Math.random()*(max));
}


play.addEventListener('click', ()=> {
  if(music.paused) {
    music.play();
    console.log("Play dabaya");
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
  }else{
    music.pause();
    console.log("Pause dabaya");
    play.classList.remove('fa-pause');
    play.classList.add('fa-play');
  }
});

next.addEventListener('click', ()=> {
  if(currentAudioIndex < (currentCity.music.length -1)){
    currentAudioIndex++;
  }else{
    currentAudioIndex = 0;
  }

  currentAudio = currentCity.music[currentAudioIndex];
  music.src= currentAudio;
  music.play();
});

prev.addEventListener('click', ()=>{
  if(currentAudioIndex==0){
    currentAudioIndex = (currentCity.music.length-1);
  }
  else{
    currentAudioIndex--;
  }
  currentAudio = currentCity.music[currentAudioIndex];
  music.src= currentAudio;
  music.play();
})


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: window.innerHeight * 1.2,
    width: window.innerHeight * 1.2 * (16 / 9),
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      'playsinline': 1,
      'controls': 0,
      'mute': 1,
      'showinfo': 0,
      'disablekb': 0,
      'modestbranding': 1,
      'origin': window.location.origin,
      'widget_reference': window.location.href
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}