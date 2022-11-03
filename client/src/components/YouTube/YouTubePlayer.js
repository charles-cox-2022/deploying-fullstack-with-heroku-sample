import React from 'react';

let Iframe = <iframe 
          width={"1200px"} 
          height={"900px"} 
          src="https://www.youtube.com/embed/LiaYDPRedWQ?list=PLOAnpT8sPGhkADF2H_747gttyMu3GBeeK"
          title= "Active - List"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen></iframe>;

export default class YouTubePlayer extends React.Component {
    constructor(props) {
      super(props);  
      this.state = {
         ActiveTitle: "Active - List", 
         ActiveUrl: `https://www.youtube.com/embed/LiaYDPRedWQ?list=PLOAnpT8sPGhkADF2H_747gttyMu3GBeeK`,
         ActiveVideo: "LiaYDPRedWQ",
          
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
      id={"Iframe"} 
      width={"100%"} 
      height={"100%"} 
      src={this.props.url} 
      title= {this.props.title} 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
      >
      </iframe>; 
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