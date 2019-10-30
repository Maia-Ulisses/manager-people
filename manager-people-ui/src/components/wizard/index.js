import React, { useState, useEffect } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import style from './style';
import UserFilds from '../user'
import AddressFilds from '../address'
import { useSelector, useDispatch } from 'react-redux';


export default function WizardForm(){
  const classes = style();

  const user = useSelector(state => state.user);
  const [userData, setUserData] = useState(user.user);
  const [isEdit, setIsEdit] = useState(user.isEdit);

  useEffect(() => {
    setUserData(user.user);
    setUserData(user.isEdit);
  }, [])

  useEffect(() => {
    setUserData(user.user);
  }, [user.user])

  useEffect(() => {
    setIsEdit(user.isEdit);
  }, [user.isEdit])


  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <div><UserFilds onClick={handleNext} user={userData} isEdit={isEdit}/></div>;
      case 1:
        return <div><AddressFilds /></div>;
      default:
        return 'Unknown stepIndex';
    }
  }

function getSteps() {
    return ['Pessoa', 'Endereços'];
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
 
  const handleNext = (values) => {
    console.log(values)
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

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
        {activeStep === steps.length ? (
          <div>
            <p>Reset</p>
          </div>
        ) : (
          <div>
            <div>
            <div>{getStepContent(activeStep)}</div>
            </div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}