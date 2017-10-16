import React, {Component} from 'react';
import HomeComonentLeft from './subpage/home_left/index.jsx';
import HomeComonentRight from './subpage/home_right/index.jsx';
import './index.scss';
class Home extends Component {
    render() {
        return (
            <div className="home">
                <HomeComonentLeft/>
                <HomeComonentRight/>
            </div>
        )
    }
}
export default Home;