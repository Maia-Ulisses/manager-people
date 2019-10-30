import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import validateFields from './validate'
import TextFieldWrapper from '../TextField'



export default function UserFilds(props) {
  const user = props.user;
  const isEdit = props.isEdit

  const initialValues = () =>
    isEdit
      ?
      {
        id: user.id,
        name: user.name,
        email: user.email,
        birthDay: user.birthDay.substring(0, 10),
        cpf: user.cpf
      }
      :
      {
        id: 0,
        name: '',
        email: '',
        birthDay: '',
        cpf: ''
      }

  const completedUserFilds = values =>
      props.onClick(values)

  return (
    <Form
      onSubmit={completedUserFilds}
      validate={validateFields}
      initialValues={initialValues()}
      render={({ handleSubmit, values, errors, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={6}>
              <Field
                fullWidth
                required
                name="name"
                component={TextFieldWrapper}
                type="text"
                label="Nome"
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                fullWidth
                required
                name="cpf"
                component={TextFieldWrapper}
                type="text"
                label="CPF"
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                fullWidth
                required
                name="email"
                component={TextFieldWrapper}
                type="email"
                label="Email"
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                fullWidth
                required
                name="birthDay"
                component={TextFieldWrapper}
                type="date"
                label="Data Nascimento"
              />
            </Grid>
            <Grid item xs={6}>
              <Button type="submit" variant="contained" color="primary">
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
}

