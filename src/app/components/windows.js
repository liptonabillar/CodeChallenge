import React, {PureComponent} from 'react'
import Fullscreen from "react-full-screen"
import Tabs from './tabs'

class Windows extends PureComponent {
  constructor(props) {
    super(props)
    
    this.state = { window: "", isFullscreen: false,
      imageSrc:"https://www.seenbysolomon.com/wp-content/uploads/CG1-1080x1080.jpg", sliderIndex: 0 }
  }

  sliderSelect(index=0) {
    let src = ""
    switch(index) {
      case 0:
      src="https://www.seenbysolomon.com/wp-content/uploads/CG1-1080x1080.jpg"
      break;
      case 1:
      src="https://news.nationalgeographic.com/content/dam/news/2017/06/02/map-post-sf-shipwrecks/01-map-post-san-francisco-shipwreck.adapt.885.1.jpg"
      break;
      case 2:
      src="https://www.isro.gov.in/sites/default/files/ISRO%20to%20map%20and%20provide%20management%20plans%20for%20%20heritage%20sites%20and%20monuments%20of%20National%20importance/image1.jpg"
      break;
      case 3:
      src="https://burritojustice.files.wordpress.com/2011/10/1938-aerial-dolores-park.jpg?w=768&h=1342"
      break;
      case 4:
      src="https://burritojustice.files.wordpress.com/2011/10/1938-aerial-la-lengua-crop.jpg?w=768&h=599"
      break;
      case 5:
      src="https://burritojustice.files.wordpress.com/2011/10/1938-aerial-sears-st-lukes1.jpg"
      break;
    }

    this.setState({ imageSrc: src, sliderIndex: index })
  }

  render() {
    const { window, isFullscreen, imageSrc, sliderIndex } = this.state
    return (
      <div className="window-container">
        <div className="windowA">
          <Fullscreen
            enabled={window==="windowA" && isFullscreen}
            onChange={isFull => this.setState({ isFullscreen: isFull })}
          >
            <i
              onClick={() => this.setState({ window: "windowA", isFullscreen: !isFullscreen })}
              className="material-icons vertical-align-middle fullscreen-button">
              { !isFullscreen ? "fullscreen" : "fullscreen_exit"}
            </i>
            <div className="window-content">
              {
                isFullscreen &&
                <i
                  onClick={() => this.setState({ window: "windowA", isFullscreen: !isFullscreen })}
                  className="material-icons vertical-align-middle fullscreen-button">
                  { !isFullscreen ? "fullscreen" : "fullscreen_exit"}
                </i>
              }
              <img src={imageSrc} className="windowA-image"/>
              {
                !isFullscreen &&
                <Tabs sliderSelect = {this.sliderSelect.bind(this)} sliderIndex={sliderIndex}/>
              }
            </div>
          </Fullscreen>
        </div>

        <div className="windowB">
          <Fullscreen
            enabled={window==="windowB" && isFullscreen}
            onChange={isFull => this.setState({ isFullscreen: isFull })}
          >
            <span className="window-title">
              <h3>Window B</h3>
              <i
                onClick={() => this.setState({ window: "windowB", isFullscreen: !isFullscreen })}
                className="material-icons vertical-align-middle fullscreen-button">
                { !isFullscreen ? "fullscreen" : "fullscreen_exit"}
              </i>
            </span>
            <div className="window-content">
              {
                isFullscreen &&
                <i
                  onClick={() => this.setState({ window: "windowB", isFullscreen: !isFullscreen })}
                  className="material-icons vertical-align-middle fullscreen-button">
                  { !isFullscreen ? "fullscreen" : "fullscreen_exit"}
                </i>
              }
            </div>
          </Fullscreen>
        </div>
        
        <div className="windowC">
          <Fullscreen
            enabled={window==="windowC" && isFullscreen}
            onChange={isFull => this.setState({ isFullscreen: isFull })}
          >
            <span className="window-title">
              <h3>Window C</h3>
              <i
                onClick={() => this.setState({ window: "windowC", isFullscreen: !isFullscreen })}
                className="material-icons vertical-align-middle fullscreen-button">
                { !isFullscreen ? "fullscreen" : "fullscreen_exit"}
              </i>
            </span>
            <div className="window-content">
              {
                isFullscreen &&
                <i
                  onClick={() => this.setState({ window: "windowC", isFullscreen: !isFullscreen })}
                  className="material-icons vertical-align-middle fullscreen-button">
                  { !isFullscreen ? "fullscreen" : "fullscreen_exit"}
                </i>
              }
            </div>
          </Fullscreen>
        </div>
      </div>
    )
  }
}

export default Windows