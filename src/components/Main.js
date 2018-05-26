import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tabs from './Tabs.js';

import TextPane  from './TextPane.js';
import ResourcePane from './ResourcePane.js';
import MediaPane  from './MediaPane.js';
import NetworksPane  from './NetworksPane.js';

import {setSideTop} from '../action-creators/paneActions.js';


export var buttonsT = [
  {label: 'text', value: 'a'},
  {label: 'notes', value: 'b'},
  {label: 'resources', value: 'c'}
]

export var buttonsI = [
  {label: 'images', value: 'a'},
  {label: 'video', value: 'b'},
  {label: 'sound', value: 'c'},
  {label: 'data', value: 'd'},
  {label: 'text', value: 'e'},

]

export var buttonsG = [
  {label: 'geo', value: 'a'},
  {label: 'discourse', value: 'b'},
  {label: 'themes', value: 'c'},
  {label: 'summary', value: 'd'}
]

class MPT extends Component {
//const STImages = function (props) {
  constructor(props) {
   super(props);
   this.state = {};
 }


  componentDidMount(){
   //console.dir(document.getElementById('sidePane').clientWidth)
   var wide = document.getElementById('largePane').clientWidth
   var height = wide*.69 - 37

   this.setState({width: wide, height})
 }

    render(){
    var paneClass = (this.props.pane.fullscreen)? 'scrollPaneLF': 'scrollPaneL' ;
    var buttons = (this.props.pane.main==='text')? buttonsT : (this.props.pane.main==='images')? buttonsI : buttonsG ;

  	return (
    <div>

      <Tabs buttons={buttons} placement='main' />

      <div className={paneClass} >

    {/*TEXTUAL SERIES*/}
      {this.props.pane.mainTab==='a' && this.props.pane.main==='text' &&
        <TextPane output="text" hi={this.state.height} />
      }
      {this.props.pane.mainTab==='b' && this.props.pane.main==='text' &&
        <TextPane output="note" hi={this.state.height} />
      }
      {this.props.pane.mainTab==='c' && this.props.pane.main==='text' &&
        <ResourcePane  hi={this.state.height} />
      }

      {/*IMAGES SERIES*/}
      {this.props.pane.mainTab==='a' && this.props.pane.main==='images' &&
        <MediaPane type="image" hi={this.state.height} />
      }
      {this.props.pane.mainTab==='b' && this.props.pane.main==='images' &&
        <MediaPane type="video" hi={this.state.height} />
      }
      {this.props.pane.mainTab==='c' && this.props.pane.main==='images' &&
        <MediaPane type='sound' hi={this.state.height} />
      }
      {this.props.pane.mainTab==='d' && this.props.pane.main==='images' &&
        <MediaPane type='data' hi={this.state.height} />
      }
      {this.props.pane.mainTab==='e' && this.props.pane.main==='images' &&
        <MediaPane type='text' hi={this.state.height} />
      }

      {/*NETWORKS SERIES*/}
      {this.props.pane.mainTab==='a' && this.props.pane.main==='networks' &&
        <NetworksPane type="geo" hi={this.state.height} scale='generic'/>
      }
      {this.props.pane.mainTab==='b' && this.props.pane.main==='networks' &&
        <NetworksPane type='discourse' hi={this.state.height} scale='generic'/>
      }
      {this.props.pane.mainTab==='c' && this.props.pane.main==='networks' &&
        <NetworksPane type='theme' hi={this.state.height} scale='generic'/>
      }
      {this.props.pane.mainTab==='d' && this.props.pane.main==='networks' &&
        <NetworksPane type='summary' hi={this.state.height} scale='generic' />
      }


      </div>
    </div>
  	)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pane: state.pane,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setSideTop: (type, tab) => {
        dispatch(setSideTop(type, tab));
    },
  }
}

const PaneContents = connect(mapStateToProps, mapDispatchToProps)(MPT);

export default PaneContents;
