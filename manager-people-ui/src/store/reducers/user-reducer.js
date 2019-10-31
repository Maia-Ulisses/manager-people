import { ActionsTypes } from '../types';

const INITIAL_STATE = {
    data: [],
    user: {
        addresses:[]
    },
    error: false,
    loading: false,
    isEdit: false,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionsTypes.USER_GET_ALL_REQUEST:
            return { ...state, loading: true,isEdit: false, user: INITIAL_STATE.user }
        case ActionsTypes.USER_GET_ALL_SUCCESS:
            return { ...state, isEdit: false, loading: false, data: action.payload.data, user: INITIAL_STATE.user }
        case ActionsTypes.USER_GET:
            return { ...state, isEdit: action.payload.isEdit, user: action.payload.data }
        case ActionsTypes.USER_REMOVE_REQUEST:
            return { ...state, data: state.data.filter(d => d.id !== action.id) }

        default:
            return state;
    }
}

export default reducer;