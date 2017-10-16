import React, {Component} from 'react';
import './index.scss';
import HeaderComponent from '../../components/header/index.jsx';
import FooterComponent from '../../components/footer/index.jsx';
import Banner from './banner.jpg';
class Skill extends Component {
    constructor(){
        super();
        this.state = {
            footerArticle:"The more you learn, the more you know, The more you know, the more you forget. The more you forget, the less you know. So why bother to learn."
        }
    }
    render() {
        return (
            <div className="skill">
                {/*header*/}
                <HeaderComponent src={Banner}/>
                {/*content*/}
                <div className="content wrap">
                    内容正在开发中...
                </div>
                {/*footer*/}
                <FooterComponent article={this.state.footerArticle}/>
            </div>
        )
    }
}

export default Skill;