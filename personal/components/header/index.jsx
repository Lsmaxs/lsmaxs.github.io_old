import React, {Component} from 'react';
import './index.scss';
class HeaderComponent extends Component {
    render() {
        return (
            <div className="banner">
                <img src={this.props.src}/>
            </div>
        )
    }
}

export default HeaderComponent;