import './App.css';

function ready(){

  const coverImage = document.querySelector('.cover-image');
  const trackTitle = document.querySelector('.music-title').innerHTML;
  const trackArtist = document.querySelector('.music-artists').innerHTML;

  const prev = document.querySelector('.fa-backward');
  const next = document.querySelector('.fa-forward');
  const play = document.querySelector('.fa-play-circle');

  const start = document.querySelector('.start-time');
  const end = document.querySelector('.end-time');
  // alert(play)

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
          <input type='range' className='music-vol' min='0' max='100'></input>

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
