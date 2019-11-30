import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './contents/Home';
import Education from './contents/Education';
import Experience from './contents/Experience';
// import Github from './contents/Github';
import Projects from './contents/Projects';
import Skills from './contents/Skills';
import Error from './contents/Error';


const AppRoute = () =>{
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />     
                    <Route path='/contents/education' component={Education} />
                    <Route path='/contents/experience' component={Experience} />
                    {/* <Route path='/contents/github' component={Github}/> */}
                    <Route path='/contents/projects' component={Projects} />
                    <Route path='/contents/skills' component={Skills} />
                    <Route component={Error} />
                </Switch>
            </Router>
    </div>
    )
}

export default AppRoute