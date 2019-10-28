import React, { useState, useEffect } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import style from './style';
import UserFilds from './user'
import AddressFilds from './address'


function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <UserFilds />;
      case 1:
        return <AddressFilds />;
      default:
        return 'Unknown stepIndex';
    }
  }

function getSteps() {
    return ['Pessoa', 'Endereços'];
  }

export default function WizardForm(){
  const classes = style();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
 
  const handleNext = () => {
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
            <StepLabel>{label}</StepLabel>
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
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}