import React, { Component } from 'react';

require('ASSET/scss/font.scss');
require('./sidebar.scss');
class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.BarClicked = this.BarClicked.bind(this);
    }
    BarClicked (e) {
        var target = e.target;
        // 这个value是父组件section要取得值
        var value = target.className;
        this.props.onSidebarClicked(value);
    }
    render () {
        var emails = this.props.emails;
        var unreadCount = 0;
        var deletedCount = 0;
        for (const email of emails) {
            if (email.tag === 'inbox' && email.read !== 'true') {
                unreadCount++;
            }
        }
        for (const email of emails) {
            if (email.tag === 'deleted') {
                deletedCount++;
            }
        }
        return (
            <div className="sidebar-container">
               <div className="sidebar-compose">
                   <a href="#" className="compose">
                       写邮件
                       <span className="icon-pencil"></span>
                   </a>
               </div>
                <ul className="sidebar-box" onClick={this.BarClicked}>
                    <li><a href="#" className="inbox">
                        <span className="icon icon-drawer2"></span>收件箱
                        <span className="item-count">{unreadCount}</span>
                    </a></li>
                    <li><a href="#" className="sent">
                        <span className="icon icon-email"></span>已发送
                        <span className="item-count">0</span>
                    </a></li>
                    <li><a href="#" className="drafts">
                        <span className="icon icon-drafts"></span>草稿箱
                        <span className="item-count">0</span>
                    </a></li>
                    <li><a href="#" className="deleted">
                        <span className="icon icon-bin"></span>回收站
                        <span className="item-count">{deletedCount}</span>
                    </a></li>
                </ul>
            </div>
        );
    }
}


export default Sidebar;


