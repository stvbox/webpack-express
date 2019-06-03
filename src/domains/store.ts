import { combineReducers, createStore } from 'redux';
import { DomainsReducers } from './store.types';

let domainsReducers: DomainsReducers = {
    foo: () => null
};
const compileStoreReducer = () => combineReducers({
    domains: combineReducers({ ...domainsReducers }),
});

export const applicationStore = createStore(compileStoreReducer());

export const registerDomainReducer = (domain: any, reducer: any) => {
    domainsReducers = {
        ...domainsReducers,
        [domain]: reducer
    };
    applicationStore.replaceReducer(compileStoreReducer());
}
