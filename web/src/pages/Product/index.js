import React from 'react';

import { useAuth } from '~/contexts/auth';

export default function Product() {
  const { signOut } = useAuth();

  return (
    <form onSubmit={signOut}>
      <button type="submit">Voltar</button>
    </form>
  );
}
