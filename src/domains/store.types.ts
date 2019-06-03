import { AnyAction } from 'redux';

export interface IStoreAction extends AnyAction {
    payload?: any;
    domain?: string;
    reducer?(state: any, action: IStoreAction): any;
}

export interface DomainsReducers {
    [index: string]: any;
}
