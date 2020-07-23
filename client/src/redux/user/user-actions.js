import types from './user-types';

export const setCurrentUser = user => ({
    type: types.SET_CURRENT_USER,
    payload: user
});