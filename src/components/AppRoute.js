import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {About, Education, Experience, Intro, Projects, Skills} from './contents/Section';
import Error from './contents/Error';


const AppRoute = () =>{
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={Intro} />     
                    <Route path='/education' component={Education} />
                    <Route path='/about' component={About} />
                    <Route path='/experience' component={Experience} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/skills' component={Skills} />
                    <Route component={Error} />
                </Switch>
            </Router>
    </div>
    )
}

export default AppRoute