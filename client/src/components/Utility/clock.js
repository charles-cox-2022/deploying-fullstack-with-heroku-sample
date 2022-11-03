import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);  
    this.state = { date: new Date() };  
  }
  render() {
    
    return(
    <div>
      {
      this.state.date.toLocaleTimeString()
      }
      </div>
    );
  }
  componentDidMount() {
    this.startInterval(); 
  }
  
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  startInterval() {
    let delay = 1000;
    
    this.intervalID = setInterval(() => {
      this.setState({ date:new Date() });

    }, delay);

  }
}

