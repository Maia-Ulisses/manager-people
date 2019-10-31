import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import TextFieldWrapper from '../TextField'
import ListComponent from '../list-components'
import style from './style';
import Button from '../button'


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

const generateId = () => Math.floor(Math.random() * 999999999999) + 9999999999;


export default function AddressFilds(props) {
  const classes = style();
  const [addresses, setAddresses] = useState(props.addresses)
  const [customAddress, setCustomAddresses] = useState(customListAddress(addresses))
  const [address, setAddress] = useState(initialAddress())
  const [addressForm, setAddressForm] = useState(address)


  useEffect(() => {
    setAddressForm(address)
  }, [address])

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

  const updateAddress = (ad, values) => {
    ad.id = values.id;
    ad.zipCode = values.zipCode;
    ad.street = values.street;
    ad.neighborhood = values.neighborhood;
    ad.city = values.city;
    ad.state = values.state;
  }


  const completedAddresFilds = async (values) => {
    if (addresses.map(ad => ad.id === values.id).filter(x => x)[0]) {
      const addressesUpdate = addresses.map(ad => {
        if (ad.id === values.id) {
          ad = updateAddress(ad, values);
        }
        return ad;
      })
      setAddresses(addressesUpdate);
      setCustomAddresses(customListAddress(addressesUpdate));
    } else {
      addresses.push({ ...values, ...values, id: generateId() });
      setCustomAddresses(customListAddress(addresses));
      setAddresses(addresses);
      setAddressForm(initialAddress())
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
        initialValues={addressForm}
        render={({ handleSubmit, values, reset }) => (
          <form onSubmit={event => {
            const handle = handleSubmit(event);
            handle.then(reset);
          }}>
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
                <Button className={classes.button} type="submit" variant="contained" color="primary">
                  Adicionar
              </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
      <div className={classes.list}>
        <ListComponent array={customAddress} onEdit={onEdit} onRemove={onRemove} isEdit={true} />
      </div>
    </div>
  );

}
