import React, {Component} from 'react';
import { Link }  from 'react-router-dom';
import './index.scss';
class HomeComonentRight extends Component {
    render() {
        return (
            <div className="home_right">
                <em className="icon">S</em>
                <div className="r-content">
                    <Link to="/skill" className="button">SKILL</Link>
                </div>
            </div>
        )
    }
}

export default HomeComonentRight;