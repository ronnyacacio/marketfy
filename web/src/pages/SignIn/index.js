import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '~/contexts/auth';
import { Input } from '~/components';
import marketfy from '~/assets/marketfy.png';
import { Container, FormContainer } from './styles';

export default function SignIn() {
  const { signIn } = useAuth();

  function handleSubmit({ email, password }) {
    signIn(email, password);
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <img src={marketfy} alt="MarketFy" />
        <Input
          name="email"
          label="SEU E-MAIL"
          type="email"
          placeholder="exemplo@email.com"
        />
        <Input
          name="password"
          label="SUA SENHA"
          type="password"
          placeholder="**********"
        />

        <button type="submit">Entrar no sistema</button>
        <Link to="/register">Criar uma conta</Link>
      </FormContainer>
    </Container>
  );
}
