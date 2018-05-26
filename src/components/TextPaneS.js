import React, { Component } from 'react';
import { connect } from 'react-redux';

import EnlargeSide from './EnlargeSide.js';


class SText extends Component {
//const STImages = function (props) {
  constructor(props) {
   super(props);
   this.state = {};
 }


 handleChange(value){
    console.log(this.props.setSideTop, this.props.pane.top, value)
    if (this.props.loc==='top'){
        this.props.setSideTop(this.props.pane.top, value);
    } else if (this.props.loc==='bottom'){
        this.props.setSideBottom(this.props.pane.bottom, value);
    }
  };

  render(){

    var loc = this.props.loc+'Tab';

    return (
    <div style={{height:this.props.hi}}>
      <div>
      {this.props.pane[loc]==='a' &&
        <p>text here</p>
      }
      {this.props.pane[loc]==='b' &&
        <p>text here</p>
      }
      {this.props.pane[loc]==='c' &&
        <p>text here</p>
      }
      </div>
      <div className='plusOverlay'>
        <EnlargeSide loc={this.props.loc} />
      </div>
    </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    pane: state.pane,
    }
}

const STText = connect(mapStateToProps, null)(SText);

export default STText;
