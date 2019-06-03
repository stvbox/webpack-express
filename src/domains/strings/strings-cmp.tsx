import React from 'react';
import { MainTemplate } from '../../components/main/main-template';
import { stringsService } from './store';
import _ from 'lodash';
import { StringsMenuCmp } from './strings-menu-cmp';
import { Route, Switch } from 'react-router';
import { StringsFormCmp } from './strings-form-cmp';
import { StringsListCmp } from './strings-list-cmp';

export const StringsCmp = (props: any) =>
    <MainTemplate>
        <StringsMenuCmp />
        <Switch>
            <Route path="/strings/:id" component={StringsFormCmp} />
            <Route path="/strings" component={StringsListCmp} />
        </Switch>
        <button onClick={() => stringsService.fakeInit()}>инициализация</button>
    </MainTemplate>
