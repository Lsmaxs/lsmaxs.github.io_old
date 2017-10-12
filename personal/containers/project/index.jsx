import React, {Component} from 'react';
import './index.scss';
import ComponentArticle from './subpage/index.jsx';
import HeaderComponent from '../../components/header/index.jsx';
import FooterComponent from '../../components/footer/index.jsx';
import Banner from './banner2.png';
class Project extends Component {
    constructor() {
        super();
        this.state ={
            footerArticle:"Pain past is pleasure",
            articleList:[
                {
                    title:"广州悦芽母婴产品股份有限公司",
                    number:"3",
                    month:"Mar",
                    year:"2017",
                    author:"前端开发技术负责人",
                    skillList:[{name:"HTML4 HTML5"},{name:"CSS3"},{name:"Webpack"},{name:"ECMAScript 6"},{name:"Node.js Koa"},{name:"Node.js"},{name:"React"},{name:"React-Router-dom"},{name:"Redux"},{name:"Ant Design"},{name:"Fetch"},{name:"Vue"}],
                    main:"担任前端开发技术负责人，选定前端技术栈，负责文档的编写，前端体系的框架搭建；负责前端各个迭代的排期以及任务分配；配合客户端实现webview页面呈现以及后台接口的衔接；负责实现以及维护互童后台管理系统;拆分互童后台管理系统模块（react,react-router-dom,react-redux），进行控制台重构；部分H5微信活动页面的制作；负责微信小程序的制作；"
                },
                {
                    title:"广东全通教育股份有限公司",
                    number:"10",
                    month:"Oct",
                    year:"2015",
                    author:"前端开发工程师",
                    skillList:[{name:"HTML4 HTML5"},{name:"CSS3"},{name:"Vue"},{name:"Vue-router"},{name:"Vuex"},{name:"Node.js"},{name:"Webpack"},{name:"axios"},{name:"Echarts.js"}],
                    main:"担任前端开发工程师，负责全通教育官网维护；负责开发以及维护微校-移动校园平台系统；负责开发以及维护家校互动微信端；负责开发以及维护移动校园教师社区；"
                },
                {
                    title:"广州市衣联网络科技有限公司",
                    number:"19",
                    month:"Jan",
                    year:"2015",
                    author:"前端开发工程师",
                    skillList:[{name:"HTML4 HTML5"},{name:"CSS3"},{name:"Jquery"},{name:"Zepto"},{name:"Ajax"}],
                    main:"担任前端开发工程师一职，负责衣联网官网页面实现；负责配合安卓客户端实现Webview页面的嵌套以及调试；负责数据管理后台以及广告管理后台的前端维护工作"
                }
            ]
        }
    }
    render() {
        return (
            <div className="project">
                {/*header*/}
                <HeaderComponent src={Banner}/>
                {/**/}
                <div className="project-content wrap">
                    <em className="fold"></em>
                    <h1 className="project-title">WORK</h1>
                    <div className="project-article">
                        {
                            this.state.articleList.map((list,index)=>{
                                return (
                                    <ComponentArticle key={index}
                                      number={list.number}
                                      month={list.month}
                                      year={list.year}
                                      title={list.title}
                                      author={list.author}
                                      main={list.main}
                                      skillList={list.skillList}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <FooterComponent article={this.state.footerArticle}/>
            </div>
        )
    }
}

export default Project;