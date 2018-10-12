import React, { Component } from 'react'
import { render } from "react-dom";
import NavBar from './components/navbar'
import Modal from 'react-modal-resizable-draggable'
import Windows from './components/windows'
import { Button } from 'react-md'

class App extends Component {
  constructor() {
    super();
    this.state = {
      toggled: false,
      modalOpen: false
    }
  }

  hamburgerClicked () {
    this.setState({ toggled: !this.state.toggled })
  }

  settingsClicked (e) {
    e.stopPropagation();
    this.setState({ modalOpen: !this.state.modalOpen })
  }

  render() {
    const { toggled, modalOpen } = this.state
    return(
      <div>
        <div 
          id="wrapper"
          className={toggled ? "toggled" : ""}
        >
          <NavBar
            hamburgerClicked={this.hamburgerClicked.bind(this)}
            settingsClicked={this.settingsClicked.bind(this)}
          />
          <Windows/>
        </div>
        <Modal
          isOpen={modalOpen}
          initWidth={300} 
          initHeight={240}
          disableResize
        >
          <Button flat onClick={this.settingsClicked.bind(this)} className="modal_title">
            Settings
            <i className="material-icons vertical-align-middle modal_close_button">close</i>
          </Button>
          <form className="modal_form">
          <div className="form-group">
            <label htmlFor="settings1">Settings 1</label>
            <input type="text" className="form-control" id="settings1" placeholder="Settings 1"/>
          </div>
          <div className="form-group">
            <label htmlFor="settings2">Settings 2</label>
            <input type="text" className="form-control" id="settings2" placeholder="Settings 2"/>
          </div>
          </form>
        </Modal>
      </div>
    )
  }
}

render(
  <App/>,
  document.getElementById('root')
)