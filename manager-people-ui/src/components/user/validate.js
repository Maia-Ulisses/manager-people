
const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.cpf){
      errors.cpf = 'Required';
    }
    if (!values.birthDay) {
      errors.birthDay = 'Required';
    }
    return errors;
  };

  export default validate;