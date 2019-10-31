import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import TextFieldWrapper from '../TextField'
import ListComponent from '../list-components'
import style from './style';

const customListAddress = (addresses) =>
  addresses.map(ad => { return { id: ad.id, content: `${ad.zipCode} | ${ad.street} | ${ad.city} | ${ad.state}` } });

  const initialAddress = () => {
    return {
      id: 0,
      zipCode: '',
      street: '',
      neighborhood: '',
      city: '',
      state: ''
    }
  }

export default function AddressFilds(props) {
  const classes = style();
  const [addresses, setAddresses] = useState(props.addresses)
  const [customAddress, setCustomAddresses] = useState(customListAddress(addresses))
  const [address, setAddress] = useState(initialAddress())

  useEffect(() => {
    setCustomAddresses(customListAddress(props.addresses))
    setAddress(initialAddress())
  }, [props])


  const onEdit = (id) => {
    const address = addresses.filter(ad => ad.id === id)[0]
    setAddress(address);
  }

  const onRemove = (id) => {
    const addressesUpdate = addresses.filter(ad => ad.id !== id);
    setAddresses(addressesUpdate);
    setCustomAddresses(customListAddress(addressesUpdate));
    props.onClick(addressesUpdate);
  }

  const completedAddresFilds = (values) => {
    if (addresses.map(ad => ad.id === values.id).filter(x => x)[0]) {
      const addressesUpdate = addresses.map(ad => {
        if (ad.id === values.id) {
          ad.id = values.id;
          ad.zipCode = values.zipCode;
          ad.street = values.street;
          ad.neighborhood = values.neighborhood;
          ad.city = values.city;
          ad.state = values.state
        }
        return ad;
      })
      setAddresses(addressesUpdate);
      setCustomAddresses(customListAddress(addressesUpdate));
    } else {
      addresses.push(values);
      setCustomAddresses(customListAddress(addresses));
      setAddresses(addresses);
    }
    props.onClick(addresses);
    setAddress(initialValues());
  }

  const initialValues = () => (
    {
      id: address.id,
      zipCode: address.zipCode,
      street: address.street,
      neighborhood: address.neighborhood,
      city: address.city,
      state: address.state
    }
  )

  return (
    <div>
      <Form
        onSubmit={completedAddresFilds}
        initialValues={initialValues()}
        render={({ handleSubmit, values}) => (
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
              <Grid item xs={6}>
                <Button className={classes.button} type="submit"  variant="contained" color="primary">
                  Salvar
              </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
      <ListComponent array={customAddress} onEdit={onEdit} onRemove={onRemove} isEdit={true} />
    </div>
  );
}

