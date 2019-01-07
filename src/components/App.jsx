import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Search from "./sections/Search";
import Ranking from "./sections/Ranking";

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Route exact path={`/`} component={Search} />
                    <Route exact path={`/ranking`} component={Ranking} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;