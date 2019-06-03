import { applicationStore, registerDomainReducer } from '../../store';
import { combineReducers } from 'redux';
import { IStoreAction } from '../../store.types';
import { v4 } from 'uuid';

export const STRINGS_DOMAIN = 'STRINGS_DOMAIN';

enum StringsActions {
    Add = 'ADD_STRING',
    SetCurrent = 'SET_CURRENT',
}

const list = (state: StringItem[] = [], action: IStoreAction): StringItem[] => {
    switch (action.type) {
        case StringsActions.Add:
            return [...state, {
                ...action.payload,
                id: v4(),
            }];
    }
    return state;
}

const filter = (state = {}, action: IStoreAction) => {
    if (action.type == StringsActions.SetCurrent) {
        return {
            ...state,
            current: action.payload
        };
    }
    return state;
}

const current = (state: string = '', action: IStoreAction) => {
    if (action.type == StringsActions.SetCurrent) {
        return action.payload;
    }
    return state;
}

const reducer = combineReducers({
    list, filter, current
});

registerDomainReducer(STRINGS_DOMAIN, reducer);

interface StringItem {
    id?: string;
    title: string;
}

export class stringsService {
    static fakeInit(): void {
        this.addString({
            id: 'Первый', title: 'первый'
        });

        this.addString({
            id: 'Второй', title: 'второй'
        });

        this.addString({
            id: 'Третий', title: 'третий'
        });
    }
    static getDomainState(): any {
        const commonStore = applicationStore.getState();
        return commonStore.domains[STRINGS_DOMAIN];
    }

    static addString(item: StringItem) {
        applicationStore.dispatch<IStoreAction>({
            type: StringsActions.Add,
            domain: STRINGS_DOMAIN,
            payload: item,
            reducer
        });
    }

    static selectString(id: string) {
        applicationStore.dispatch<IStoreAction>({
            type: StringsActions.SetCurrent,
            payload: id,
        });
    }

    static getStrings() {
        const domainState = this.getDomainState();
        return this.getDomainState().list;
    }
}
