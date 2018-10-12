import React, { PureComponent } from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Slider from "./slider"

class TabsContainer extends PureComponent {
  constructor(props){
    super(props)

    this.state = { toggled: false }
  }

  render() {
    const { toggled } = this.state
    const { sliderSelect, sliderIndex } = this.props
    return (
      <Tabs className={`tabs-container${toggled ? "--toggled" : ""}`}>
        <TabList>
          <Tab
            onClick={() => this.setState({ toggled: !toggled })}
            className="tabs-title">
              Tab 1
              <i className="material-icons vertical-align-middle__toggle">
                {!toggled ? "expand_less" : "expand_more"}
              </i>
            </Tab>
        </TabList>
        <TabPanel className="tab-content">
          <Slider sliderSelect={sliderSelect} sliderIndex={sliderIndex}/>
        </TabPanel>
      </Tabs>
    )
  }
}

export default TabsContainer