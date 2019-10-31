import React  from 'react';

import {Button} from '@material-ui/core';

export default function ButtondWrapper(props) {
    const {
         classes, children, onClick, variant, disabled, color, type,classesName,
          ...input 
    } = props;
    return (
        <Button
        type={type}
        onClick={onClick}
        variant={variant}
        disabled={disabled}
        color={color}
        className={classesName}
        >
        <span>{children}</span>
        </Button>
    );
  }

