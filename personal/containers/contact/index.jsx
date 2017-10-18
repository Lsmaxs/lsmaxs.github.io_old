import React, {Component} from 'react';
import './index.scss';
import HeaderComponent from '../../components/header/index.jsx';
import FooterComponent from '../../components/footer/index.jsx';
import ContactComponentPhoto from './subpage/index.jsx';
import One from './cxcx.png';
import Two from './x22.png';
import Three from './l-three.jpg';
import Four from './x44.png';
import Five from './l-two.jpg';
import Six from './x55.png';
import Seven from './x33.png';
import Eight from './l-six.jpg';
import Banner from './banner11.jpg';
import Wechat from './wech.png';
import QQ from './qq.png';
import Email from './email.png';
import Github from './github.png';
class contact extends Component {
    constructor(){
        super();
        this.state = {
            footerArticle:"God made relatives.Thank God we can choose our friends",
            leftPhoto:[{src:One},{src:Two},{src:Three},{src:Four}],
            rightPhoto:[{src:Five},{src:Six},{src:Seven},{src:Eight}]
        }
    }
    render() {
        return (
            <div className="contact">
                {/*header*/}
                <HeaderComponent src={Banner}/>
                {/*content*/}
                <div className="contact-content wrap">
                    <div className="list-l">
                        <div className="list-text">
                            <p className="contact-ch">如果您觉得我的作品可以，或者说我的能力符合您的要求，请用拿起您的手机各种骚扰我，以下有我的所有联系方式，如果您感觉我的作品或者是我的代码还有待加强和存在缺陷和你有更好的想法和很多很多很多很多...，您也可以联系我，往我Github上的 <a target="_blank" href="https://github.com/Lsmaxs/Lsmaxs.github.io">Lsmaxs.github.io</a> 这个项目上狂提Issues，最后欢迎您来我的 <a target="_blank" href="https://github.com/Lsmaxs">Github</a> 仓库来为我的作品加星，谢谢你们的来访。</p>
                            <span className="me">---&nbsp;&nbsp;Lsmax</span>
                            <ul className="contact-icon">
                                <li>
                                    <img src={QQ}/>
                                    <p>934321631</p>
                                </li>
                                <li>
                                    <img src={Wechat}/>
                                    <p>934321631</p>
                                </li>
                                <li>
                                    <img src={Email}/>
                                    <p>934321631@qq.com</p>
                                </li>
                                <li>
                                    <img src={Github}/>
                                    <p>https://github.com/Lsmaxs</p>
                                </li>

                            </ul>
                        </div>
                        {
                            this.state.leftPhoto.map((left,index)=>{
                                return (
                                    <ContactComponentPhoto
                                        key={index}
                                        src={left.src}/>
                                )
                            })
                        }
                    </div>
                    <div className="list-r">
                        {
                            this.state.rightPhoto.map((right,index)=>{
                                return (
                                    <ContactComponentPhoto
                                        key={index}
                                        src={right.src}/>
                                )
                            })
                        }
                        <div className="foot">
                            Lsmaxs
                        </div>
                    </div>
                </div>
                {/*footer*/}
                <FooterComponent article={this.state.footerArticle}/>
            </div>
        )
    }
}

export default contact;