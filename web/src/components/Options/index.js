import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import { Container, Actions } from './styles';

export default function Options() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <>
      <Container>
        <button type="button" onClick={handleToggleVisible}>
          <MdMoreHoriz size={22} color="#444" />
        </button>
      </Container>
      <Actions visible={visible}>
        <div>
          <button type="button" onClick={() => {}}>
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
    </>
  );
}
