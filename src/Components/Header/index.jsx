import { StyledHeader } from "./styles";

import { useHistory } from "react-router-dom";

import { FiShoppingCart, FiLogIn } from "react-icons/fi";

import { useSelector } from "react-redux";

const Header = () => {
  const history = useHistory();

  const cartProducts = useSelector((store) => store.cart);
  const quantity = cartProducts.length;

  return (
    <StyledHeader>
      <h2 onClick={() => history.push("/")}>Kenzie Shop</h2>
      <div>
        <FiShoppingCart onClick={() => history.push("/cart")} />
        {quantity > 0 && (
          <section>
            <span>{`${quantity}`}</span>
          </section>
        )}
        <p>Carrinho</p>
        <FiLogIn />
        <p>Entrar</p>
      </div>
    </StyledHeader>
  );
};

export default Header;
