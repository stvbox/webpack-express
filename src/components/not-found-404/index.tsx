import React from 'react';
import { MainTemplate } from '../main/main-template';

export const NotFound404Cmp = (props: any) =>
    <MainTemplate>
        <div>
            <h1>Страница не найдена</h1>
            <div>{JSON.stringify(props)}</div>
        </div>
    </MainTemplate>
