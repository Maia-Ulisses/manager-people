import { ActionsTypes } from '../types';

const INITIAL_STATE = {
    data: [
        {
            name: 'Ulisses Maia',
            cpf: '4580.080.98-19',
            email: 'ulisses@gmail.com'
        },
        {
            name: 'Julia Loz',
            cpf: '4580.080.98-19',
            email: 'ulisses@gmail.com'
        },
        {
            name: 'Pedro Hwj',
            cpf: '4580.080.98-19',
            email: 'ulisses@gmail.com'
        },
        {
            name: 'Maia',
            cpf: '4580.080.98-19',
            email: 'ulisses@gmail.com'
        },
        {
            name: 'Ulisses Maia',
            cpf: '4580.080.98-19',
            email: 'ulisses@gmail.com'
        },
    ],
    isEdit:false,
    openModel:false,
    error: false,
    loading: false,
  };

 const reducer = (state = INITIAL_STATE, action) => {
      switch(action.type){
          case ActionsTypes.OPEN_FORM:
              return {...state, openModel: true,isEdit:action.isEdit }
            case ActionsTypes.USER_REMOVE_REQUEST:
              return {...state, openModel: false,isEdit:false, data: state.data.filter(d=> d.name != action.id) }
              case ActionsTypes.CLOSE_FORM:
                 return {...state, openModel: false,}
          case ActionsTypes.USER_GET_ALL_SUCCESS:
              return state;
          default:
              return state;
      }
  }

  export default reducer;