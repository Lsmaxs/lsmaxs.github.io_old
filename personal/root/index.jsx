import React, {Component} from 'react';
import { BrowserRouter as Router, Route, HashRouter , Switch }  from 'react-router-dom';
import Home from '../containers/home/index.jsx';
class Root extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>

                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
export default Root;