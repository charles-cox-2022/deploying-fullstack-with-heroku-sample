import React from 'react';

let Iframe = <iframe 
          width={"1200px"} 
          height={"900px"} 
          src="https://www.youtube.com/embed/LiaYDPRedWQ?list=PLOAnpT8sPGhkADF2H_747gttyMu3GBeeK"
          title= "Active - List"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen></iframe>;

export default class SpotifyPlaylist extends React.Component {
    constructor(props) {
      super(props);  
      this.state = {
        //<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6lmuUWC1Q8SAWrSiwa3xLZ?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
         ActiveTitle: "Rock", 
         ActiveUrl: `https://open.spotify.com/embed/playlist/6lmuUWC1Q8SAWrSiwa3xLZ?utm_source=generator&theme=0`,
          
        };
      
      
      
    }
    componentDidMount() {
        console.log("Component has mounted!")
      }
    componentDidUpdate() {
      console.log("Iframe Updating")
    }
    render() {
      //this.setIframe(this.props.title,this.props.url,this.props.video); 
      Iframe = <iframe
      title={this.props.title}
      src={this.props.url} 
      width={"1200px"} 
      height={"600px"} 
      frameBorder={"0"} 
      allowFullScreen={""} 
      allow={"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"} 
      loading={"lazy"}></iframe>; 
      return(
        <React.Fragment>
            <div style={{
                height: "100%",
                width: "100%", 
                backgroundColor: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
                }}>
                {Iframe}
            </div>
        </React.Fragment>
      );
  }    
  }