import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      name: null
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">Content from Nested Service</h1>
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={this.state.activeTab === '1' ? 'active' : ''}
                onClick={() => { this.toggle('1'); }}
              >
                Nested-1 Tab
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={this.state.activeTab === '2' ? 'active' : ''}
                onClick={() => { this.toggle('2'); }}
              >
                Nested-2 Tab
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <div style={{padding: '20px'}}>
                    <span>Hello from Nested Service</span>
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <div style={{padding: '20px'}}>
                    <span>Hello from Nested Service</span>
                  </div>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}

export default App;
