import React, { Component } from 'react';
import { connect } from 'react-redux';

import PaneContents from './Main.js';

import {setMainPane, setFullScreen} from '../action-creators/paneActions.js';

class CoreP extends Component {
	constructor(props) {
    super(props);
    this.state = {
      update: false
    };
    this.closeFull=this.closeFull.bind(this);
  }

  closeFull(){
    this.setState({update:!this.state.update});
  }

  render() {

  	return (
  	<div className="col paneFull" id="largePane" >
	  		<PaneContents action={this.closeFull} />
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
    setFullScreen: (bool)=>{
      dispatch(setFullScreen(bool));
    }

  }
}

const CorePane = connect(mapStateToProps, mapDispatchToProps)(CoreP);

export default CorePane;
