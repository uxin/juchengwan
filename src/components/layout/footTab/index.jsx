import React from 'react';  //Fragment 虚拟节点
import { TabBar } from 'antd-mobile';
import { FootTab, IndexIcon, IndexTxt, TheaterIcon, TheaterTxt, TicketFolderIcon, TicketFolderTxt, MyIcon, MyTxt } from "@/components/layout/footTab/styled"
import {Link } from "react-router-dom";
export default class TabBarExample extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'index',
            hidden: false,
            fullScreen: false,
        };
    }

    render() {
        return (
            <FootTab>
                <TabBar unselectedTintColor="#232323" tintColor="#232323" barTintColor="white" hidden={false} >
                    <TabBar.Item icon={<Link to="/index"><IndexIcon /></Link>} selectedIcon={<IndexTxt />} title="" key="首页" selected={this.state.selectedTab === 'index'} onPress={() => {
                        this.setState({
                            selectedTab: 'index',
                        });

                    }}>
                    </TabBar.Item>
                    <TabBar.Item icon={<Link to="/theater"><TheaterIcon /></Link>} selectedIcon={<TheaterTxt />} title="剧院" key="剧院" selected={this.state.selectedTab === 'theater'} onPress={() => {
                        this.setState({
                            selectedTab: 'theater',
                        });
                    }}>
                    </TabBar.Item>
                    <TabBar.Item icon={<Link to="/ticketFolder"><TicketFolderIcon /></Link>} selectedIcon={<TicketFolderTxt />} title="票价" key="票价" selected={this.state.selectedTab === 'ticketFolder'} onPress={() => {
                        this.setState({
                            selectedTab: 'ticketFolder',
                        });
                    }}>
                    </TabBar.Item>
                    <TabBar.Item icon={<Link to="/my/login"><MyIcon /></Link>} selectedIcon={<MyTxt />} title="我的" key="我的" selected={this.state.selectedTab === 'my'} onPress={() => {
                        this.setState({
                            selectedTab: 'my',
                        });
                    }}>
                    </TabBar.Item>
                </TabBar>
            </FootTab>
        );
    }
    test(){

        //
    }
}