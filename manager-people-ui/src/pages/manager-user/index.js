import React, { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import style from './style'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ListComponent from '../../components/list-components'
import UserForm from '../../components/user-modal'
import { useSelector, useDispatch } from 'react-redux';
import * as UserActions from '../../store/actions/user-action'
import * as ModalActions from '../../store/actions/modal-action'


export default function ManagerUser() {
  const classes = style();
  const user = useSelector(state => state.user);
  const modal = useSelector(state => state.modal);
  const customListUsers = (users) => 
    users.data.map(u => { return {id:u.id, content:`${u.name} | ${u.email} | ${u.cpf}` } });
  const dispatch = useDispatch();

  const [userData, setUserData] = useState(user);
  const [userList, setUserList] = useState(customListUsers(user));

  const [modalData, setModalData] = useState(modal);


  useEffect(() => {
    dispatch(UserActions.userGetAllRequest())
  }, [])

  useEffect(() => {
    setUserData(user)
    setUserList(customListUsers(user))
  }, [user])

  useEffect(() => {
    setModalData(modal)
  }, [modal])

  const openFormCreate = () => {
    dispatch(ModalActions.openForm());
  }

  const closeFormCreate = () => {
    dispatch(ModalActions.closeFormEdit());
  }

  const onRemove = (id) => {
    dispatch(UserActions.userRemove(id));
  }

  const onEdit = (id) => {
    dispatch(ModalActions.openFormEdit(id));
  }


  return (
    <div>
      <h1>Gestão de Pessoas</h1>
      <Paper className={classes.paper} style={{ maxHeight: 400, overflow: 'auto' }}>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item xs={6} sm={4}>
            <Fab color="primary" aria-label="add" onClick={openFormCreate} className={classes.button}>
              <AddIcon />
            </Fab>
          </Grid>
          <Grid item xs={6} sm={12}>
            <ListComponent
              array={userList}
              onRemove={onRemove}
              onEdit={onEdit}
              isEdit={true}
            />
          </Grid>
        </Grid>
      </Paper>
      <UserForm modal={modalData} closeForm={closeFormCreate} />
    </div>
  );
}
