import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import style from './style'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ListComponent from '../../components/list-components'
import UserForm from './user-form'
import { useSelector, useDispatch } from 'react-redux';
import {userOpenForm, userCloseForm, userRemove} from '../../store/actions/user-action'

export default function ManagerUser() {
  const classes = style();
  const user = useSelector(state=> state.user); 
  const dispatch = useDispatch();

  const openFormCreate = () => {
    dispatch(userOpenForm(false));
  }

  const closeFormCreate = () => {
    dispatch(userCloseForm());
  }

  const onRemove = (id) =>{
    dispatch(userRemove(id));
  }

  return (
    <div>
    <h1>Gestão de Pessoas</h1>
      <Paper className={classes.paper}>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item xs={6} sm={4}>
          <Fab color="primary" aria-label="add" onClick={openFormCreate}  className={classes.button}>
           <AddIcon />
           </Fab>
          </Grid>
          <Grid item xs={6} sm={12}>
            <ListComponent array={user.data} onRemove={onRemove} isEdit={true}/>
          </Grid>
        </Grid>
      </Paper>
      <UserForm modal={user} closeForm={closeFormCreate}/>
    </div>
  );
}
