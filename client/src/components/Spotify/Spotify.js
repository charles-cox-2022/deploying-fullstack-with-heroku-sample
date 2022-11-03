import React from 'react';
import SpotifyPlaylist from './SpotifyPlayer';


const styleWrapper = {
    
    justifyContent: 'center',
    display: "grid",
    gridTemplateColumns: "3fr 20fr 3fr",
    minHeight: "3fr",
    maxHeight: '1fr',
    width: "100%",
    margin: "0px"
}

const stylePlayer = {
  width: "100%",
  minHeight: "600px",
  paddingLeft: "25px",
  paddingRight: "25px"
}

const stylePlaylist = {
    listStyleType: 'none',
    border: 'solid',
    borderWidth: '3px',
    overflow: 'scroll',
    backgroundColor: 'black',
    maxHeight: '100%',
    padding: '0px',
    width: "100%",
    height: "100%",
    margin: "0px"
};
const stylePlaylistBox = {
    padding: "0px",
    
}
const stylePlaylistItem = {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    textAlign: 'left',
    overflowWrap: 'true',
    marginTop: '0px',
    paddingTop: "5px",
    paddingBottom: "5px"

}
let playlists = [
  {id: 1, Title:'NightCore',Url:'https://open.spotify.com/embed/playlist/1XynPvPdafMsjOHfPo7477?utm_source=generator&theme=0'},
  {id: 2, Title:'Kpop',Url:'https://open.spotify.com/embed/playlist/0MaufKjHBWxOGwhTJrnbNt?utm_source=generator&theme=0'},
  {id: 3, Title:'Rock',Url:'https://open.spotify.com/embed/playlist/6lmuUWC1Q8SAWrSiwa3xLZ?utm_source=generator&theme=0'}
]

export default class SpotifyPlayer extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {
      //<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6lmuUWC1Q8SAWrSiwa3xLZ?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
       ActiveTitle: "Rock", 
       ActiveUrl: `https://open.spotify.com/embed/playlist/6lmuUWC1Q8SAWrSiwa3xLZ?utm_source=generator&theme=0`,
      };
    this.list = [];
  }
  setPlaylist(title,url) {
    
    console.log(`Setting Playlist to ${title}`);
    //player.setIframe(title,url,video);
    this.setState({ActiveTitle: title});
    this.setState({ActiveUrl: url});
  }
  renderButtons() {
    this.list = playlists.map((x) => 
    <li className="navPlaylist" key={x.Title} style={stylePlaylistItem}>
        <button onClick={ () => this.setPlaylist(x.Title,x.Url)}>
            {x.Title}
        </button>
    </li>
    );
    return(
      <React.Fragment>
      <ul className="navPlaylistBox" style={stylePlaylistBox}>
          {this.list}
      </ul>
      </React.Fragment>
  
      );  
    }
  componentDidUpdate()
  {
    //runs when State Updates (AFTER)
  }
  componentDidMount() {
    
  }
   

  render() {

      return(
      <React.Fragment>
        <div style={{width:"100%", height:"100%"}}>
          <h2 style={{margin:"0px"}}>Spotify Player</h2>
          <div style={styleWrapper}>
          <ul className="SpotifyOptions" style={stylePlaylist}>
                {this.renderButtons()}
            </ul>
            <div style={stylePlayer}>
              <SpotifyPlaylist title={this.state.ActiveTitle} url={this.state.ActiveUrl}/>
            </div>
          </div>
        </div>
      </React.Fragment>
      );
  
  }
  
  
}