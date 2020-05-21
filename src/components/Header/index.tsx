import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';

import { RootState } from '../../store/modules/rootReducer';

import logo from '../../assets/logo.svg';
import { Container, Cart } from './styles';

const Header: React.FC = () => {
  const cartStore = useSelector((state: RootState) => state.cart);

  return (
    <>
      <Container>
        <Link to='/'>
          <img src={logo} alt='Logo' />
        </Link>
        <Cart to='/cart'>
          <div>
            <strong>Meu Carrinho</strong>
            <span>{cartStore.length} itens</span>
          </div>
          <MdShoppingBasket size={36} color='#fff' />
        </Cart>
      </Container>
    </>
  );
};

export default Header;
