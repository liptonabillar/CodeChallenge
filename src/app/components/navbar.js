import React, { PureComponent } from 'react'

class NavBar extends PureComponent {
  render() {
    const { hamburgerClicked, settingsClicked } = this.props
    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li>
            <a href="#">
              <i className="material-icons vertical-align-middle padding-bottom-3">account_circle</i>
              <span className="padding-left-10">Users</span>
            </a>
          </li>
          <li onClick={settingsClicked}>
          <a href="#">
              <i className="material-icons vertical-align-middle padding-bottom-3">settings</i>
              <span className="padding-left-10">Settings</span>
            </a>
          </li>
        </ul>
        <span className="hamburger-menu" onClick = { hamburgerClicked }><i className="large material-icons">menu</i></span>
    </div>
    )
  }
}

export default NavBar