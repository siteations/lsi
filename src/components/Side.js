import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tabs from './Tabs.js';

import {buttonsT, buttonsI, buttonsG } from './Main.js';

import ImagePane  from './MediaPaneS.js';
import TextPane  from './TextPaneS.js';
import NetworksPane  from './NetworksPaneS.js';

import {setSideTop} from '../action-creators/paneActions.js';


class Side extends Component {
//const STImages = function (props) {
  constructor(props) {
   super(props);
   this.state = {
      loc:this.props.loc
   };
 }

    render(){

      var buttons = (this.props.pane[this.state.loc]==='text')? buttonsT : (this.props.pane[this.state.loc]==='images')? buttonsI : buttonsG ;

      console.log(buttons)

    return (
    <div>

      <Tabs buttons={buttons} placement={this.state.loc} />

      <div >
      {this.props.pane[this.state.loc+'Tab']==='a' && this.props.pane[this.state.loc] ==='images' &&
        <ImagePane hi={this.props.hi} loc={this.state.loc} />
      }
      {this.props.pane[this.state.loc+'Tab']==='b' && this.props.pane[this.state.loc] ==='images' &&
        <ImagePane hi={this.props.hi} loc={this.state.loc} />
      }
      {this.props.pane[this.state.loc+'Tab']==='c' && this.props.pane[this.state.loc] ==='images' &&
        <ImagePane hi={this.props.hi} loc={this.state.loc} />
      }
      {this.props.pane[this.state.loc+'Tab']==='d' && this.props.pane[this.state.loc] ==='images' &&
        <ImagePane hi={this.props.hi} loc={this.state.loc} />
      }
      {this.props.pane[this.state.loc+'Tab']==='e' && this.props.pane[this.state.loc] ==='images' &&
        <ImagePane hi={this.props.hi} loc={this.state.loc} />
      }
            {this.props.pane[this.state.loc+'Tab']==='a' && this.props.pane[this.state.loc] ==='networks' &&
      <NetworksPane hi={this.props.hi} loc={this.state.loc} />
      }
      {this.props.pane[this.state.loc+'Tab']==='b' && this.props.pane[this.state.loc] ==='networks' &&
        <NetworksPane hi={this.props.hi} loc={this.state.loc} />
      }
      {this.props.pane[this.state.loc+'Tab']==='c' && this.props.pane[this.state.loc] ==='networks' &&
        <NetworksPane hi={this.props.hi} loc={this.state.loc} />
      }
      {this.props.pane[this.state.loc+'Tab']==='d' && this.props.pane[this.state.loc] ==='networks' &&
        <NetworksPane hi={this.props.hi} loc={this.state.loc} />
      }
      {this.props.pane[this.state.loc+'Tab']==='e' && this.props.pane[this.state.loc] ==='networks' &&
        <NetworksPane hi={this.props.hi} loc={this.state.loc} />
      }
      {this.props.pane[this.state.loc+'Tab']==='a' && this.props.pane[this.state.loc] ==='text' &&
        <TextPane hi={this.props.hi} loc={this.state.loc} />
      }
      {this.props.pane[this.state.loc+'Tab']==='b' && this.props.pane[this.state.loc] ==='text' &&
        <TextPane hi={this.props.hi} loc={this.state.loc} />
      }
      {this.props.pane[this.state.loc+'Tab']==='c' && this.props.pane[this.state.loc] ==='text' &&
        <TextPane hi={this.props.hi} loc={this.state.loc} />
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

const SImages = connect(mapStateToProps, null)(Side);

export default SImages;

