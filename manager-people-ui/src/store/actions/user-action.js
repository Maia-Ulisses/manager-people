import { ActionsTypes } from '../types';

export const userGetAllRequest = () => ({
    type: ActionsTypes.USER_GET_ALL_REQUEST,
})

export const userOpenForm = (isEdit) => ({
    type: ActionsTypes.OPEN_FORM,
    isEdit
})

export const userCloseForm = () => ({
    type: ActionsTypes.CLOSE_FORM,
})

export const userRemove = (id) => ({
    type: ActionsTypes.USER_REMOVE_REQUEST,
    id
})
