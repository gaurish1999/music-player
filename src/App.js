import './App.css';

function App() {
  return (
    <div className="App">
      <h2>
        <i class="fa fa-music" aria-hidden="true"></i> Music player
      </h2>

      <div class="container">

        <div className='row p-5'>

          <div className='col-md-12'>
            <div className='cover-image'>
              <img src='https://a10.gaanacdn.com/gn_img/albums/z8k3y13rxo/8k3yx8j2Kr/size_l.jpg' height='250px' width='250px'></img>
            </div>
          </div>
          
        </div>
        

        <div>
          <i class="fa fa-backward" aria-hidden="true"></i>
          {/* <i class="fa fa-pause-circle" aria-hidden="true"></i> */}
          <i class="fa fa-play-circle" aria-hidden="true"></i>
          <i class="fa fa-forward" aria-hidden="true"></i>
        </div>
       
        
        <div>          
          <i class="fa fa-volume-down" aria-hidden="true"></i>
          <input type='range' min='0' max='100'></input>
          <i class="fa fa-volume-up" aria-hidden="true"></i>        
        </div>

        <div>
          <i class="fa fa-volume-off" aria-hidden="true"></i>
        </div>

      </div>
    </div>
  );
}

export default App;
