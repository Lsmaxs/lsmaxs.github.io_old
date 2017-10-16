import React, {Component} from 'react';
import './index.scss';
import Iconfoot from '../../containers/home/subpage/home_left/github.png';
class FooterComponent extends Component {
    render() {
        return (
            <div className="footer">
                {/*transition*/}
                <p className="about-transition">
                    {this.props.article}
                </p>
                <a className="about-foot" target="_blank" href="https://github.com/Lsmaxs">
                    <img src={Iconfoot}/>
                </a>
            </div>
        )
    }
}
export default FooterComponent;