import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import style from './style';
import WizardForm from '../wizard'


export default function UserModal(props) {
  const {openModal} = props.modal;
  const { closeForm } = props;
  const classes = style();
  const [open, setOpen] = useState(openModal);

  useEffect(() => {
    setOpen(openModal)
  }, [openModal])

  const handleClose = () => {
    closeForm();
  };

  return (
    <div >
      <Modal
        className={classes.root}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <WizardForm />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}