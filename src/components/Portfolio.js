import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <span style={{flexDirection:"row" }}>
                  <a style={{margin: "10px", display: "flex"}} id="viewcode6" href={item.link} target="_blank"><i class="fas fa-link"></i></a>
                  <a style={{margin: "10px", display: "flex"}}  id="viewcode6" href={item.git} target="_blank"><i class="fab fa-github"></i></a>
                  </span>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}