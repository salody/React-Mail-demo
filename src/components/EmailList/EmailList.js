import React, { Component } from 'react';
import EmailListItem from './EmailListItem/EmailListItem';
require('./emaillist.scss');

class EmailList extends Component {
    constructor(props) {
        super(props);
        
    this.onEmailItemClicked = this.onEmailItemClicked.bind(this);
    }
    onEmailItemClicked (id) {
        // 向父元素传递参数id
        this.props.onListClicked(id);
    } 
    render () {
        var emails = this.props.emails;
        if (emails.length === 0) {
            return (
                <div className="email-list empty">
                    这里什么都没有
                </div>
            );
        }
        return (
            <div className="list-container">
                {emails.map((email) => {
                    return (
                        <EmailListItem 
                            email = {email}
                            onEmailItemClicked = {this.onEmailItemClicked}
                        />
                    );
                })}
            </div>
        );
    }
}


export default EmailList;


