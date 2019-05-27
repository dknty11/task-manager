import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../../store/actions/index'

class Tasks extends Component {
  componentDidMount() {
    this.props.onFetchingTasks()
  }

  render() {
    return (

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchingTasks: () => dispatch()
  }
}

export default connect(null, mapDispatchToProps)(Tasks);