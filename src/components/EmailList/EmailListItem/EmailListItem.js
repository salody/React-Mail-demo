import React, { Component } from 'react';
require('./item.scss');
class EmailListItem extends Component {
    constructor(props) {
        super(props);
        this.onEmailClicked = this.onEmailClicked.bind(this);
    }
    onEmailClicked() {
        var email = this.props.email;
        email.read = 'true';
        // 向父元素传递参数id
        this.props.onEmailItemClicked(email.id);
    }
    render () {
        var email = this.props.email;

        return (
            <div className="email-item" onClick={this.onEmailClicked}>
                <div className="subject">{email.subject}</div>
                <div className={email.read === 'true' ? '' : 'unread-dot'}></div>
                <div className="details">
                    <span className="email-from">{email.from}</span>
                    <span className="time">{email.time.split(' ')[0]}</span>
                </div>
            </div>
        );
    }
}


export default EmailListItem;


