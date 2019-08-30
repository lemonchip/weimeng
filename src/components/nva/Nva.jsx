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
    };
  }


  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
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
              this.props.history.replace('/main/home') 
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
              this.props.history.replace('/main/trends')

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
              this.props.history.replace('/main/personal')
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default withRouter(Nva) ;