//<a href="mailto:`{email}`?subject={subject}&body={body}">Click to Send an Email</a>

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import React from 'react';




export default class TicketCreation extends React.Component {
  constructor(props) {
    super(props);  
    this.state = { 
        TicketType: "RT"
         
    };
    this.list = [];  
    
  }
   
  
  
  render() {
    return(
    <React.Fragment>
            <section>
                <a href="mailto:Charles.cox@rokorium.com?subject='This is a Test Email'&body='This is a Test of the Not so Emergency Ticket Creation System!'">Click to Send an Email</a>
            </section>
    </React.Fragment>
    );
  }
  
  
}
