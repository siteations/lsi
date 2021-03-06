import React, { Component } from 'react';
import { connect } from 'react-redux';

import PaneContents from './Main.js';


import {setMainPane} from '../action-creators/paneActions.js';

class CoreP extends Component {
	constructor(props) {
    super(props);
    this.state = {};
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(value){
    this.props.setMainPane(this.props.pane.main, value); //master state
  };

  render() {

    console.log('check on pane, functions', this.props, this.state)

  	return (
  	<div className="col-8 paneFixed" id="largePane">
	  		<PaneContents value={this.props.pane.mainTab} action={this.handleChange} />
    </div>
  	)
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    pane: state.pane,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setMainPane: (type, tab) => {
        dispatch(setMainPane(type, tab));
    },

  }
}

const CorePane = connect(mapStateToProps, mapDispatchToProps)(CoreP);

export default CorePane;
