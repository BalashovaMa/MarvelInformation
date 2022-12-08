import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import AppHeader from "../appHeader/AppHeader";
import ComicsPage from '../pages/ComicsPage';
import MainPage from '../pages/MainPage';






const App = () => {


    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Switch>
                        <Route exact path="/">
                            <MainPage />
                        </Route>
                        <Route exact path="/comics">
                            <ComicsPage/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )

}

export default App;