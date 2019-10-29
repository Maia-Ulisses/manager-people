const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.cpf) {
      errors.cpf = 'Required';
    }
    return errors;
  };

  export default validate;