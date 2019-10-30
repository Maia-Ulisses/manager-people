import React from 'react';
import { Grid } from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import TextFieldWrapper from '../TextField'
import ListComponent from '../list-components'
import style from './style';

export default function AddressFilds() {
  const classes = style();
  return (
    <div>
      <Form
        onSubmit={() => { }}
        initialValues={{ zipCode: '13060472', street: 'Rua Donato Pedro Santos', neighborhood: 'Jd. Santa Lucia', city: 'Campinas', state: 'SP' }}
        render={({ handleSubmit, values, }) => (
          <form onSubmit={handleSubmit}>
            <Grid container alignItems="flex-start" spacing={2}>
              <Grid item sm={6}>
                <Field
                  fullWidth
                  required
                  name="zipCode"
                  component={TextFieldWrapper}
                  type="text"
                  label="CEP"
                />
              </Grid>
              <Grid item sm={12}>
                <Field
                  fullWidth
                  required
                  name="street"
                  component={TextFieldWrapper}
                  type="text"
                  label="endereço"
                />
              </Grid>
              <Grid item sm={12}>
                <Field
                  fullWidth
                  required
                  name="neighborhood"
                  component={TextFieldWrapper}
                  type="text"
                  label="bairro"
                />
              </Grid>
              <Grid item sm={8}>
                <Field
                  fullWidth
                  required
                  name="city"
                  component={TextFieldWrapper}
                  type="text"
                  label="cidade"
                />
              </Grid>
              <Grid item sm={4}>
                <Field
                  fullWidth
                  required
                  name="state"
                  component={TextFieldWrapper}
                  type="text"
                  label="estado"
                />
              </Grid>
              {console.log(JSON.stringify(values, 0, 2))}
            </Grid>
          </form>
        )}
      />
      <ListComponent array={[ {
            name: 'Ulisses Maia',
            cpf: '4580.080.98-19',
            email: 'ulisses@gmail.com'
        },]} isEdit={true} />
    </div>
  );
}

