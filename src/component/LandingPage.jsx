import React, { Component } from "react";

class landingPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row jumbotron zeroOpacity middleofpage">
          <div className="col-md-1 col-lg-1 ml-auto d-flex align-items-center mt-4 mt-md-0" />
          <div className="col-md-9 col-lg-9 ml-auto d-flex align-items-center mt-4 mt-md-0">
            <div className="contentwrapper">
              <span className="introduction">Hi, This is</span>
              <br />
              <span className="name">Nitheesh M Ashraf</span>
              <br />
              <span className="profession">
                <span className="brightcolor">a</span>{" "}
                <span className="career">
                  Software <span>Engineer</span>
                </span>{" "}
                <span className="brightcolor">.</span>{" "}
              </span>
              <br />
              <div>
                <span className="aboutme">
                  <p>
                    <span>
                      I'm based in Dubai, UAE. I create web based applications
                      and a whole lot more.
                      <br />
                      <span>Start scrolling to know more about me.</span>
                    </span>{" "}
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-1 col-lg-1 ml-auto d-flex align-items-center mt-4 mt-md-0" />
        </div>
      </React.Fragment>
    );
  }
}

export default landingPage;
