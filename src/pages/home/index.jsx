import React from "react";
import "./styles.less";

import Header from "../../components/Header";
import Preloader from "../../components/Preloader";
import LargeSlider from "../../components/LargeSlider";
import ArrowsNav from "../../components/ArrowsNav";
import MidBreaker from "../../components/MidBreaker";
import Services from "../../components/Services";
import Quote from "../../components/Quote";
import Team from "../../components/Team";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import Helmet from "react-helmet";

class Home extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){

    var $localScroll = $('.localscroll');
    if($localScroll.length){
      $localScroll.localScroll({
        lazy: true,
        lock: true,
        hash: false
      });
    }
  }

  getArrowNav(section){
    var data = [];
    switch(section){
      case 0:
        data = [
          { link : "#home", color : "color1"},
          { link : "#services", color : "color4"}
        ];
        break;
      case 1:
        data = [
          { link : "#home", color : "color3"},
          { link : "#paralaxSlice2", color : "color1"}
        ];
        break;
      case 2:
        data = [
          { link : "#news", color : "color4"},
          { link : "#team", color : "color1"}
        ];
        break;
      case 3:
        data = [
          { link : "#services", color : "color2"},
          { link : "#contactSlice", color : "color1"}
        ];
        break;
      case 4:
        data = [
          { link : "#home", color : "color4"}
        ];
        break;
    }
    return data;
  }

  getBreakerContent(section){
    var data = {};
    switch(section){
      case 0:
        data = {
          id : "paralaxSlice1", icon : "icon-megaphone", text : "Technology to grow your business.", color :"color4"
        };
        break;
      case 1:
        data = {
          id : "paralaxSlice17", icon : "icon-camera", text : "Software that connects with your customers"
        };
        break;
      case 2:
        data = {
          id : "paralaxSlice20", icon : "icon-mail", text : "Keep in touch with us"
        };
        break;
    }
    return data;
  }

  render(){
    return <div>
      <Preloader>
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "home"}}>
        </Header>
        <LargeSlider ref={(slider) => { this._slider = slider; }}>
        </LargeSlider>
        <Services>
        </Services>
        <ArrowsNav data={this.getArrowNav(2)}>
        </ArrowsNav>
        <MidBreaker data={this.getBreakerContent(1)}>
        </MidBreaker>
        <Quote data={{ color: "color3" }}>
        </Quote>
        <Team>
        </Team>
        <ArrowsNav data={this.getArrowNav(3)}>
        </ArrowsNav>
        <MidBreaker data={this.getBreakerContent(2)}>
        </MidBreaker>
        <ContactUs>
        </ContactUs>
        <ArrowsNav data={this.getArrowNav(4)}>
        </ArrowsNav>
        <Footer>
        </Footer>
      </div>
    </div>
  }
}

export default Home;
