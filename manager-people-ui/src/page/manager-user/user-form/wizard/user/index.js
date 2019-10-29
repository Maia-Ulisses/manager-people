import React  from 'react';
import {Grid } from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import validateFields from './validate'
import TextFieldWrapper from './../../../../../components/TextField'


export default function UserFilds() {
  return (
    <Form
      onSubmit={() => {}}
      validate={validateFields}
      initialValues= {{name:'ulisses', email:'ulisses@gmail.com', birthDay:'1998-04-05', cpf:'45800839819'}}
      render={({handleSubmit, values, }) => (
        <form onSubmit={handleSubmit}>
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={6}>
              <Field
                fullWidth
                required
                name="name"
                component={TextFieldWrapper}
                type="text"
                label="Name"
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
                label=" "
              />
            </Grid>
            {console.log(JSON.stringify(values,0, 2))}
          </Grid>
        </form>
      )}
    />
  );
}

