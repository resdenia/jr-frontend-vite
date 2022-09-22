import { limitPageBounds } from './paginationState';

const getCurrentPageReducer = (rootState) =>
    function currentPageReducer(state, action) {
        switch (action.type) {
            case 'SET_PAGE':
                return limitPageBounds(
                    rootState.totalItems,
                    rootState.pageSize,
                )(action.page);
            case 'NEXT_PAGE':
                return limitPageBounds(
                    rootState.totalItems,
                    rootState.pageSize,
                )(state + 1);
            case 'PREVIOUS_PAGE':
                return limitPageBounds(
                    rootState.totalItems,
                    rootState.pageSize,
                )(state - 1);
            case 'SET_PAGESIZE':
                return limitPageBounds(
                    rootState.totalItems,
                    action.pageSize,
                )(action.nextPage ?? state);
            case 'SET_TOTALITEMS':
                return limitPageBounds(
                    action.totalItems,
                    rootState.pageSize,
                )(action.nextPage ?? state);
            /* istanbul ignore next */
            default:
                return state;
        }
    };

function totalItemsReducer(state, action) {
    switch (action.type) {
        case 'SET_TOTALITEMS':
            return action.totalItems;
        default:
            return state;
    }
}

function pageSizeReducer(state, action) {
    switch (action.type) {
        case 'SET_PAGESIZE':
            return action.pageSize;
        default:
            return state;
    }
}

export function paginationStateReducer(state, action) {
    return {
        currentPage: getCurrentPageReducer(state)(state.currentPage, action),
        totalItems: totalItemsReducer(state.totalItems, action),
        pageSize: pageSizeReducer(state.pageSize, action),
    };
}
