import { useCallback, useEffect, useMemo, useRef, useReducer } from 'react';
import { getPaginationState } from './paginationState';
import { paginationStateReducer } from './paginationStateReducer';

export function usePagination({
    totalItems = 0,
    initialPage = 0,
    initialPageSize = 0,
}) {
    const initialState = {
        totalItems,
        pageSize: initialPageSize,
        currentPage: initialPage,
    };

    const [paginationState, dispatch] = useReducer(
        paginationStateReducer,
        initialState,
    );

    const totalItemsRef = useRef(totalItems);
    totalItemsRef.current = totalItems;

    useEffect(() => {
        return () => {
            if (
                typeof totalItemsRef.current !== 'number' ||
                totalItems === totalItemsRef.current
            ) {
                return;
            }

            dispatch({
                type: 'SET_TOTALITEMS',
                totalItems: totalItemsRef.current,
            });
        };
    }, [totalItems]);

    return {
        ...paginationState,
        ...useMemo(
            () => getPaginationState(paginationState),
            [paginationState],
        ),
        setPage: useCallback((page) => {
            dispatch({
                type: 'SET_PAGE',
                page,
            });
        }, []),
        setNextPage: useCallback(() => {
            dispatch({ type: 'NEXT_PAGE' });
        }, []),
        setPreviousPage: useCallback(() => {
            dispatch({ type: 'PREVIOUS_PAGE' });
        }, []),
        setPageSize: useCallback((pageSize, nextPage = 0) => {
            dispatch({ type: 'SET_PAGESIZE', pageSize, nextPage });
        }, []),
    };
}
