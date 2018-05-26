import React, { Component } from 'react';
import { connect } from 'react-redux';

import EnlargeSide from './EnlargeSide.js';

import {setSideTop} from '../action-creators/paneActions.js';

var buttons = [
  {label: 'images', value: 'a'},
  {label: 'sites', value: 'b'},
  {label: 'science', value: 'c'},
  {label: 'social', value: 'd'},
  {label: 'senses', value: 'e'},

]


class Themes extends Component {
//const STImages = function (props) {
  constructor(props) {
   super(props);
   this.state = {};
 }



    render(){
    return (
    <div style={{height:this.props.hi}}>
      themes here: {this.props.nav.siteName}, {this.props.theme}
      <EnlargeSide actions={this.props.actions}/>
    </div>
    )
  }
}

const mapStateToProps = (state, ownProps)=>{
  return {
    pane: state.pane,
    nav: state.nav
    }
};

const mapDispatchToProps = (dispatch, ownProps)=>{
  return {
    setSideTop: (type, tab) => {
        dispatch(setSideTop(type, tab));
    }
  }
}

const ThemePane = connect(mapStateToProps, mapDispatchToProps)(Themes);

export default ThemePane;
