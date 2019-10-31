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

export const userUpdate = (data) => ({
    type: ActionsTypes.USER_UPDATE_REQUEST,
    payload:
    {
        data: data,
    }
})

export const userAdd = (data) => ({
    type: ActionsTypes.USER_CREATE_REQUEST,
    payload:
    {
        data: data,
    }
})


export const userGet = (data, isEdit) => ({
    type: ActionsTypes.USER_GET,
    payload:
    {
        data: data,
        isEdit: isEdit
    }
})

export const userRemove = (id) => ({
    type: ActionsTypes.USER_REMOVE_REQUEST,
    id
})
