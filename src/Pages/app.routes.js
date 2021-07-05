  
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';

function AppRoutes() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => {
                    return <Redirect to='/home' />
                }} />
                <Route path="/home" component={Home} />
            </Switch>
        </Router>
    );
}


export default AppRoutes;