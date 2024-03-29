import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade } from '@material-ui/core';

import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 4,
  },
}));

export default function Detail({ open, handleClose, product }) {
  const classes = useStyles();

  return (
    <Modal
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
        <Container className={classes.paper}>
          <strong>Informações do produto</strong>
          <span>{`ID: ${product.id}`}</span>
          <span>{`Nome: ${product.name}`}</span>
          <span>{`Em estoque: ${product.stock} ${
            product.unitary ? 'Un' : 'Kg'
          }`}</span>
          <span>{`Preço: R$ ${product.price}`}</span>
          <span>{`Categoria: ${product.category.name}`}</span>
          <img src={product.image.url} alt={product.name} />
        </Container>
      </Fade>
    </Modal>
  );
}
