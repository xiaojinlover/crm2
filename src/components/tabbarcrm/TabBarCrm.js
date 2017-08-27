import { TabBar, Icon } from 'antd-mobile';
import './TabBarCrm.less';
class TabBarCrm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab'     
    };
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"        
      >
        <TabBar.Item
          title="首页"
          key="首页"
          icon={<div style={{
            width: 28,
            height: 28,
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  28px 28px no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: 28,
            height: 28,
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  28px 28px no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'blueTab'}        
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}
          data-seed="logId"
        >
        </TabBar.Item>        
      </TabBar>
    );
  }
}

export default TabBarCrm;