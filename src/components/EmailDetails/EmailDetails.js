import React, { Component } from 'react';

require('./details.scss');
class EmailDetails extends Component {
    constructor(props) {
        super(props);
        this.onDeleteEmail = this.onDeleteEmail.bind(this);
    }
    onDeleteEmail (id) {
        // debugger;
        var email = this.props.email;
        this.props.onEmailDelete(email.id);

    }
    render () {
        const email = this.props.email;
        if (!email) {
            return (
                <div className="email-content empty"></div>
            );
        }
        return (
            <div className="email-content">
                <div className="delete" onClick = {this.onDeleteEmail}>
                    <span className="icon-bin"></span>
                </div>
                <div className="header">
                    <h3 className="subject">{email.subject}</h3>
                    <div className="time">{email.time}</div>
                    <div className="email-from">{email.from}</div>
                </div>
                <div className="message">{email.message}</div>
            </div>
        );
    }
}


export default EmailDetails;

