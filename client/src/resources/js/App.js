import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import '../css/App.css';
//import YouTube Player
import YouTubeModule from '../../components/YouTube/YouTubeStatic';
//Import Continual Updating Clock Time
import Clock from '../../components/Utility/clock';
//Import Spotify Player
import SpotifyPlayer from '../../components/Spotify/Spotify';
//import ChangeLog
import ChangeLog from '../../components/ChangeLog/changeLog';
//Import Ticketing
import TicketCreation from '../../components/Tickets/Ticket';


//Get Site Version
const changeLogIns = new ChangeLog();
let version = changeLogIns.getVersion();

//Declare Styles
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
//Render Site
function App() {
  return (
    <div className="App">
      <section className="App-header">
        <h1 className="App-header">Rokorium Wiki 3</h1>     
        <p className="App-header"><i>Version: {version}</i></p>     
        <Clock/>
      </section>
      <section className="App-body" style={{width: "100%",height:"100%"}}>   
        <Router>
          <nav>
            <ul style={styleNav}>
              <li style={styleLi}>
                <Link to="/YouTube" style={styleLink}>YouTube</Link>
              </li>
              <li style={styleLi}>
                <Link to="/SpotifyPlayer" style={styleLink}>Spotify Player</Link>
              </li>
              <li style={styleLi}>
                <Link to="/ChangeLog/*" style={styleLink}>ChangeLog</Link>
              </li>
              <li style={styleLi}>
                <Link to="/Ticketing/*" style={styleLink}>Request Support</Link>
              </li>
            </ul>

              
              
            
          </nav>
              <Routes>
                <Route path="/YouTube" element={<YouTubeModule/>} />
                <Route path="/SpotifyPlayer" element={<SpotifyPlayer/>} />
                <Route path="/ChangeLog/*" element={<ChangeLog/>} />
                <Route path="/Ticketing/*" element={<TicketCreation/>} />
              </Routes>
        </Router>
      </section>
      <footer className="App-footer">
        <p>Thanks for trying out this app!</p>
      </footer>
    </div>
  );
}

export default App;
//Spinning React Image V
//<img src={logo} className="App-logo" alt="logo" />