import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Layout.css'
import Toolbar from '../../components/Navigations/Toolbar/Toolbar';

class Layout extends Component {
  render () {
    return (
      <div>
        <Toolbar
          isAuthenticated={this.props.isAuthenticated}
        />
        <div>Sidebar</div>
        <main className="Content">
          {this.props.children}
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.tokenId !== null
  }
}

export default connect(mapStateToProps)(Layout);