import React, {Component} from 'react';
import './index.scss';
import FooterComponnet from '../../components/footer/index.jsx';
import HeaderComponent from '../../components/header/index.jsx';
import Banner from './banner.png';
import Me from './touxiang.jpg';
import LiveOne from './toew.jpg';
import LiveTwo from './noe.jpg';
class About extends Component {
    constructor(){
        super();
        this.state = {
            footerArticle:"Life is a mirror. It you laugh , you laugh at it , you have it cry , you cry for it."
        }
    }
    render() {
        return (
            <div className="about">
                {/*header*/}
                <HeaderComponent src={Banner}/>
                {/*content*/}
                <div className="content wrap">
                    <h1 className="about-title">ABOUT</h1>
                    {/*introduce*/}
                    <div className="about-introduce">
                        <div className="about-photo">
                            <img src={Me}/>
                        </div>
                        {/*aboutArticle*/}
                        <div className="about-article">
                            <h2 className="article-title">WEB DESIGNER & WEB CODER</h2>
                            <p className="article-connent-cn">
                                <span>我</span>
                                是Lsmax。敲代码的设计师一枚~，作为一名90后，我的骨子里有90后的热血和激情。我喜欢惊喜无限的艺术，喜欢代码随心而动的感觉，喜欢侃侃而谈的优雅，但是我现在是一名前端开发工程师。
                                <p style={{textIndent:"2em"}}>我注重交互,喜爱设计,更热爱 <i>coding</i> ,以自己的热爱,靠自己的代码养活我自己，是一件让人自豪的事情呢~。我同设计嘻戏，和产品调侃，与后端互吹，于测试共舞，如同游任于团队的鱼儿。可以说HTML如同一张宣纸，Css为墨点缀色彩，则JavaScript为我掌中画笔，我可执笔挥毫泼墨一副副唯美的画卷!</p>
                            </p>
                            <p className="article-connent-en">
                                I am 9dust ,one after 90 ,like most young people ,like freedom,like singing ,and also like playing games ,i come from a remote small city in Meizhou ,because of an occasional chance , I came into contact with the knowledge of design ,get out of hand ,and then it began to run out of control ,but I'm now a web development engineer.I love design and I love coding ,i am proud that I can support myself by my own love and by my own code ,i am proud that I can live a happy life on my own love and on my own code.If HTML paved the road for me ,then CSS would be my fireworks on this road , and JAVASCRIPT would be the booster that pushed me farther and farther along the road.
                            </p>
                        </div>
                    </div>
                    {/*myLive*/}
                    <div className="about-live-one">
                        <div className="live-photo">
                            <span className="border"></span>
                            <img src={LiveOne}/>
                        </div>
                        <div className="live-article">
                            <p>变化是生活的调味品</p>
                            <p className="p-a">Variety is the spice of life</p>
                        </div>
                    </div>
                    {/*myDog*/}
                    <div className="about-live-two">
                        <div className="live-article">
                            <p>抱最大的希望为最大的努力做最坏的打算</p>
                            <p className="p-a">Hold the greatest hope for the greatest efforts
                                to prepare for the worst</p>
                        </div>
                        <div className="live-photo">
                            <span className="border"></span>
                            <img src={LiveTwo}/>
                        </div>
                    </div>
                    <FooterComponnet article={this.state.footerArticle}/>
                </div>
            </div>
        )
    }
}

export default About;