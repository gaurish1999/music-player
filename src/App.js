import './App.css';

function ready(){

  const coverImage = document.querySelector('.cover-image');
  const trackTitle = document.querySelector('.music-title').innerHTML;
  const trackArtist = document.querySelector('.music-artists').innerHTML;
  const seeker = document.querySelector('.track-seeker');

  const prev = document.querySelector('.fa-backward');
  const next = document.querySelector('.fa-forward');
  const play = document.querySelector('.fa-play-circle');

  const start = document.querySelector('.start-time');
  const end = document.querySelector('.end-time');
  const vol = document.querySelector('.music-vol');
  // alert(play)
  let track_index = 0;
  let isPlaying = false;
  let updateTimer;

  let curr_track = document.createElement('audio');

  let track_list = [
    {
      name: 'Beliya',
      artist: 'Gurnam Bhullar',
      image: 'https://covers.djpunjab.pro/image/501280/Beliya-1.jpg',
      path: 'https://cdnsongs.com/music/data/Punjabi/202203/Lekh_EP/128/Beliya_1.mp3'
    },
    {
      name: 'Dil Tutda',
      artist: 'Jassie Gill',
      image: 'https://covers.djpunjab.pro/image/37226/Dill-Tutda-1.jpg',
      path: 'https://cdnsongs.com/music/data/Single_Track/201706/Dill_Tutda/128/Dill_Tutda_1.mp3'
    },
    {
      name: 'Main Viah Ni Karona Tere Naal',
      artist: 'Gurnam Bhullar',
      image: 'https://covers.djpunjab.pro/image/500777/Main-Viyah-Nahi-Karona-Tere-Naal-1.jpg',
      path: 'https://cdnsongs.com/music/data/Single_Track/202202/Main_Viyah_Nahi_Karona_Tere_Naal/128/Main_Viyah_Nahi_Karona_Tere_Na_1.mp3'
    }
  ]

  function loadTrack(track_index){
    clearInterval(updateTimer);
    resetValues();
  
    curr_track.src = track_list[track_index].path;
    curr_track.load();
  
    coverImage.style.backgroundImage = "url(" + track_list[track_index].image + ")";
    trackTitle.textContent = track_list[track_index].name;
    trackArtist.textContent = track_list[track_index].artist;
    
    updateTimer = setInterval(seekUpdate, 1000);

    curr_track.addEventListener('Ended', nextTrack);
  }

  function resetValues(){
    start.textContent = '00:00';
    end.textContent = '00:00';
    seeker.value = 0;
  }

  function playpauseTrack(){
    if(!isPlaying)
      playpauseTrack();
    else
      playpauseTrack();
  }

  function playTrack(){
    curr_track.play();
    isPlaying = true;

    playpause_btn.innerHTML = '<i class="fa fa-pause-circle" aria-hidden="true"></i>';
  }

  function pauseTrack(){
    curr_track.pause();
    isPlaying = false;

    playpause_btn.innerHTML = '<i class="fa fa-play-circle" aria-hidden="true"></i>';
  }

  function nextTrack(){
    if(track_index < track_list.length - 1)
      track_index += 1;
    else track_index = 0;

    loadTrack(track_index);
    playTrack();
  }

  function prevTrack(){
    if(track_index > 0)
      track_index -= 1;
    else track_index = track_list.length - 1;

    loadTrack(track_index);
    playTrack();
  }

}
ready();


function App() {
  return (
    <div className="App">      

      <div className="container">

{/* Title */}
        <div className="row p-4">

          <div className='col-sm-12'>
            <h2 className='mt-5'>
              <i className="fa fa-music" aria-hidden="true"></i> Music player
            </h2>
          </div>
         
        </div>

{/* Cover image */}
        <div className='row p-5'>

          <div className='col-sm-12'>
            <div >

              <img 
              className='cover-image'
              src='https://a10.gaanacdn.com/gn_img/albums/z8k3y13rxo/8k3yx8j2Kr/size_l.jpg' 
              height='250px' 
              width='250px'></img>

            </div>
          </div>
          
        </div>

{/* music-title */}
        <div className='row p-2'>
          <div className='col-sm-8 offset-md-2'>
            <marquee direction="left" className='music-title' scrollamount="3">Punjabi Mash-up</marquee>
            {/* <i className="fa fa-volume-off" aria-hidden="true"></i> */}
          </div>

          {/* track-artist */}
          <div className='col-sm-6 offset-sm-3'>
          <marquee direction="left" className='music-artists' scrollamount="3">Various</marquee>

          </div>
          
        </div>
        
{/* Controls */}
        <div className='row'>
          
          <div className='col-sm-5'>
            <i className="fa fa-backward mt-4" aria-hidden="true"></i>
          </div>

          <div className='col-sm-2'>
            <i className="fa fa-play-circle" aria-hidden="true"></i>
            {/* <i className="fa fa-pause-circle" aria-hidden="true"></i> */}
          </div>

          <div className='col-sm-5'>
            <i className="fa fa-forward mt-4" aria-hidden="true"></i>
          </div>

          
        </div>

{/* Seek */}
        <div className="row p-4">

          <div className='col-sm-1'>
              <span className='start-time'>
                00:00
              </span>
          </div>

          <div className='col-sm-10'>
            <input type='range'
            className='track-seeker'
            onChange={seekTo}
            ></input>
          </div>

          <div className='col-sm-1'>
            <span className='end-time'>
              00:00
            </span>
          </div>

        </div>
       
{/* Volume control */}
        <div className='row p-4'>

          <div className='col-sm-3'>
            <i className="fa fa-volume-down" aria-hidden="true"></i>
          </div>

          <div className='col-sm-6'>
          <input type='range' className='music-vol' onChange={setVolume} min='0' max='100'></input>

          </div>

          <div className='col-sm-3'>
          <i className="fa fa-volume-up" aria-hidden="true"></i>  

          </div>

                
        </div>

        

      </div>
    </div>
  );
}

export default App;
