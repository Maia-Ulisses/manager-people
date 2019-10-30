const onlyNumber = /^\d+$/g;
const onlyEmail = /^@$/g;

const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    }/*else if (!onlyEmail.test(values.email)){
      errors.email = 'email invalida';
    }*/
    if (!values.cpf){
      errors.cpf = 'Required';
    }/*else if (!onlyNumber.test(values.cpf) && values.cpf.lenght !== 11){
      errors.cpf = 'estrutura invalida';
    }*/
    if (!values.birthDay) {
      errors.birthDay = 'Required';
    }
    return errors;
  };

  export default validate;