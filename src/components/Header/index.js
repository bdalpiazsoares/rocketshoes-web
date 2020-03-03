import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

import { Container, Cart } from './styles';
import logo from '../../assets/images/Logo.svg';

export default function Header() {
  const cartSize = useSelector(state =>
    state.cart.reduce((total, p) => {
      return total + p.amount;
    }, 0)
  );

  return (
    <Container>
      <Link to="/">
        <figure>
          <img src={logo} alt="RocketShoes" />
        </figure>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My Cart</strong>
          <span>
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <MdShoppingCart size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
