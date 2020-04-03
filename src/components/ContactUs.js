import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me 
              </p>
       
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linkedin :
                  {resumeData.linkedinId}
                </h4>
                <br></br>
                <h4>Skype :
                  {resumeData.skypeid}
                </h4>
                <br></br>
                <h4>Email :
                  {resumeData.email}
                </h4>
                <br></br>
                <h4>Mobile :
                  {resumeData.phone}
                </h4>
                <br></br>
                <h4>GitHub :
                  {resumeData.website}
                </h4>


              </div>
              
            </aside>
          </div>
        </section>
        );
  }
}


