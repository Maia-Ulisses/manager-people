import { ActionsTypes } from '../types';


export const openForm = () => ({
    type: ActionsTypes.OPEN_FORM,
})

export const openFormEdit = (id) => ({
    type: ActionsTypes.OPEN_FORM_EDIT,
    id
})

export const closeForm = () => ({
    type: ActionsTypes.CLOSE_FORM,
})

export const closeFormEdit = () => ({
    type: ActionsTypes.CLOSE_FORM_EDIT,
})
