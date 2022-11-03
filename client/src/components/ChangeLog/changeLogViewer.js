import React from 'react';

const styleChangeLog = {
    listStyleType: 'none',
    padding: '10px',
    border: 'solid',
    borderWidth: '10px',
    overflow: 'scroll',
    backgroundColor: 'black',
    maxHeight: '600px',
    width: '90%'
};
const styleWrapper = {
    display: 'flex',
    justifyContent: 'center',
    
    maxHeight: '600px',
    width: "100%"
}
const styleChangeItems = {
    textAlign: 'left',
    overflowWrap: 'true',
    marginTop: '0px'

}

export default class ChangeLogViewer extends React.Component {
    constructor(props) {
      super(props);  
      this.list = [];  
      
    }
    
    //Takes the Changes and Generates a paragraph where each is on their own line.
    generateLogItems(Changes){
      let items = Changes.map((e) => 
          <span>+ {e}<br/></span>    
      );
      return(items);
    }
    //Takes Each Version and creates a list object
    generateLog(changeLogItems) {
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
    
    
    render() {
      console.log("passed to render function of ChangeLogViewer.js");
        return(
      <React.Fragment>
        
        <div style={{width:"100%"}}>
          <h2 style={{margin:"0px"}}>{this.props.Title}</h2>
          <div style={styleWrapper}>
          <ul className="ChangeLog" style={styleChangeLog}>
              {this.generateLog(this.props.Changes)}
          </ul>
          </div>
        </div>
      </React.Fragment>
      );
    }
    
    
  }