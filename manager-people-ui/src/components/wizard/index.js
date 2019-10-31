import React, { useState, useEffect } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import style from './style';
import UserFilds from '../user'
import AddressFilds from '../address'
import { useSelector, useDispatch } from 'react-redux';
import {userUpdate, userAdd} from '../../store/actions/user-action'
import ButtonWrapper from '../button'  

export default function WizardForm() {
  const classes = style();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [userData, setUserData] = useState(user.user);
  const [userAddresses, setUserAddresses] = useState([]);
  const [isAbleButton, setIsAbleButton] = useState(userAddresses.length === 0);
  const [isEdit, setIsEdit] = useState(user.isEdit);

  useEffect(() => {
    setUserAddresses(user.user.addresses);
  }, [user.user.addresses])

  useEffect(() => {
    setUserData(user.user);
    setUserData(user.isEdit);
  }, [])

  useEffect(() => {
    setIsAbleButton(userAddresses.length === 0)
    }, [userAddresses])

  useEffect(() => {
    setUserData(user.user);
  }, [user.user])

  useEffect(() => {
    setIsEdit(user.isEdit);
  }, [user.isEdit])

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <div><UserFilds onClick={handleNext} user={userData} isEdit={isEdit} /></div>;
      case 1:
        return <div><AddressFilds addresses={userAddresses} onClick={updateAddresses} isEdit={isEdit} /></div>;
      default:
        return 'Unknown stepIndex';
    }
  }

  function getSteps() {
    return ['Pessoa', 'Endereços'];
  }

  const [activeStep, setActiveStep] = useState(0);

  const buttonFinish = () => {
    return activeStep === steps.length - 1 ?
      (
        <ButtonWrapper 
          onClick={sendForm}
          color="primary"
          variant="contained" 
          disabled={isAbleButton}>
          Concluir
         </ButtonWrapper>
      )
      :
      (<div />)
  }

  const steps = getSteps();

  const handleNext = (values) => {
    setUserData(values);
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const updateAddresses = (add) => {
    setIsAbleButton(add.length === 0)
    setUserAddresses(add)
  }

  const sendForm = () => {
     const data = {...userData.userData, ...userData, addresses:userAddresses}
      isEdit ? dispatch(userUpdate(data)) : dispatch(userAdd(data))
  }


  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel><h3>{label}</h3></StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <div>
          <div>
            <div>{getStepContent(activeStep)}</div>
          </div>
          <div>
            <ButtonWrapper
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.backButton}
            >
              Voltar
              </ButtonWrapper>
            {buttonFinish()}
          </div>
        </div>
      </div>
    </div>
  );
}