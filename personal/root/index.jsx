import React, {Component} from 'react';
import { BrowserRouter as Router, Route, HashRouter , Switch }  from 'react-router-dom';
import Home from '../containers/home/index.jsx';
import About from '../containers/about/index.jsx';
import Project from '../containers/project/index.jsx';
import Contact from '../containers/contact/index.jsx';
import Skill from '../containers/skill/index.jsx';
class Root extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/project" component={Project}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/skill" component={Skill}/>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
export default Root;