import React , {Component} from 'react'
import {TabBar}  from 'antd-mobile'
import {withRouter} from 'react-router-dom'

class Nva extends Component {

   constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'home',
      hidden: false,
      fullScreen: true,
      top:window.screen.height-50+'px'
    };
  }


  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '50px', width: '100%', top: this.state.top } : { height: 400 }}>
        <TabBar
        style={{position: 'fixed',boxShadow: '2px 2px 3px #888888'}}
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={
              {uri: require('../../assets/icon/home1.png')}
            }
            selectedIcon={
              {uri: require('../../assets/icon/homeS.png')}
            }
            selected={this.state.selectedTab === 'home'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
              this.props.history.replace('/home') 
            }}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
                {uri: require('../../assets/icon/flash.png')}
            }
            selectedIcon={
                {uri: require('../../assets/icon/flashS.png')}
            }
            title="动态"
            key="dongtai"
            badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
              this.props.history.replace('/trends')

            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
                {uri: require('../../assets/icon/personal.png')}
            }
            selectedIcon={
                {uri: require('../../assets/icon/personalS.png')}
            }
            title="我的"
            key="personal"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
              this.props.history.replace('/personal')
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default withRouter(Nva) ;