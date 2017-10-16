import React, {Component} from 'react';
import './index.scss';
import Wechat from './wechat.png';
class ContactComponentPhoto extends Component {
    render() {
        return (
            <div className="list-photo">
                <img src={this.props.src}/>
                <div className="black-box"></div>
            </div>
        )
    }
}

export default ContactComponentPhoto;