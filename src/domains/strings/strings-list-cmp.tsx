import { stringsService } from './store';
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';


const StringsListView = (props: any) =>
    <table className="table table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Заголовок</th>
            </tr>
        </thead>
        <tbody>
            {props.items.map((item: any) =>
                <tr key={item.id}
                    onClick={() => stringsService.selectString(item.id)}
                    className={_.isEqual(props.current, item.id) ? 'table-primary' : ''}>
                    <th scope="row">{item.id}</th>
                    <td>{item.title}</td>
                </tr>
            )}
        </tbody>
    </table>

export const StringsListCmp = connect((state: any) => ({
    items: stringsService.getDomainState().list,
    current: stringsService.getDomainState().current,
}))(StringsListView);
