import ChangeLogViewer from './changeLogViewer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import React from 'react';

const styleLink = {
    color: 'white'
}
const styleNav = {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center'
  
  }
  const styleLi = {
    paddingLeft: "5px",
    paddingRight: "5px",
    color: "white"
  }

const styleChangeItems = {
    textAlign: 'left',
    overflowWrap: 'true',
    marginTop: '0px'

}
let changeLogItems = [
    {
        Version: "1.0",
        Changes: [
            "I-React Routers - YouTube Playlist App (Static), Spotify Music App (Static), Change Log App (Static), Home Page",
            "Change Log - View All, In Progress, and Old Updates.",
        ]
    },
    {
        Version: "0.05",
        Changes: [
          "Need to Add Light Mode and Dark Mode",
          "Need to Add Profile Page with Options",
          "Need to Add Static Login (Unsecured)",
        ]
    },
    {
        Version: "0.04",
        Changes: [
            "Need to Add YouTube Player Border",
            "Need to Add React Testing",
            "Need to Add JS Testing",
            "Need to Add Redux for Each Individual App",
            "Need to Add Redux for Future Profile Data",
            "Cleaned Code",
            "Added 'Current Playlist' Message above YouTube Player Iframe",
            "Added Redux Support for YouTube Player",
            "Added Cached Playlist Choice and Playlists when moving between apps.",
            "Updated Formatting on YouTube Page",
            "Static List of Individual Songs. Title, Band, ID, Thumbnail",
            "Spotify Page with Static Playlists",
            "CSS to Router Links.",
            "Nexted Routers in Change Log",
            "Format Links (Can't Read Them)",
            "Added Form to Add a playlist, playlist added is not persistent.",
            "I-Format ChangeLogViewer (Ugly)"
        ]
    },
    {
        Version: "0.03",
        Changes: [
            "React Routers",
            "Landing Page for YouTube",
            "Add in YouTube Playlist App Functionality with a Static List",
            "Seperate Player from Playlist Selector.",
            "Bind Player Refresh to Button Clicks"
        ]
    },
    {
        Version: "0.02",
        Changes: [
             "Added React Router Dom Dependency",
             "Added Clock.js Component",
             "Added changeLog.js Component",
             "Formatted Landing Page",
             "Formatted Change Log Component",
             "Removed React Floating Icon"
            ]
    },
    {
        Version: "0.01",
        Changes: [
            "Initial Commit"
        ]
    }
];

export default class ChangeLog extends React.Component {
  constructor(props) {
    super(props);  
    this.state = { 
        Version: "0.0310",
        NextVersion: "0.04" 
    };
    this.list = [];  
    
  }
  getVersion() {
    return(this.state.Version);
  }
  //Takes the Changes and Generates a paragraph where each is on their own line.
  generateLogItems(Changes,Ver){
    let items = Changes.map((e) => 
        <span>+ {e}<br/></span>    
    );
    return(items);
  }
  //Takes Each Version and creates a list object
  generateLog() {
    this.list = changeLogItems.map((x) =>
    <li className="ChangeVersion" key={x.Version}>
        <h4 style={{textAlign:'left', marginBottom:'0px'}}>--- {x.Version} ---</h4>
        <p className="ChangeItems" style={styleChangeItems}>
            {this.generateLogItems(x.Changes,x.Version)}
        </p>
    </li>
    )
    return(this.list);
  }
  getToDoList() {
    console.log("getting to do list. . .")
    let result;
    changeLogItems.forEach(e => {
        if (e.Version === this.state.NextVersion) {
            console.log("Found To Do List. . .");
            result = [e];
            console.log(e);
        }
    });
    return(result)
  }
 
  
  getOldList() {
    console.log("getting old Versions. . .")
    let result = [];
    let curVer = parseFloat(this.state.Version);
    changeLogItems.forEach(e => {
        let ver = parseFloat(e.Version);
        
        if (ver < curVer) {
            console.log("Found Old Version. . .");
            result.push(e);
            console.log(e);
        } else {
            console.log(`${ver} !< ${curVer}`);
        }
    });
    return(result)
  }
  render() {
    return(
    <React.Fragment>
          <div>
            <ul style={styleNav}>
              <li style={styleLi}>
                <Link to="/ChangeLog/ToDoList" style={styleLink}>In Progress</Link>
              </li>
              <li style={styleLi}>
                <Link to="/ChangeLog/PastVersions" style={styleLink}>Old Updates</Link>
              </li>
            </ul>
              
            </div>
            <section>
                <Routes>
                    <Route path="/*" element={<ChangeLogViewer Title={"All Updates"} Changes={changeLogItems}/>} />
                    <Route path="/ToDoList" element={<ChangeLogViewer Title={"In Progress"} Changes={this.getToDoList()}/>}/>
                    <Route path="/PastVersions" element={<ChangeLogViewer Title={"Old Updates"} Changes={this.getOldList()}/>} />
                </Routes>
            </section>
    </React.Fragment>
    );
  }
  
  
}
