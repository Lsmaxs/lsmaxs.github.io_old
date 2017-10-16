import React, {Component} from 'react';
import './index.scss';
class ProjectComponentArticle extends Component {
    render() {
        return (
            <div className="article-box">
                <div className="date">
                    <div className="number">{this.props.number}</div>
                    <div className="month">{this.props.month}</div>
                    <div className="year">{this.props.year}</div>
                </div>
                <div className="article-head">
                    <h2 className="title">{this.props.title}</h2>
                    <em className="author">{this.props.author}</em>
                </div>
                <div className="article-main">{this.props.main}</div>
                <div className="skill">
                    <div className="skill-name">涉及技术栈</div>
                    <ul className="skill-list">
                        {
                            this.props.skillList.map((skill,index)=>{
                                return (
                                    <li key={index}>{skill.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default ProjectComponentArticle;