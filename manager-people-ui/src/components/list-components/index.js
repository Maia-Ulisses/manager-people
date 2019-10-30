import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import style from './style';

export default function ListComponent(props) {
  const classes = style();
  let indice = 0;

  const onRemove = (id) => {props.onRemove(id)};
  const onEdit = (id) => {props.onEdit(id)};

  const showEdit = (isEdit,value) => {
    return (isEdit
      ?
      <ListItemIcon className={classes.teste}>
        <IconButton edge="end" aria-label="comments" onClick={()=> onEdit(value.id)} >
          Edit
      </IconButton>
      </ListItemIcon>
      :
      <div/>
    );
  }

  return (
    <List className={classes.root}>
      {
        props.array.map(value => {
          const labelId = `${indice += 1}`;
          return (
            <ListItem key={labelId} role={undefined} dense button onClick={() => (value)}>
              <ListItemText id={labelId} primary={value.content} />

              {showEdit(props.isEdit,value)}

              <ListItemSecondaryAction>
                <IconButton edge="end" onClick={()=> onRemove(value.id)} karia-label="comments">
                  Delete
                  </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })
      }
    </List>
  );
}