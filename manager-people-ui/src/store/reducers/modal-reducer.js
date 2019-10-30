import { ActionsTypes } from '../types';

const INITIAL_STATE = {
    openModal: false,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionsTypes.OPEN_FORM:
            return { ...state, openModal: true}
        case ActionsTypes.CLOSE_FORM:
            return { ...state, openModal: false }
        default:
            return state;
    }
}

export default reducer;
