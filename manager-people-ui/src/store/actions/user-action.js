import { ActionsTypes } from '../types';

export const userGetAllRequest = () => ({
    type: ActionsTypes.USER_GET_ALL_REQUEST,
})

export const userGetAllSuccess = (data) => ({
    type: ActionsTypes.USER_GET_ALL_SUCCESS,
    payload: {
        data: data
    }
})

export const userGet = (id, isEdit) => ({
    type: ActionsTypes.USER_GET,
    payload:
    {
        id: id,
        isEdit: isEdit
    }
})

export const userRemove = (id) => ({
    type: ActionsTypes.USER_REMOVE_REQUEST,
    id
})
