import React from "react";

import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Navigation from "./../components/Navigation";
import Footer from "./../components/Footer";

const helmetContext = {};


export class App extends React.Component {

  constructor(props) {
    super(props);


    let today = new Date(),
      month = today.getMonth() + 1;

    this.state = {
      title: "Simon Weizman",
      isWarm: ![12, 1, 2].includes(month),
      headerLinks: [
        { 
          title: "Home - Simon Weizman",
          path: "/"
        },
        { title: "About", path: "/about"},
        { title: "Contact", path: "/contact"},
      ],
      home: {
        title: "Simon Weizman",
        description: "Computer Science Student at University of Central Florida | Expected to Graduate May 2024 | FIRST Alumni | Completed Google Foobar"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Contact Me"
      }
    };
  }
  
  render() {
    return (
      <HelmetProvider context={helmetContext}>
        <Router>

          <Container className="p-0" fluid={true}>

            <Navigation
              isWarm={this.state.isWarm}
              home={this.state.home}
            />
        
            <Footer />

          </Container>
        </Router>
      </HelmetProvider>
    );
  }
}

export default App;
