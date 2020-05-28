import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import { Detail } from '~/components';
import { Container, Actions } from './styles';

export default function Options({ product }) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  function handleToggleVisible() {
    setVisible((prevState) => !prevState);
  }

  function handleToggleOpen() {
    setOpen((prevState) => !prevState);
  }

  return (
    <>
      <Container>
        <button type="button" onClick={handleToggleVisible}>
          <MdMoreHoriz size={22} color="#444" />
        </button>

        <Actions visible={visible}>
          <div>
            <button type="button" onClick={handleToggleOpen}>
              <MdVisibility size={18} color="#8E5BE8" />
              Visualizar
            </button>
          </div>
          <div>
            <Link
              to={{
                pathname: `/products/update`,
                state: {},
              }}
            >
              <MdCreate size={18} color="#4D85EE" />
              Editar
            </Link>
          </div>
          <div>
            <button type="button" onClick={() => {}}>
              <MdDeleteForever size={18} color="#DE3B3B" />
              Excluir
            </button>
          </div>
        </Actions>
      </Container>
      <Detail open={open} handleClose={handleToggleOpen} product={product} />
    </>
  );
}
