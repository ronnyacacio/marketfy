import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '~/contexts/auth';
import logo from '~/assets/marketfy.png';
import { Container, Content, PageSelect, Info } from './styles';

export default function Header({ currentPage }) {
  const { provider, signOut } = useAuth();
  console.log(provider);

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="MarketFy" />
          <PageSelect select={currentPage === 'PRODUCTS'}>
            <Link to="/products">PRODUTOS</Link>
          </PageSelect>
          <PageSelect select={currentPage === 'CATEGORIES'}>
            <Link to="/categories">CATEGORIAS</Link>
          </PageSelect>
        </nav>
        <Info>
          <img
            src={
              provider.avatar.url ||
              'https://api.adorable.io/avatars/50/abott@adorable.png'
            }
            alt={provider.name}
          />
          <aside>
            <span>{provider.name}</span>
            <button type="button" onClick={handleSignOut}>
              sair do sistema
            </button>
          </aside>
        </Info>
      </Content>
    </Container>
  );
}
