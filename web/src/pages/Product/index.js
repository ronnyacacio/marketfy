import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { Header, Scroll, Options } from '~/components';
import { Container, Actions, ProductList, ProductItem } from './styles';

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get('products');
        setProducts(response.data);
      } catch (err) {
        toast.error('Erro as carregar dados!');
      }
    }
    loadProducts();
  }, []);

  return (
    <>
      <Header currentPage="PRODUCTS" />
      <Container>
        <strong>Produtos</strong>
        <Actions>
          <div className="search">
            <FiSearch color="#999" size={18} />
            <input placeholder="Buscar por nome do produto" />
          </div>
          <Link to="/products/new">
            <button type="button">
              <FiPlus color="#555" size={30} style={{ paddingRight: 5 }} />
              CADASTRAR
            </button>
          </Link>
        </Actions>
        <ProductList>
          <header>
            <strong>ID</strong>
            <strong>Produto -- Estoque</strong>
            <strong>Ações</strong>
          </header>
          <Scroll>
            {products.map((product) => (
              <ProductItem key={product.id}>
                <span>{`#${product.id}`}</span>
                <span>{`${product.name} -- ${product.stock} ${
                  product.unitary ? 'Un' : 'Kg'
                }`}</span>
                <Options product={product} />
              </ProductItem>
            ))}
          </Scroll>
        </ProductList>
      </Container>
    </>
  );
}
