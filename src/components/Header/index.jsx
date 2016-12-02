import "./styles.less";
import React from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  componentDidMount : function(){
    var $navMain = $("#navbarCollapse");
    $navMain.on("click", "a", null, function () {
      $navMain.collapse('hide');
    });
  },
  getLinkClass : function(page){
    return page === this.props.data.page ? "active" : "";
  },
  render : function (){
    let prefix = this.props.data.page === "home" ? "" : "/";
    return <nav role="navigation" className="navbar navbar-default navbar-fixed-top ">
      <div className="container">
        <div className="navbar-header">
          <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href={`${prefix}#`} className="navbar-brand">
            <img className="img-responsive" src="http://cdn.ytadvisors.com/images/main-logo.png" alt="YT Advisors" width="130" />
          </a>
        </div>
        <div id="navbarCollapse" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className={this.getLinkClass("home")}><a href={`${prefix}#home`}>Home</a> </li>
            <li className={this.getLinkClass("services")}><a href={`${prefix}#services`}>Services</a> </li>
            <li className={this.getLinkClass("team")}><a href={`${prefix}#team`}>Team</a> </li>
            <li className={this.getLinkClass("contact")}><a href={`${prefix}#contactSlice`}>Contact</a> </li>
          </ul>
        </div>
      </div>
    </nav>;
  }
});