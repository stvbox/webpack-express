import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { MainPageCmp } from '../main-page/main-page';
import { NotFound404Cmp } from '../not-found-404/index';
import { StringsCmp } from '../../domains/strings/strings-cmp';
import { Provider } from 'react-redux';
import { applicationStore } from '../../domains/store';

export const MainComponent = (props: any) =>
    <Provider store={applicationStore}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={MainPageCmp} />
                <Route path="/strings" component={StringsCmp} />
                <Route component={NotFound404Cmp} />
            </Switch>
        </HashRouter>
    </Provider>
