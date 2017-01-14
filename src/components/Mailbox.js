import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import EmailList from './EmailList/EmailList';
import EmailDetails from './EmailDetails/EmailDetails';
require('./mailbox.scss');

class Mailbox extends Component {
    constructor(props) {
        super(props);

        // 给每一封邮件分配一个独立的ID
        const emails = this.props.emails;
        let id = 0;
        for (const email of emails) {
            email.id = id++;
        }

        this.state = {
            selectedEmailId: 0,
            currentSection: 'inbox',
            emails
        };
        this.openEmail = this.openEmail.bind(this);
        this.setSidebarSection = this.setSidebarSection.bind(this);
        this.deleteEmail = this.deleteEmail.bind(this);
    }
    // 这个函数在子元素state更新时被调用，用来传递id这个参数。
    openEmail(id) {
        const emails = this.state.emails;
        const index = emails.findIndex(x => x.id === id);
        emails[index].read = 'true';
        this.setState({
            selectedEmailId: id,
            emails
        });
    }
    setSidebarSection(section) {
        let selectedEmailId = this.state.selectedEmailId;
        if (section !== this.state.currentSection) {
            selectedEmailId = '';
        }
        this.setState({
            currentSection: section,
            selectedEmailId
        });
    }
    deleteEmail(id) {
        // 将邮件标记为deleted
        const emails = this.state.emails;
        const index = emails.findIndex(x => x.id === id);
        emails[index].tag = 'deleted';
        // 选择list中的下一封邮件
        let selectedEmailId = '';
        for (const email of emails) {
            if (email.tag === this.state.currentSection) {
                selectedEmailId = email.id;
                break;
            }
        }
        this.setState({
            emails,
            selectedEmailId

        });
    }
    render () {
        // const currentEmail = this.state.emails.find(x => x.id === this.state.selectedEmailId);
        return (
            <div className="mailbox">
                <Sidebar
                    emails={this.props.emails}
                    onSidebarClicked = {this.setSidebarSection}
                />
                <div className="mail-container">
                    <EmailList 
                        emails={this.state.emails.filter(x => x.tag === this.state.currentSection)}
                        onListClicked = {this.openEmail}
                    />
                    <EmailDetails
                        email={this.state.emails.find(x => x.id === this.state.selectedEmailId)}
                        onEmailDelete = {this.deleteEmail}
                    />
                </div>
            </div>
        );
    }
}


export default Mailbox;

