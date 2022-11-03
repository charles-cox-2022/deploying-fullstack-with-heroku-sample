import React from 'react';
import YouTubePlayer from './YouTubePlayer';
import '../../resources/css/form.css'
import '../../resources/css/button.css';
import '../../resources/css/scrollbar.css';

//Redux Playlists
import { getPlaylists,addPlaylistItem,removePlaylistItem,setCurrentPlaylist,getCurrentPlaylist } from './YouTubeRedux';


//Get Initial Playlists from YouTubeRedux.js
let playlists = getPlaylists();
//Style for div containing Title, Player and Playlist.
const styleWrapper = {
    
    justifyContent: 'center',
    display: "grid",
    gridTemplateColumns: "3fr 20fr 3fr",
    minHeight: "3fr",
    maxHeight: '1fr',
    
    width: "100%",
    margin: "0px"
}
//Style for div containing YouTube Iframe
const stylePlayer = {
  width: "100%",
  minHeight: "800px",
  paddingLeft: "75px",
  paddingRight: "75px"
}

//Style for each Playlist Item (li)
const stylePlaylistItem = {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    textAlign: 'left',
    overflowWrap: 'true',
    marginTop: '0px',
    paddingTop: "10px",
    paddingBottom: "10px",
}



//Module for YouTube Player Layout
export default class YouTubeModule extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {
      ActiveTitle: getCurrentPlaylist().title, //Title of YouTube Playlist (Used in Playlist Buttons)
      ActiveUrl: `https://www.youtube.com/embed/?list=${getCurrentPlaylist().url}`, //Link used in Iframe to load video
      ActiveVideo: "", //Must be blank to load first video
      Playlists: getPlaylists(),
     };
    this.list = [];  
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  //Add a Playlist Item
  addPlaylistItem() {
    //Test --> https://youtu.be/pmkWBgayoUk?list=RDMMpmkWBgayoUk
    let item = document.getElementById("URL").value;//Get Form URL
    let name = document.getElementById("Name").value;//Get Form Name
    //Rip the List
    let firstQ = item.indexOf("list=") + 5;
    let url = item.substring(firstQ,item.length)
    console.log(url);
    let id = playlists.length;
    let x = [{id: id, title: name, url:url, video:""}];
    console.log(item);
    //playlists = playlists.concat(x);
    playlists = addPlaylistItem(x);
    console.log(playlists);
    
    this.setState({Playlists: playlists})
  }
  setCurrentSongName() {
    this.setState.currentSong = document.getElementById("Iframe").src;
  }
  //Set Current Playlist - Will Auto Refresh
  setPlaylist(id,title,url,video) {
    
    console.log(`Setting Playlist to ${title}`);
    //player.setIframe(title,url,video);
    this.setState({ActiveTitle: title});
    this.setState({ActiveUrl: `https://www.youtube.com/embed/${video}?list=${url}`});
    
    

    //Set Current Playlist
    let x = {id: id, title: title, url: url, video:""};
    setCurrentPlaylist(x);
    console.log(x);

  }

  //Called AFTER Refresh
  componentDidUpdate()
  {

  }

  //Render Buttons
  renderButtons() {
    this.list = this.state.Playlists.map((x) => 
    <li className="navPlaylist" key={x.id} style={stylePlaylistItem}>
        <button className="button" onClick={ () => this.setPlaylist(x.id,x.title,x.url,x.video)}>
            {x.title}
        </button>
    </li>
    );
    return(
        <React.Fragment>
        <ul className="navPlaylistBox" >
            {this.list}
        </ul>
        </React.Fragment>
    
        );  
    } 
   
  //Renders
  render() {
    
      return(
      <React.Fragment>
        <div style={{width:"100%", height:"100%"}}>
          <h2 style={{margin:"0px", paddingBottom:"10px"}}>YouTube Player</h2>
          <p>Current Playlist: {this.state.ActiveTitle}</p>
        </div>
        <div style={styleWrapper}>
          <div style={{height: "100%"}}>
            <form onSubmit={this.handleSubmit}>
              <label style={{fontSize:"21px"}} htmlFor="URL">Add a Playlist URL! </label>
              <input type="text" id="URL" name="URL"></input><br/>
              <label style={{fontSize:"21px"}} htmlFor="Name">Name it! </label>
              <input type="text" id="Name" name="Name"></input>
              <input type="submit" value="Submit" onClick={() => this.addPlaylistItem()}></input>
            </form>
            <ul className="scroller" >
                {this.renderButtons()}
            </ul>
          </div>
          <div style={stylePlayer}>
            <YouTubePlayer title={this.state.ActiveTitle} url={this.state.ActiveUrl} video={this.state.ActiveVideo}/>
            {console.log(this.state.ActiveUrl)}
          </div>
        </div>
      </React.Fragment>
      );
  
  }
}